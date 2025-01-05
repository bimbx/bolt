import React from 'react';
import { Paper, Text } from '@mantine/core';

export function ChatMessage({ message }) {
  const isUser = message.role === 'user';

  return (
    <Paper
      p="sm"
      style={{
        backgroundColor: isUser ? '#e3f2fd' : '#f5f5f5',
        marginLeft: isUser ? 'auto' : '0',
        marginRight: isUser ? '0' : 'auto',
        maxWidth: '80%',
      }}
    >
      <Text size="sm" weight={500} color={isUser ? 'blue' : 'dark'}>
        {isUser ? 'You' : 'AI'}
      </Text>
      <Text>{message.content}</Text>
    </Paper>
  );
}
