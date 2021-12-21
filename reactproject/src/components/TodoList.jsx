import React from 'react';
import styled from 'styled-components';

const TodoList = (props) => {
    const lists = props.lists;

    return (
        <ListsStyle>
            {lists.map((el, index) => {
                return (
                    <ElementStyle key={index} onClick={() => {
                        props.history.push('/listdetail');
                    }}>{el}</ElementStyle>
                )
            })}
        </ListsStyle>
    )
};

const ListsStyle = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0px 20px;
    overflow: hidden;
    overflow-y: auto;
`;

// padding-left:0px;

const ElementStyle = styled.li`
    border: 1px dotted #DEB3CF;
    color: #DEB3CF;
    padding: 20px;
    margin: 7px;
    
    &:hover {
        cursor: pointer;
        border: 1px solid #FFC371;
        color: #FFC371;
    }
`;

export default TodoList;