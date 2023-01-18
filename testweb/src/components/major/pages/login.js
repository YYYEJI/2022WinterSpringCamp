import React from "react";
<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
function Login() {
  const { Kakao } = window;
  <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
  const kakaoLogin = () => {
      Kakao.Auth.login({
        success() {
          Kakao.API.request({
            url: "/v2/user/me",
            success(res) {
              alert(JSON.stringify(res));
              const kakaoAccount = res.kakao_account;
              console.log(kakaoAccount);
            },
            fail(error) {
              console.log(error);
            },
          });
        },
        fail(error) {
          console.log(error);
        },
      });
  };
  return (
  <div className="App">
      <button onClick={kakaoLogin}>
      <img
          src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
          width="222"
          alt="카카오 로그인 버튼"
      />
      </button>
  </div>);
}

export default Login;