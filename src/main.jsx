import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; 
import store from './Redux/store.tsx'; 
import App from './App.jsx';
import './index.css';
import "antd/dist/reset.css";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// AOS.init({
//   duration: 1000, // Duração da animação
//   offset: 200, // Distância de ativação
// });
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Envolve o App com o Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
