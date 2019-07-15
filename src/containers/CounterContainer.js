import Counter from "../components/Counter";
import * as actions from "../actions";
import {connect} from "react-redux";

// 색상 랜덤 선택 함수 내보내기 : 12개 중 랜덤
export function getRandomColor(){
    const colors = [
        "#00B9FF",
        "#B4C3FF",
        "#70D2B4",
        "#2ABCB4",
        "#FF607F",
        "#DC6089",
        "#FFBE0A",
        "#FF895A",
        "#A48654",
        "#CD3C3C",
        "#853C3C",
        "#282828"
    ]
    return colors[Math.floor(Math.random()*12)];
}

// props 설정
// connect의 첫 번째 매개변수
// store 안의 state 값을 CounterContainer의 props 로 연결한다
const mapStateToProps = (state) => ({
    number: state.numberData.number,
    color: state.colorData.color
});

// connect의 두 번째 매개변수
// 액션 생성 함수를 사용해 액션을 생성하고,
// 해당 액션을 dispatch 하는 함수를 만든 후 이 함수를 props에 연결한다.
const mapDispatchToProps = (dispatch)=>({
    onIncreament: () => dispatch(actions.increament()),
    onDecreament: () => dispatch(actions.decreament()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color))
    }
});

// Counter 컴포넌트의 컨테이너 컴포넌트
// connect 가 반환한 컴포넌트에 Counter를 넣어줌으로써
// Counter 컴포넌트를 애플리케이션의 데이터 레이어와 묶는 역할을 한다.
const CounterContainer = connect(
    mapStateToProps, mapDispatchToProps
    )(Counter);

export default CounterContainer;