import React from "react";
import PropTypes from "prop-types";

import "./Buttons.css";

const Buttons = ({onCreate, onRemove}) => {
    return (
        <div className="Buttons">
      <div className="btn add" onClick={onCreate}>
        카운터 생성
      </div>
      <div className="btn remove" onClick={() => onRemove()}>
        카운터 제거
      </div>
        </div>
    );
};

Buttons.propTypes = {
    onCreate: PropTypes.func,
    onRemove: PropTypes.func
};

Buttons.defaultProps = {
    onCreate: () => console.warn("onCreate not defined"),
    onRemove: () => console.warn("onRemove not defined")
};

export default Buttons;