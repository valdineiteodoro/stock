// @ts-ignore
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import http from './utils/http';
import store from './redux'
import { Provider } from 'react-redux'

http.get("/posts")
http.get("/posts/1")
http.get("https://viacep.com.br/ws/01001000/json/")

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);