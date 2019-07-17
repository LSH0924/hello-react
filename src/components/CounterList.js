import React from "react";
import Counter from "./Counter";
import PropTypes from "prop-types";

import "./CounterList.css";

const CounterList = ({counters, onIncreament, onDecreament, onSetColor}) =>{
    const counterList = counters.map((counter, index) => (
        <Counter
        key={index}
        index={index}
        {...counter}
        onIncreament={onIncreament}
        onDecreament={onDecreament}
        onSetColor={onSetColor}/>
    ));

    return (
        <div className="CounterList">
            {counterList}
        </div>
    );
};

CounterList.propTypes = {
    // 지정한 형태의 오브젝트로 이루어진 배열
    counters: PropTypes.arrayOf(PropTypes.shape({
        color: PropTypes.string,
        number: PropTypes.number
    })),
    onIncreament: PropTypes.func,
    onDecreament: PropTypes.func,
    onSetColor: PropTypes.func
};

CounterList.defaultProps = {
    counters:[]
};

export default CounterList;