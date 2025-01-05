import React, { useState, useRef, useEffect } from 'react';
import { Container, TextInput, Paper, Text, Button, Stack, Group, Loader } from '@mantine/core';
import { ChatMessage } from '../components/ChatMessage';
import { useChat } from '../hooks/useChat';

export default function Chat() {
  const [context, setContext] = useState({ name: '', topic: '' });
  const [message, setMessage] = useState('');
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

  return (
    <Container size="md" py="xl">
      <Paper p="md" withBorder mb="md">
        <Group grow>
          <TextInput
            label="Your Name"
            value={context.name}
            onChange={(e) => setContext(prev => ({ ...prev, name: e.target.value }))}
            placeholder="Enter your name"
          />
          <TextInput
            label="Topic"
            value={context.topic}
            onChange={(e) => setContext(prev => ({ ...prev, topic: e.target.value }))}
            placeholder="Enter the topic"
          />
        </Group>
      </Paper>

      <Paper p="md" withBorder style={{ height: '60vh', overflowY: 'auto' }}>
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
