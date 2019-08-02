import { createAction, handleActions } from "redux-actions";

import { pender } from "redux-pender";
import axios from "axios";

// postId를 파라미터로 받아 axios로 API요청을 한다.
function getPostAPI(postId){
    // promise 객체 반환
    // postId가 0이면 오류가 발생한다.
    return axios.get('https://jsonplaceholder.typicode.com/posts/'+ postId);
}

// 액션 타입 정의
const GET_POST = "GET_POST";
// redux-pender의 액션 구조는 Flux standard action 을 따르기 때문에 createAction으로 액션을 만들 수 있다.
// Flux standard action : https://github.com/redux-utilities/flux-standard-action
// 두 번째 파라미터는 Promise를 반환하는 함수여야한다.
export const getPost = createAction(GET_POST, getPostAPI);

const initialState = {
    data:{
        title: "",
        body: ""
    }
}

// 리듀서 구현
export default handleActions({
    // 리듀서에서 비동기작업을 redux-pender으로 관리할 때.
    // 요청중일 때와 실패했을 때 추가로 해야 할 작업이 있다면 onPending, onFailure를 추가한다.
    // applyPenders(일반 리듀서, pender 관련 객체들의 배열)로 여러 개의 비동기 작업을 관리할 수 있다.
    ...pender({
        type: GET_POST,
        onSuccess: (state, action) => {
            const {title, body} = action.payload.data;
            return {
                data: {
                    title, body
                }
            };
        },
        onCancel: (state, action) => {
            return {
                data: {
                    title: "요청이 취소되었습니다.",
                    body: "사실 서버는 요청에 응답했지만 미들웨어가 무시하고 있는 중입니다.",
                }
            };
        }
    })
}, initialState);
