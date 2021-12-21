import React from "react";

const Detail = (props) => {

  return (
      <div>
          <h1>상세 페이지입니다!</h1>
          <button onClick={() => {props.history.goBack();}}>뒤로가기</button>
      </div>
  ) 
  
};

export default Detail;