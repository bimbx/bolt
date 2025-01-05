import React from 'react';
import { Paper, Text, Group } from '@mantine/core';

export function ChatMessage({ message }) {
  const isUser = message.role === 'user';

  return (
    <Paper
      p="md"
      withBorder
      style={{
        backgroundColor: isUser ? '#e3f2fd' : '#f5f5f5',
        marginLeft: isUser ? 'auto' : '0',
        marginRight: isUser ? '0' : 'auto',
        maxWidth: '80%',
      }}
    >
      <Group position="apart" mb="xs">
        <Text size="sm" weight={500} color={isUser ? 'blue' : 'dark'}>
          {isUser ? 'You' : 'AI Assistant'}
        </Text>
      </Group>
      <Text style={{ whiteSpace: 'pre-wrap' }}>{message.content}</Text>
    </Paper>
  );
}
