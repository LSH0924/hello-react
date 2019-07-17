// 액션생성함수 만들기

// 모든 액션을 types 라는 이름으로 묶어서 불러온다
import * as types from "./ActionTypes";

// 여러 개의 카운터를 구분하기 위해 index 추가
export const increament = (index) => ({
    type: types.INCREAMENT,
    index
});
export const decreament = (index) => ({
    type: types.DECREAMENT,
    index
});
// 파라미터로 받은 color 을 액션 객체 안에 넣는다.
export const setColor = (color, index) =>({
    type: types.SET_COLOR,
    color,
    index
});

// 멀티카운터 : 카운터 생성
export const create = (color) => ({
    type: types.CREATE,
    color
});
// 멀티카운터 : 카운터 삭제
export const remove = () => ({
    type: types.REMOVE
});