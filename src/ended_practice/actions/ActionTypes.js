// Action 의 종류 선언하기.
// Action 의 이름은 대문자로 선언한다.
// export 를 붙여두면 import * from "./ActionTypes" 를 통해 사용할 수 있다.

export const INCREAMENT = "INCREAMENT";
export const DECREAMENT = "DECREAMENT";
export const SET_COLOR = "SET_COLOR";

// 멀티카운터용
export const CREATE = "CREATE";
export const REMOVE = "REMOVE";