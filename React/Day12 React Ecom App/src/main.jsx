import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyShopProvider } from './context/MyShop.jsx';

createRoot(document.getElementById('root')).render(
    <MyShopProvider>
        <App />
    </MyShopProvider>
); 