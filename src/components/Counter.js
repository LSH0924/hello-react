// 프리젠테이셔널 컴포넌트
import React from "react";
import PropTypes from "prop-types";
import "./Counter.css";

const Counter = ({
  number,
  color,
  index,
  onIncreament,
  onDecreament,
  onSetColor,
  onSetIndex
}) => {
  const style = {
    backgroundColor: color
  };
    
    return (
        <div
        className="Counter"
        onClick={() => {
          onIncreament(index);
          onSetIndex(index);
        }}
        // 마우스 오른쪽 클릭할 때의 이벤트 설정
      onContextMenu={e => {
            e.preventDefault();
            onDecreament(index);
        }}
        onDoubleClick={() =>onSetColor(index)}
        style={style}>
            {number}
        </div>
    );
};

// Counter컴포넌트가 받는 props들의 type 설정하기
Counter.propTypes={
    number: PropTypes.number,
    color: PropTypes.string,
    index: PropTypes.number,
    onIncreament: PropTypes.func,
    onDecreament: PropTypes.func,
    onSetColor: PropTypes.func
}

// Counter 컴포넌트의 기본 props 설정하기
Counter.defaultProps={
    number: 0,
    color: "black",
    index: 0,
    onIncreament: () => console.warn("onIncreament not defined"),
    onDecreament: () => console.warn("onDecreament not defined"),
    onSetColor: () => console.warn("onSetColor not defined")
};

export default Counter;