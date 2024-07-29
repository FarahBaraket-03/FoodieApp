import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { Home } from './components/Home';
import { ListOfRecepie } from './components/ListOfRecepie';
import { AddRecepie } from './components/AddRecepie';
import { ModalRecipe } from './components/ModalRecipe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/auth" element={<App/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/mine" element={<ListOfRecepie/>}/>
        <Route path="/addrecepie" element={<AddRecepie/>}/>
        <Route path="/changerecepie" element={<ModalRecipe/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);


