import React from 'react';
import styled from 'styled-components';

const ListDetail = (props) => {
    return (
        <Content>
            <p>라우팅 연습중 😎</p>
            <button onClick={() => {props.history.goBack();}}> back 🚗 </button>
        </Content>
    )
};

const Content = styled.div`
    padding: 20px;

    & p {
    color: #DEB3CF;
    }
    
    & button {
        border: none;
        background-color: #DEB3CF;
        height: 40px;
        color: white;
        font-size: 17px;

        &:hover {
            cursor: pointer;
            background-color: #FFC371;
            transform: scale(1.1);
        }
    }
`;

export default ListDetail;