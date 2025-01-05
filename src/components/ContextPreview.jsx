import React from 'react';
import { Paper, Text, Title, Stack, Button, Group } from '@mantine/core';

export function ContextPreview({ context, onEdit, onConfirm }) {
  const renderSection = (title, data) => {
    if (!data || Object.keys(data).length === 0) return null;

    const hasContent = Object.values(data).some(value => value);
    if (!hasContent) return null;

    return (
      <Paper p="md" withBorder>
        <Title order={3} size="h4" mb="sm">{title}</Title>
        <Stack spacing="xs">
          {Object.entries(data).map(([key, value]) => {
            if (!value) return null;
            return (
              <div key={key}>
                <Text size="sm" weight={500} color="dimmed">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </Text>
                <Text>{value}</Text>
              </div>
            );
          })}
        </Stack>
      </Paper>
    );
  };

  return (
    <Stack spacing="md">
      <Title order={2} size="h3">Context Preview</Title>
      {renderSection('Target Audience', context.target)}
      {renderSection('Offer', context.offer)}
      {renderSection('Proof Elements', context.proof)}
      {renderSection('Content Strategy', context.content)}
      {renderSection('Lead Generation', context.lead)}
      {renderSection('Differentiators', context.differentiators)}
      
      <Group position="right" mt="md">
        <Button variant="outline" onClick={onEdit}>Edit</Button>
        <Button onClick={onConfirm}>Start Chat</Button>
      </Group>
    </Stack>
  );
}
