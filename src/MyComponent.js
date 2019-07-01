/* eslint-disable react/no-typos */
import React, {Component} from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {

    static defaultProps={
        name: "이수현"
        , catAge:9
    }

    static propTypes={
        name:PropTypes.string
        , catAge: PropTypes.number.isRequired
    }

    render () {
        return (
            <div>
                실습용 새 컴포넌트 만들기 - new!
                <h1>부모 컴포넌트에서 이름 받아오기</h1>
                <p>안녕! 내 이름은 {this.props.name} 이라구 해!</p>
                <p>내 고양이는 {this.props.catAge}살이야.</p>
            </div>
        )
    }
}

export default MyComponent;