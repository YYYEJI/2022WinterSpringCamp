import React from "react";
import { Routes, Route } from "react-router-dom";

import Hello from "../components/pages/hello";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hello />} />
    </Routes>
  );
};

export default App;
