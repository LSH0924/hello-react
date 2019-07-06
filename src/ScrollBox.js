import React, { Component } from "react";

class ScrollBox extends Component {
  buttonScrollDown = () => {
    const { scrollHeight, clientHeight } = this.box;
    // 안쪽 div 의 높이에서 바깥쪽 div의 높이를 뺀 값을 스크롤바 위치에 설정한다.
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative"
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(lightcoral, lightgreen)"
    };

    return (
      <div style={style} ref={r => (this.box = r)}>
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
