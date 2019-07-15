// 액션생성함수 만들기

// 모든 액션을 types 라는 이름으로 묶어서 불러온다
import * as types from "./ActionTypes";

export const increament = () => ({type: types.INCREAMENT});
export const decreament = () => ({type: types.DECREAMENT});
// 파라미터로 받은 color 을 액션 객체 안에 넣는다.
export const setColor = (color) =>({
    type: types.SET_COLOR,
    color
});