import React, { Component } from 'react';

class EventPractice extends Component {

    state={
        message: "",
        name : ""
    }

    // input의 onChange 이벤트
    handleInputChange = (event)=>{
        this.setState({
            // 이벤트가 일어난 Element 의 이름을 키로, 값을 값으로(?) 설정한다.
            [event.target.name]:event.target.value
        });
    }

    // button의 onClick 이벤트
    handleButtonClick = ()=>{
        const {message, name} = this.state;
        if((message && name) !== ""){
            alert(name +" : "+ message);
            this.setState({
                message: "",
                name: ""
            });
        }else{
            alert("입력되지 않은 부분이 있습니다.");
        }
    }

    // 엔터키가 눌릴 때 일어날 이벤트 설정
    handleKeyPress = (event)=>{
        if(event.key === "Enter"){
            this.handleButtonClick();
        }
    }

    render() {
        const {message, name} = this.state;
        const style={"width" : "200px"};
        return (
            <div>
                <h1>이벤트 연습</h1>
                <h2>입력한 값 : 메시지 -> {message}</h2>
                <h2>입력한 값 : 이름 -> {name}</h2>
                <input
                type="text"
                name="message"
                value={message}
                style={style}
                placeholder="onChange 이벤트 연습 : 메시지"
                onChange={this.handleInputChange}
                // 키보드가 눌릴 때 실행할 이벤트
                onKeyPress={this.handleKeyPress}/>
                <br/>
                <input
                type="text"
                name="name"
                value={name}
                style={style}
                placeholder="onChange 이벤트 연습 : 이름"
                onChange={this.handleInputChange}
                // 키보드가 눌릴 때 실행할 이벤트
                onKeyPress={this.handleKeyPress}/>
                <br/>
                <button 
                onClick={this.handleButtonClick}
                style={style}
                >
                알람 띄우기
                </button>
            </div>
        );
    }
}

export default EventPractice;