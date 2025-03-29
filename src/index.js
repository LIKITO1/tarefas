import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import CriarTarefa from "./components/pages/CriarTarefa"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route element={<App/>} path="/"></Route>
        <Route element={<CriarTarefa/>} path="/criar"></Route>
      </Routes>
    </React.StrictMode>
  </Router>
);