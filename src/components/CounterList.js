import React from "react";
import Counter from "./Counter";
import PropTypes from "prop-types";

import "./CounterList.css";

const CounterList = ({counters, onIncreament, onDecreament, onSetColor}) =>{
    const counterList = counters.map((counter, index) => {
        return (
        <Counter
        key={index}
        index={index}
        number={counter.get("number")}
        color={counter.get("color")}
        onIncreament={onIncreament}
        onDecreament={onDecreament}
        onSetColor={onSetColor}/>
    )});

    return (
        <div className="CounterList">
            {counterList}
        </div>
    );
};

CounterList.propTypes = {
    counters: PropTypes.object,
    onIncreament: PropTypes.func,
    onDecreament: PropTypes.func,
    onSetColor: PropTypes.func
};

CounterList.defaultProps = {
    counters:[]
};

export default CounterList;