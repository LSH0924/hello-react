import React, { Component } from 'react';

class ScrollBox extends Component {
    render() {
        const style = {
            border : "1px solid black",
            height : "300px",
            width : "300px",
            overflow : "auto",
            position : "relative"
        }

        const innerStyle = {
            width : "100%",
            height : "650px",
            background: "linear-gradient(lightcoral, lightgreen)"
        };

        return (
            <div
            style={style}
            ref={r => this.box = r}
            >
                <div style={innerStyle}/>
            </div>
        );
    }
}

export default ScrollBox;