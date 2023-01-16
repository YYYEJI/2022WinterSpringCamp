import React from "react";
import { Link } from "react-router-dom";

function LinkToResult(props) {
  const style={ textDecoration: 'none', color: 'white' }
  // const sum = Question.sum;
  if (props.value===9) {
    return (
      <div id="question-block">
        <h2 className="question-des">Question 9</h2>
        <List value={9} />
        <img alt="img" src="/images/qeustion.png" />

        <button className="button"><Link style={style} to="/example/result" state={{sum:'1'}} >네. 그렇습니다.</Link></button><br/>
        <button className="button"><Link style={style} to="/example/result" state={{sum:'1'}} >아니요. 그렇지 않습니다.</Link></button>
        {/* <h1>Sum: {sum}</h1> */}
      </div>
      
    );
  }
  return null;
} 

function List(props) {
  if(props.value===1) {return <h3>코딩에 자신이 있는가 ?</h3>};
  if(props.value===2) {return <h3>코딩에 흥미가 있는가?</h3>};
  if(props.value===3) {return <h3>논리적인 문제를 푸는 것을 좋아하는가?</h3>};
  if(props.value===4) {return <h3>원하는대로 안 됐을 때 포기가 빠른가? </h3>};
  if(props.value===5) {return <h3>애매모호한 것을 싫어하고 <br></br>원인과 결과가 분명한 것을 좋아하는가?</h3>};
  if(props.value===6) {return <h3>순수 이론적인 보다는 <br></br>실생활에 직접 응용하는 것을 좋아하는가?</h3>};
  if(props.value===7) {return <h3>문제를 해결하고자 하는 열정이 있는가?</h3>};
  if(props.value===8) {return <h3>영어로 읽는 문서에 대한 어려움은 없는가? </h3>};
  if(props.value===9) {return <h3>독학에 대한 어려움은 없는가? </h3>};

  
  return null;
}

export function Question() {
  const [counter, setCounter] = React.useState(1);
  const [sum, setSum] = React.useState(0);
  const onCount = () => {
    setCounter((current) => current+1);  
  }

  const onSum = () => {
    setSum((current) => current+1);
  }
  

  const getSum = () => {
    return this._sum;
  }


  return ( 
    
    <div className="question">

      <div id="question-block">
        <h2 className="question-des">Question {counter}</h2>
        <List value={counter} />
        <img alt="img" src="/images/qeustion.png" />
        
        <button className="button" onClick={()=>{onCount(); onSum();}}>네. 그렇습니다.</button><br/>
        <button className="button" onClick={onCount}>아니요. 그렇지 않습니다.</button>

        <div id="show" onClick={getSum}>{sum}</div>
      </div>
      <LinkToResult value={counter} />
      <div>sum: {sum}</div>
    </div>
  );
}

export default Question;
