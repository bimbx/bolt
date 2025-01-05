import { useState } from 'react';
import Anthropic from '@anthropic-ai/sdk';
import { ANTHROPIC_API_KEY, SYSTEM_PROMPT } from '../config/chat';

export function useChat(context) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const formatContext = () => {
    let contextStr = '';
    
    if (context.target) {
      contextStr += '\nTarget Audience:\n';
      Object.entries(context.target).forEach(([key, value]) => {
        if (value) contextStr += `${key}: ${value}\n`;
      });
    }
    
    if (context.offer) {
      contextStr += '\nOffer:\n';
      Object.entries(context.offer).forEach(([key, value]) => {
        if (value) contextStr += `${key}: ${value}\n`;
      });
    }
    
    if (context.proof) {
      contextStr += '\nProof Elements:\n';
      Object.entries(context.proof).forEach(([key, value]) => {
        if (value) contextStr += `${key}: ${value}\n`;
      });
    }
    
    if (context.content) {
      contextStr += '\nContent Strategy:\n';
      Object.entries(context.content).forEach(([key, value]) => {
        if (value) contextStr += `${key}: ${value}\n`;
      });
    }
    
    if (context.lead) {
      contextStr += '\nLead Generation:\n';
      Object.entries(context.lead).forEach(([key, value]) => {
        if (value) contextStr += `${key}: ${value}\n`;
      });
    }
    
    if (context.differentiators) {
      contextStr += '\nDifferentiators:\n';
      Object.entries(context.differentiators).forEach(([key, value]) => {
        if (value) contextStr += `${key}: ${value}\n`;
      });
    }
    
    return contextStr;
  };

  const sendMessage = async (content) => {
    try {
      setIsLoading(true);
      const userMessage = { role: 'user', content };
      setMessages(prev => [...prev, userMessage]);

      const anthropic = new Anthropic({
        apiKey: ANTHROPIC_API_KEY,
      });

      const contextStr = formatContext();
      const completion = await anthropic.messages.create({
        model: "claude-2",
        max_tokens: 1000,
        messages: [
          {
            role: 'user',
            content: `${SYSTEM_PROMPT}\n\nContext:\n${contextStr}\n\nUser: ${content}`
          }
        ]
      });

      const aiMessage = {
        role: 'assistant',
        content: completion.content[0].text
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, there was an error processing your request.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, isLoading, sendMessage };
}
