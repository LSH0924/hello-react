import CounterList from "../components/CounterList";
import * as actions from "../actions";
import {connect} from "react-redux";
import getRandomColor from "../lib/getRandomColor"

// store 안의 state 값을 props 로 연결
const mapStateToProps = (state) => ({counters: state.counters});

const mapDispatchToProps = (dispatch) => ({
    onIncreament: (index)=> dispatch(actions.increament(index)),
    onDecreament: (index)=> dispatch(actions.decreament(index)),
    onSetColor: (index) => {
        const color = getRandomColor();
        dispatch(actions.setColor(color, index));
    }
});

// 데이터와 함수들을 props로 받는 컴포넌트 생성후
// 표시해 줄 컴포넌트를 넣어준다.

const CounterListContainer = connect(mapStateToProps, mapDispatchToProps)(CounterList);

export default CounterListContainer;