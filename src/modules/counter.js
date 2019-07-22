import { List, Map } from "immutable";
import { createAction, handleActions } from "redux-actions";
import getRandomColor from "../lib/getRandomColor";

// 액션 타입 선언
const INCREAMENT = "INCREAMENT";
const DECREAMENT = "DECREAMENT";
const SET_COLOR = "SET_COLOR";
const CREATE = "CREATE";
const REMOVE = "REMOVE";

// 액션 생성함수 설정
export const increament = createAction(INCREAMENT);
export const decreament = createAction(DECREAMENT);
export const setColor = createAction(SET_COLOR);
export const create = createAction(CREATE);
export const remove = createAction(REMOVE);

const initialState = List([
    Map({
        number : 0,
        color: "black"
    })
]);


export default handleActions({
    [INCREAMENT]: (state, action)=>{
        const {payload : id} = action;
        return state.updateIn([id, "number"], num=> num + 1);
    },
    [DECREAMENT]: (state, action) => {
        const { payload : id } = action;
        return state.updateIn([id, "number"], num => num-1);
    },
    [SET_COLOR]: (state, action)=> {
        const { payload : id } = action;
        return state.setIn([id, "color"], getRandomColor());
    },
    [CREATE]: (state, action) => {
        const {payload: color} = action;
        return state.push(Map({
            number:0,
            color: color
        }));
    },
    [REMOVE]: (state, action)=>{
        if(state.size !== 1) return state.pop();
    }
}, initialState);
