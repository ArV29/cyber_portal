import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AllQuestions from "./Questions/AllQuestions"
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import QuestionThread from "./Questions/QuestionThread"

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

