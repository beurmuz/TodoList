import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";

import styled from 'styled-components';

import TodoList from './components/TodoList';
import ListDetail from './components/ListDetail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: ['클릭 시 상세페이지로 넘어갑니다.'],
    };

    this.text = React.createRef();
  }

  componentDidMount() {
    console.log(this.text);
  }

  addList = () => {
    let lists = this.state.lists;
    const new_list = this.text.current.value;

    if(new_list) {
      this.setState({lists: [...lists, new_list]});
      this.text.current.value = '';
    } else {
      alert('할 일을 입력하세요!');
    }
  }

  render() {
    return (
      <BasicBackground>
        <Container>
          <Header>To do List</Header>
          <ListsBox>
            <Switch>
              <Route path="/" exact render={(props) => <TodoList lists={this.state.lists} history={this.props.history}/>}/>
              <Route path="/listdetail" component={ListDetail} />
            </Switch>
          </ListsBox>
          <InputBox>
            <input type='text' placeholder='할 일을 입력하세요!' ref={this.text}></input>
            <button onClick={this.addList}>add</button>
          </InputBox>
        </Container>
      </BasicBackground>
    );
  }
}
const BasicBackground = styled.body`
  margin: 0px;
  background-color: #7f5a83;
  background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
  height: 100vh;
  display: flex;
  overflow-y: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  width: 400px;
  margin: 30px auto;
  background-color: transparent;
  border: 1px solid #DEB3CF;
  border-radius: 10px;
`;

const Header = styled.h1`
  color: #DEB3CF;
  font-size: 35px;
  text-align: center;
  margin: 20px;
`;

const ListsBox = styled.article`
  display: flex;
  flex-direction: column;
  height: 680px;
`;

const InputBox = styled.div`
  margin: auto;
  
  & input {
    background-color: transparent;
    color: #FFC371;
    font-size: 17px;
    outline: none;
    width: 280px;
    height: 30px;
    border: 1px solid #DEB3CF;
    padding: 7px;
    margin: 5px;
    border-radius: 10px;
  
    ::placeholder {
      color: #DEB3CF; 
    }
  }

  & button {
    border: none;
    background-color: transparent;
    height: 40px;
    width: 60px;
    color: #DEB3CF;
    font-size: 17px;

    &:hover {
      cursor: pointer;
      color: #FFC371;
      transform: scale(1.1);
    }
  }
`;

export default withRouter(App);
