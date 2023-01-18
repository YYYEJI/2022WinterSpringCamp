import React from "react";
import { Routes, Route } from "react-router-dom";

import Hello from "../components/pages/hello";
import StartMajor from "../components/major/pages/start";
import QuestionMajor from "../components/major/pages/question";
import LoadingMajor from "../components/major/pages/loading";
import ResultMajor from "../components/major/pages/result";
import Login from "../components/major/pages/login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/major" element={<StartMajor />} />
      <Route path="/major/question" element={<QuestionMajor />} />
      <Route path="/major/loading" element={<LoadingMajor />} />
      <Route path="/major/result" element={<ResultMajor />} />
      <Route path="/major/login" element={<Login />} />
    </Routes>
  );
};

export default App;
