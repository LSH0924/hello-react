import React, { Component } from 'react';

import "./ValidationSample.css";

class ValidationSample extends Component {

    state={
        password:"",
        clicked:false,
        validate:false
    }

    handleChange= (e) =>{
        this.setState({
            password : e.target.value
        });
    }

    handleButtonClick = ()=>{
        this.setState({
            clicked : true,
            validate: this.state.password === "1234"
        });
        // 일반 DOM 을 사용하는것처럼 사용 가능. 포커싱한다.
        this.input.focus();
    }

    render() {
        const {password, clicked, validate} = this.state;
        return (
            <div>
                <h1>비밀번호는 1234 입니다.</h1>
                <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                className={clicked? (validate ? "success" : "failure") : ""}
                // 콜백함수로 ref 설정하기
                ref={r => this.input = r}
                />
                <button
                onClick={this.handleButtonClick}
                >Validate!</button>
            </div>
        );
    }
}

export default ValidationSample;