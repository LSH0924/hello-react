import React, {Component} from 'react';
import './App.css';

import LifeCycleSample from "./LifeCycleSample"

function getRandomColor() {
  // 16진수로 된 색깔 코드 만들어서 반환해주기
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

class App extends Component {
  state = {
    color: "#000000"
  };

  handleClick = () => {
    this.setState({
      // getRandomColor()함수를 실행한 결과를 state.color 으로 설정한다.
      color: getRandomColor()
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Random color</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

export default App;
