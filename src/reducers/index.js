import * as types from "../actions/ActionTypes";

// 초기상태 정의
const initState={
    number: 0,
    color: "black"
}

// 카운터의 리듀서 함수 정의
// state 와 action 을 파라미터로 받는다.
// state가 undefined일 때는 위에서 설정한 initState 를 기본값으로 받음

function counter(state = initState, action){
    switch(action.type){
        case types.INCREAMENT: 
            return {...state, number: state.number + 1};
        case types.DECREAMENT: 
            return {...state, number: state.number - 1};
        case types.SET_COLOR: 
            return {...state, color: action.color};
        default:
            return state;
    }
}
export default counter;