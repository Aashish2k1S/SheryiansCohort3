import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'

document.body.classList.add('dark');


createRoot(document.getElementById('root')).render(<App />); 