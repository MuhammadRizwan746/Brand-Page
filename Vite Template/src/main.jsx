import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Reducer from './Reducer.jsx'
import Useeffact from './compunents/useeffact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Reducer />
    <Useeffact/>
  </React.StrictMode>,
)
