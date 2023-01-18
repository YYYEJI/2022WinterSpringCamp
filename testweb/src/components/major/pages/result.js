import React from "react";
import styled from "styled-components";
import { FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useScript } from "./hooks";
import { useEffect } from "react";
import kakaoLogo from "./kakao.png";
import {useLocation} from 'react-router-dom';
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

function Image(props) {
    if(props.value === 0 || props.value === 1) {return <img alt="img" src="/images/0.png" width="150px"/>};
    if(props.value === 2 || props.value === 3) {return <img alt="img" src="/images/25.png" width="150px"/>};
    if(props.value === 4 || props.value === 5) {return <img alt="img" src="/images/50.png" width="150px"/>};
    if(props.value === 6 || props.value === 7) {return <img alt="img" src="/images/75.png" width="150px"/>};
    if(props.value === 8 || props.value === 9) {return <img alt="img" src="/images/100.png" width="150px"/>};
    return null;
}
function TestResult(props) {
    if(props.value === 0 || props.value === 1) {return <h3 className="test-result">다른과를 가세요.</h3>};
    if(props.value === 2 || props.value === 3) {return <h3 className="test-result">다른과를 고민해 보는 것도 ... 좋을 것 같네요.</h3>};
    if(props.value === 4 || props.value === 5) {return <h3 className="test-result">노력을 할지 다른 과를 갈지 많은 고민이 필요해요!</h3>};
    if(props.value === 6 || props.value === 7) {return <h3 className="test-result">꽤 능력이 있네요! <br></br>노력하면 천재를 이길 수 있어요!</h3>};
    if(props.value === 8 || props.value === 9) {return <h3 className="test-result">접합성은 이미 컴공생이신군요! <br></br>컴공생이 되기 전에 전공 공부를 미리 <br></br>시작해보면 좋을 것 같아요.</h3>};
    return null;
}
function Result() {
    
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
    const location = useLocation();
    const state = location.state;
    const sum = state.sum;



 
  return (
    <div className="result">
      <div id="result-block">
        <h1 className="result-name">내 결과는?</h1>
        {/* <h4 className="result-img">이미지</h4> */}
        {/* 넘어온 값 확인하기 */}
        {/* <div>sum: {sum}</div> */}
        <Image value={Number(sum)}/>
        {/* <h4 className="result-detail">설명</h4> */}
        <TestResult value={Number(sum)}/>

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

export default Result;
