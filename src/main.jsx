import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; 
import store from './Redux/store.tsx'; 
import App from './App.jsx';
import './index.css';
import "antd/dist/reset.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Envolve o App com o Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
