import { createAction, handleActions } from "redux-actions";

import axios from "axios";

// postId를 파라미터로 받아 axios로 API요청을 한다.
function getPostAPI(postId){
    // promise 객체 반환
    // postId가 0이면 오류가 발생한다.
    return axios.get('https://jsonplaceholder.typicode.com/posts/'+ postId);
}

// 액션 타입 정의
const GET_POST = "GET_POST";
const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

// 액션 생성 함수
const getPostPending = createAction(GET_POST_PENDING);
const getPostSuccess = createAction(GET_POST_SUCCESS);
const getPostFailure = createAction(GET_POST_FAILURE);

// thunk 만들기
// export const getPost = postId => dispatch => {
//     // 요청 시작을 알린 뒤, 서버에서 응답이 올 때까지 기다린다.
//     dispatch(getPostPending());

//     return getPostAPI(postId)
//     .then(response => {
//         // axios로 보낸 요청이 성공일 경우 서버 응답 내용을 payload로 설정한다.
//         dispatch(getPostSuccess(response));
//         // 나중에 getPostApi.then(이 안에 들어가는 화살표 함수) 에서 response를 쓸 수 있게 return 해준다.
//         return response;
//     })
//     .catch(error => {
//         // error 내용을 payload로 설정 후 디스패치한다.
//         dispatch(getPostFailure(error));
//         // error를 throw 하면 위와같이 getPostApi.catch(이 안에 들어가는 화살표 함수)에서 다시 한번 사용할 수 있다.
//         throw(error);
//     });
// };

export const getPost = postId => ({
    type: GET_POST,
    patyload: getPostAPI(postId)
});

const initialState = {
    pending: false,
    error: false,
    data:{
        title: "",
        body: ""
    }
}

// 리듀서 구현
export default handleActions({
    [GET_POST_PENDING]: (state, action)=>{
        return {
            ...state,
            pending: true
        };
    },
    [GET_POST_SUCCESS]: (state, action) => {
        const {title, body} = action.payload.data;
        return {
            ...state,
            pending: false,
            data:{
                title: title,
                body: body
            }
        };
    },
    [GET_POST_FAILURE]: (state, action) => {
        return {
            ...state,
            pending: false,
            error: true
        };
    }
}, initialState);
