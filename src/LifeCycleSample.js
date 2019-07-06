import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null
  };

  //ref 를 설정할 부분
  myRef = null;

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  // 변화될 props의 값, 변화 이전 state
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    } else return null;
  }

  componentDidMount() {
    console.log("componentDidMoun");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    // 숫자 마지막 자리가 4면 랜더링 하지 않음 => false 반환
    return nextState.number % 10 !== 4;
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) console.log("업데이트 되기 직전 생상", snapshot);
  }

  render() {
    console.log("render");

    const style = {
      color: this.props.color
    };

    return (
      <div>
        <h1 style={style} ref={r => (this.myRef = r)}>
          {this.state.number}
        </h1>
        <p>Color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}
export default LifeCycleSample;
