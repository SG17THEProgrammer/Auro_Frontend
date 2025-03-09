import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 58bd74b (final)
import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Navbar></Navbar>
    <App />
<<<<<<< HEAD
=======
=======
import { ThemeProvider } from './themeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeProvider>
    <App />
  </ThemeProvider>
>>>>>>> 46eb6ca (final)
>>>>>>> 58bd74b (final)
  </StrictMode>,
)
