import React, {Component} from "react";

class MyComponent extends Component {

    static defaultProps = {
        name:"이수현"
    }

    render () {
        return (
            <div>
                실습용 새 컴포넌트 만들기 - new!
                <h1>부모 컴포넌트에서 이름 받아오기</h1>
                <p>안녕! 내 이름은 {this.props.name} 이라구 해!</p>
            </div>
        )
    }
}

export default MyComponent;