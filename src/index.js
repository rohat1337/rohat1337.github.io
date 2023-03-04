import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TerminalContextProvider } from "react-terminal";
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <TerminalContextProvider>
      <App />
    </TerminalContextProvider>
  </ChakraProvider>
  </React.StrictMode>
);
