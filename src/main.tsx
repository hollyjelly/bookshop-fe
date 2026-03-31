import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BookStoreThemeProvider} from "./context/themeContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BookStoreThemeProvider>
          <App />
      </BookStoreThemeProvider>
  </StrictMode>,
)
