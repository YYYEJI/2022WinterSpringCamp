import React from "react";
import {Background, LoadingText} from './styles';
import Spinner from './spinner.gif';

function Loading() {
  return (
      <div className="loading">
          <p id="loading-block">
            <video src="/images/duck.mp4" type="video/mp4" loop autoPlay muted width="200"/>
          </p>
          <Background>
            <LoadingText>Loading ... </LoadingText>
            <img src={Spinner} alt="로딩중" width="5%" />
          </Background>
      </div>
    );
}

export default Loading;



