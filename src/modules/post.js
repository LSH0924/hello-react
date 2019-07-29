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

export const getPost = createAction(GET_POST, getPostAPI());

const initialState = {
    data:{
        title: "",
        body: ""
    }
}

// 리듀서 구현
export default handleActions({
    // 리듀서에서 비동기작업을 redux-pender으로 관리할 때.
    
    ...pender({
        type: GET_POST,
        onSuccess: (state, action) => {
            const {title, body} = action.payload.data;
            return {
                data: {
                    title, body
                }
            };
        }
    })
}, initialState);
