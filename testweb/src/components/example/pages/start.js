import React from "react";
import { Link } from "react-router-dom";

function Start() {
  return (
    <div className="start">
      <Link to="/example/question">시작하기</Link>
    </div>
  );
}

export default Start;
