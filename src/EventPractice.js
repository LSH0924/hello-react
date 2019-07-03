import React, { Component } from 'react';

class EventPractice extends Component {

    state={
        message: ""
    }

    constructor(props){
        super(props);
        // 임의로 만든 메서드들을 각각 this 에 바인딩
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    // input의 onChange 이벤트
    handleInputChange(event){
        this.setState({
            message:event.target.value
        });
    }

    // button의 onClick 이벤트
    handleButtonClick(event){
        alert(this.state.message);
        this.setState({
            message: ""
        });
    }

    render() {
        const {message} = this.state;
        return (
            <div>
                <h1>이벤트 연습</h1>
                <h2>입력한 값 : {message}</h2>
                <input
                type="text"
                name="message"
                value={message}
                placeholder="onChange 이벤트 연습"
                onChange={this.handleInputChange}/>
                <button onClick={this.handleButtonClick}>비우기</button>
            </div>
        );
    }
}

export default EventPractice;