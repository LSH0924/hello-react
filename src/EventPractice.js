import React, { Component } from 'react';

class EventPractice extends Component {

    state={
        message: ""
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
                onChange={e=>{
                    // e 객체는 Synthetic(합성)Event로, 웹 브라우저의 네이티브 이벤트를 감싼다.
                    // 네이티브 이벤트랑 인터페이스가 같으므로, 순수 자바스크립트에서 HTML 이벤트를 사용할 때처럼 사용하면 됨.
                    this.setState({
                        message : e.target.value
                    })
                }}/>
                <button onClick={() => {
                    alert(message);
                    this.setState({
                        message: ""
                    });
                }}>비우기</button>
            </div>
        );
    }
}

export default EventPractice;