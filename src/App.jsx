import React from 'react';
import { MantineProvider } from '@mantine/core';
import Chat from './pages/Chat';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Chat />
    </MantineProvider>
  );
}
