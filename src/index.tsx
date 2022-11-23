import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './index.css';
import http from './util/http'

http.get("/posts")
http.get("/posts/1")
http.get("https://viacep.com.br/ws/01001000/json/")

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


