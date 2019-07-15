// 기존 리듀서를 서브 리듀서로 분리하기 : color
import * as types from "../actions/ActionTypes";

const initialState = {
    color: "black"
};

const color = (state = initialState, action) => {
    switch(action.type){
        case types.SET_COLOR: 
            return {
                color: action.color
            };
        default:
            return state;
    }
}
export default color;