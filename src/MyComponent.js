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

    constructor(props){
        super(props);
        this.state={
            number:0
            ,TMI:["한국에 가고싶어하지!", "흔들의자에 앉아서 전철 소리 듣는걸 좋아해.", "체력이 거지야..."]
            ,clickCount:0
        }
    }

    render () {
        // state 에 있는 값 할당하기
        const {TMI, clickCount} = this.state;
        // 클릭한 횟수만큼 필터링하고 표시하기
        const tmiList = TMI
        .filter((element, index) => index < clickCount)
        .map((tmi, index) => 
            (<p key={index}>{tmi}</p>)
        );

        return (
            <div>
                실습용 새 컴포넌트 만들기 - new!
                <h1>부모 컴포넌트에서 이름 받아오기</h1>
                <p>안녕! 내 이름은 {this.props.name} 이라구 해!</p>
                <p>내 고양이는 {this.props.catAge}살이야.</p>
                <p>하지만 지금은 일본에 살기때문에 실질적으로는 {this.state.number}마리야... 나만 고양이 없어...</p>
                {/* button에서 이벤트 직접 집어넣기 */}
                <button onClick={()=>{
                        const count = clickCount < 3 ? clickCount + 1 : clickCount;
                        this.setState({clickCount:count});
                    }
                }>TMI생성기 : 남은 개수 {3 - this.state.clickCount}</button>
                {/* JSX 밖에 있는 자바스크립트 변수 사용하기 */}
                {tmiList}
            </div>
        )
    }
}

export default MyComponent;