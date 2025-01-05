import React, { useState } from 'react';
import { Container, TextInput, Textarea, Button, Title, Paper } from '@mantine/core';

export default function Admin() {
  const [systemPrompt, setSystemPrompt] = useState('');
  const [apiKey, setApiKey] = useState('');

  const handleSave = () => {
    localStorage.setItem('systemPrompt', systemPrompt);
    localStorage.setItem('apiKey', apiKey);
  };

  return (
    <Container size="sm" py="xl">
      <Title order={1} mb="lg">Admin Settings</Title>
      <Paper p="md" withBorder>
        <TextInput
          label="Anthropic API Key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter your Anthropic API key"
          mb="md"
        />
        <Textarea
          label="System Prompt"
          value={systemPrompt}
          onChange={(e) => setSystemPrompt(e.target.value)}
          placeholder="Enter the system prompt"
          minRows={4}
          mb="md"
        />
        <Button onClick={handleSave}>Save Settings</Button>
      </Paper>
    </Container>
  );
}
