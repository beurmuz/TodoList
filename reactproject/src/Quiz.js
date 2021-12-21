import React from 'react';
import styled from "styled-components";
import img from "./scc_img01.png";
import TinderCard from "react-tinder-card";

const Quiz = (props) => {
    console.log(props);
    const [num, setNum] = React.useState(0); // 0으로 초기화

    const onSwipe = (direction) => {
        console.log("You swiped: " + direction);
        setNum(num + 1);
    }

    if(num > 10) {
        return <div>퀴즈 끝!</div>;
    }

    return  (
        <QuizContainer>
            <p>
                <span> {num + 1}번 문제</span>
            </p>   
            {props.list.map((el, index) => {
                if(num === index) {
                    return (
                        <Question key={index}>{el.question}</Question>
                    );
                }
            })}

            <AnswerZone>
                <Answer>{"O "}</Answer>
                <Answer>{" X"}</Answer>
            </AnswerZone>

            {props.list.map((el, index) => {
                if(num === index) {
                    return (
                        <DragItem key={index}>
                            <TinderCard
                                onSwipe={onSwipe}
                                onCardLeftScreen={onSwipe}
                                onCardRightScreen={onSwipe}
                                preventSwipe={["up", "down"]}
                            >
                                <img src={img} />
                            </TinderCard>
                        </DragItem>
                    );
                }
            })}

            
        </QuizContainer>
    )
};

const QuizContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    & > p > span {
        font-size: 1.4em;
        padding: 8px 16px;
        background-color: #fef5d4;
        border-radius: 30px;
    }
`;

const Question = styled.h1`
    font-size: 1.5em;
`;

const AnswerZone = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    min-height: 70vh;
`;

const Answer = styled.div`
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    font-weight: 600;
    color: #dadafc77;
`;

const DragItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    & > div {
        border-radius: 500px;
        background-color: #ffd6aa;
    }

    & img {
        max-width: 150px;
      }
`;

export default Quiz;