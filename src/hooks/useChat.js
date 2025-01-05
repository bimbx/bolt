import { useState } from 'react';
import OpenAI from 'openai';

export function useChat(context) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (content) => {
    try {
      setIsLoading(true);
      const userMessage = { role: 'user', content };
      setMessages(prev => [...prev, userMessage]);

      const apiKey = localStorage.getItem('apiKey');
      const systemPrompt = localStorage.getItem('systemPrompt');

      if (!apiKey) {
        throw new Error('API key not found');
      }

      const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: 'system',
            content: systemPrompt.replace('[name]', context.name).replace('[topic]', context.topic)
          },
          ...messages,
          userMessage
        ]
      });

      const aiMessage = {
        role: 'assistant',
        content: completion.choices[0].message.content
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
