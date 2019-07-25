import React from "react";
import Counter from "./Counter";
import PropTypes from "prop-types";

import "./CounterList.css";

const CounterList = ({state, onIncreament, onDecreament, onSetColor, onSetIndex}) =>{
    const counterList = state.counter.map((counter, index) => {
        return (
            <Counter
            key={index}
            index={index}
            number={counter.get("number")}
            color={counter.get("color")}
            onIncreament={onIncreament}
            onDecreament={onDecreament}
            onSetColor={onSetColor}
            onSetIndex={onSetIndex}/>
        );
    });

    return (
        <div className="CounterList">
            {counterList}
        </div>
    );
};

CounterList.propTypes = {
    counters: PropTypes.array,
    onIncreament: PropTypes.func,
    onDecreament: PropTypes.func,
    onSetColor: PropTypes.func
};

CounterList.defaultProps = {
    counters:[]
};

export default CounterList;