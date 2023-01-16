import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useScript } from "./hooks";
import { useEffect } from "react";
import kakaoLogo from "./kakao.png";


// Container for Title and Button 
const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// Container for Button Location
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 48px);
    grid-column-gap: 8px;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
`;


// Style을 적용한 버튼 컴포넌트 추가
const URLShareButton = styled.button`
	width: 48px;
	height: 48px;
	color: white;
	border-radius: 24px;
	border: 0px;
	font-weight: 800;
	font-size: 18px;
	cursor: pointer;
	background-color: #7362ff;
	&:hover {
		background-color: #a99fee;
	}
`;

const KakaoShareButton = styled.a`
	cursor: pointer;
`;

const KakaoIcon = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 24px;
`;

function Start() {
  const currentUrl = window.location.href;
	// kakao SDK import하기
	const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
	
	// kakao sdk 초기화하기
	// status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
	useEffect(() => {
		if (status === "ready" && window.Kakao) {
			// 중복 initialization 방지
			if (!window.Kakao.isInitialized()) {
				// 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
				window.Kakao.init("발급받은 javascript key");
			}
		}
	}, [status]);

    const handleKakaoButton = () => {
        window.Kakao.Link.sendScrap({
            requestUrl: currentUrl,
        });
    };

  return (
    
    <div className="start">
        <div id="start-block">
          <br></br><br></br>
          <video src="/images/duck.mp4" type="video/mp4" loop autoPlay muted width="200"/>
          <h2 className="start-title">전공테스트</h2>
          <h5>과연 컴공이 나에게 잘 맞을까 ?</h5>
          <h5>누가 좀 알려줘 ⸌ ◦̈ ⸍ ! ! !</h5><br/>
          <button className="start-page-btn">
          <Link to="/example/question">테스트 시작하기</Link>
          </button>

          <div className="">참여자수: ???</div>
          <FlexContainer>
            <h5>↓  친구들한테 공유하기  ↓</h5>
            <GridContainer>
                <FacebookShareButton url={currentUrl}>
                    <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
                </FacebookShareButton>
                <TwitterShareButton url={currentUrl}>
                    <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
                </TwitterShareButton>
                <CopyToClipboard text={currentUrl}>
                    <URLShareButton>URL</URLShareButton>
                </CopyToClipboard>
                <KakaoShareButton onClick={handleKakaoButton}>
                    <KakaoIcon src={kakaoLogo}></KakaoIcon>
                </KakaoShareButton>
            </GridContainer>
        </FlexContainer>
        </div>
    </div>
  );
  
}

export default Start;
