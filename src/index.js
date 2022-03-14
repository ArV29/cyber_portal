import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AllQuestions from "./Questions/AllQuestions"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import QuestionThread from "./Questions/AllQuestions"

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/allQuestions" element={<AllQuestions />} />
        <Route path="/" element={<App />} />
        <Route path="/questionThread/:id" element={<QuestionThread />} />
      </Routes>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

