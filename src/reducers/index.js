import number from "./number";
import color from "./color";
// 각 리듀서들을 합치기 위해 사용
import {combineReducers} from "redux";

const reducers = combineReducers({
    numberData: number, 
    colorData: color
});
// combineReducers에 전달한 객체 모양대로 store의 형태를 만든다.
// 지금 전달한 객체 모양대로라면
// {
//     numberData: {
//         number:0
//     },
//     colorData: {
//         color: "black"
//     }
// }
// 이렇게 만듦

export default reducers;