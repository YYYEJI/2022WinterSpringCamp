import React from "react";
import { Routes, Route } from "react-router-dom";

import Hello from "../components/pages/hello";
import StartExample from "../components/example/pages/start";
import QuestionExample from "../components/example/pages/question";
import LoadingExample from "../components/example/pages/loading";
import ResultExample from "../components/example/pages/result";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/example" element={<StartExample />} />
      <Route path="/example/question" element={<QuestionExample />} />
      <Route path="/example/loading" element={<LoadingExample />} />
      <Route path="/example/result" element={<ResultExample />} />
    </Routes>
  );
};

export default App;
