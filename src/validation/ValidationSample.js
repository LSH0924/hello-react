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
                />
                <button
                onClick={this.handleButtonClick}
                >Validate!</button>
            </div>
        );
    }
}

export default ValidationSample;