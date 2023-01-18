
const initKakao = () => {
  const jsKey = "05f7d73293108ac4e8a94f699334e6ef";
  const Kakao = window.Kakao;
  if (Kakao && !Kakao.isInitialized()) {
    Kakao.init(jsKey);
    console.log(Kakao.isInitialized());
  }
};

useEffect(() => {
  initKakao();
}, []);


import React from "react";


