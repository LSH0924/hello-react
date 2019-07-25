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

export const increamentAcync = index => dispatch => {
  setTimeout(() => {
    dispatch(increament(index));
  }, 1000);
};

export const decreamentAcync = index => dispatch => {
  setTimeout(() => {
    dispatch(decreament(index));
  }, 1000);
};

const initialState = List([
  Map({
    number: 1,
    color: "black"
  })
]);

export default handleActions(
  {
    [INCREAMENT]: (state, action) => {
      const { payload: id } = action;
      return state.updateIn([id, "number"], num => num + 1);
    },
    [DECREAMENT]: (state, action) => {
      const { payload: id } = action;
      return state.updateIn([id, "number"], num => num > 0 ? num - 1 : num);
    },
    [SET_COLOR]: (state, action) => {
      const { payload: id } = action;
      return state.setIn([id, "color"], getRandomColor());
    },
    [CREATE]: (state, action) => {
      const { payload: color } = action;
      return state.push(
        Map({
          number: 0,
          color: color
        })
      );
    },
    [REMOVE]: (state, action) => {
      if (state.size === 1) return state;
      return state.pop();
    }
  },
  initialState
);
