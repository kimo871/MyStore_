import './index.css'
import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import Navbar from './Navbar';
ReactDOM.render(
	<BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById("root")
);
