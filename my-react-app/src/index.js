import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import App from './App.jsx';
import reportWebVitals from './reportWebVitals';

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ToDoApp from "./Pages/ToDoApp";



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*
export default function Test () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDoApp/>}>
          <Route/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<></>,
  document.getElementById('root')
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
