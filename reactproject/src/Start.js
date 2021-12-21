import React from 'react';
import img from './scc_img01.png';

const Start = (props) => {
    return (
        <div className='container'>
            <div className='imgFrame'>
                <img src={img} />
            </div>
            <h1>
                나는{" "} <span>{props.name}</span>
                에 대해 얼마나 알고 있을까?
            </h1>
            <input type="text" placeholder="내 이름"></input>
            <button className='start-button'>시작하기</button>
        </div>
        
    );     
};

export default Start;