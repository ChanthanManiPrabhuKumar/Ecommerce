import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopContextProvider from './Components/ShopContent/ShopeContent.jsx'


createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
    <StrictMode>
    <App />
   </StrictMode>
  </ShopContextProvider>
)
