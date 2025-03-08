import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import App from "./App.jsx";

createRoot(document.getElementById('root')).render(<StrictMode>
    <BrowserRouter>
        <ToastContainer position="top-left" theme="colored" autoClose={2000}/>
        <App/>
    </BrowserRouter>
</StrictMode>,)
