import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Fun} from './contest/Store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    

      <Fun>
        
          <App />
      </Fun>

  </StrictMode>,
)
