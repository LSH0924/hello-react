import React, {Component} from "react";
import CounterList from "../components/CounterList";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import * as counterActions from "../modules/counter";
import * as postActions from "../modules/post";

// 데이터와 함수들을 props로 받는 컴포넌트 생성후
// 표시해 줄 컴포넌트를 넣어준다.

class CounterListContainer extends Component{

  state = {
    clickedCounterIndex: 0
  }

  // async/await 키워드 사용하기
  // async : await를 사용할 함수의 앞부분에 키워드를 적용한다.
  loadData = async () => {
    const {PostAction, state} = this.props;
    const {clickedCounterIndex} = this.state;
    const number = state.counter.getIn([clickedCounterIndex,"number"]);
    try{
      // await : 기다려야 할 Promise앞에 키워드를 붙여주고,
      // 반드시 try-catch문으로 감싸 오류를 처리해주어야 한다.
      
      // Promise 기반 액션을 디스패치 하고 나면 cancle 함수가 포함된 Promise를 반환
      // 따로 저장해서 사용한다.
      const promise = PostAction.getPost(number);
      this.cancelReq = promise.cancel;
      const response = await promise;
      console.log(response);
    }catch(e){
      console.log(e);
    }
  };

  componentDidMount(){
    // 컴포넌트가 마운트 되면 실행
    this.loadData();
    window.addEventListener("keyup", e => {
      if(e.key === "Escape"){
        this.handleCancel();
      }
    });
  }

  componentDidUpdate(prevProps, prevState){
    // 다른 카운터를 업데이트 하면 웹요청
    // 0아래로 내려가면 유감스럽게도 업데이트가 되지 않기 때문에 이 메소드 자체에 들어오지를 않는다.
    console.log("다른 카운터!");
    if(this.state.clickedCounterIndex !== prevState.clickedCounterIndex){
      this.loadData();
    }
  
  }

  handleSetClickedCounterIndex = index => {
    this.setState({
      clickedCounterIndex: index
    });
  }

  cancelReq = null;

  // 취소 요청이 오면 웹요청을 취소
  handleCancel = () => {
    if(this.cancelReq){
      this.cancelReq();
      this.cancelReq = null;
    }
  };

  render(){
    const {state, CounterAction} = this.props;
    const {data, error, pending} = state.post;
    return (
      <React.Fragment>
        <CounterList
          state={state}
          onIncreament={CounterAction.increament}
          onDecreament={CounterAction.decreament}
          onSetColor={CounterAction.setColor}
          onSetIndex = {this.handleSetClickedCounterIndex}
        />
        {
          pending ? <h3>로딩중!</h3> : 
          (error ? <h3>오류 발생</h3> : 
            (<div>
              <h3>Title: {data.title}</h3>
              <h3>body: {data.body}</h3>
            </div>)
          )
        }
      </React.Fragment>
    );
  }
};

export default connect(
  state => ({ 
    state: state,
    post: state.post.data,
    loading: state.pender.pending["GET_POST"],
    error: state.pender.failure["GET_POST"]
  }),
  dispatch => ({ 
    CounterAction: bindActionCreators(counterActions, dispatch),
    PostAction: bindActionCreators(postActions, dispatch) 
  })
    )(CounterListContainer);
