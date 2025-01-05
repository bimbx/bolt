import React, { useState, useRef, useEffect } from 'react';
import { Container, TextInput, Paper, Button, Stack, Group, Loader } from '@mantine/core';
import { ChatMessage } from '../components/ChatMessage';
import { ContextForm } from '../components/ContextForm';
import { ContextPreview } from '../components/ContextPreview';
import { useChat } from '../hooks/useChat';

export default function Chat() {
  const [context, setContext] = useState({
    target: {},
    offer: {},
    proof: {},
    content: {},
    lead: {},
    differentiators: {}
  });
  const [message, setMessage] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [chatStarted, setChatStarted] = useState(false);
  const { messages, isLoading, sendMessage } = useChat(context);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    await sendMessage(message);
    setMessage('');
  };

  const handleContextSubmit = () => {
    setShowPreview(true);
  };

  const handleStartChat = () => {
    setChatStarted(true);
  };

  if (!chatStarted) {
    return (
      <Container size="xl" py="xl">
        {!showPreview ? (
          <Paper p="md" withBorder>
            <ContextForm context={context} setContext={setContext} />
            <Group position="right" mt="md">
              <Button onClick={handleContextSubmit}>Preview</Button>
            </Group>
          </Paper>
        ) : (
          <Paper p="md" withBorder>
            <ContextPreview 
              context={context} 
              onEdit={() => setShowPreview(false)}
              onConfirm={handleStartChat}
            />
          </Paper>
        )}
      </Container>
    );
  }

  return (
    <Container size="xl" py="xl">
      <Paper p="md" withBorder style={{ height: '70vh', overflowY: 'auto' }}>
        <Stack spacing="md">
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} />
          ))}
          {isLoading && <Loader />}
          <div ref={messagesEndRef} />
        </Stack>
      </Paper>

      <form onSubmit={handleSend}>
        <Group mt="md" spacing="xs">
          <TextInput
            style={{ flex: 1 }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>Send</Button>
        </Group>
      </form>
    </Container>
  );
}
