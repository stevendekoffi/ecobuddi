import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
// Supports weights 200-900
import '@fontsource-variable/nunito';
// Supports weights 300-700
import '@fontsource-variable/space-grotesk';
import theme from './theme/theme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
