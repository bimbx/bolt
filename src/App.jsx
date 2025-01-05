import React from 'react';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Chat from './pages/Chat';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
