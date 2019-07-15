// 기존 리듀서를 서브 리듀서로 분리하기 : number
import * as types from "../actions/ActionTypes";

const initialState = {
    number: 0
};

const number = (state = initialState, action) => {
    switch(action.type){
        case types.INCREAMENT:
            return {
                number: state.number + 1
            };
        case types.DECREAMENT:
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}
export default number;