import React, {Component} from "react";
import CounterList from "../components/CounterList";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import * as counterActions from "../modules/counter";
import * as postActions from "../modules/post";

// 데이터와 함수들을 props로 받는 컴포넌트 생성후
// 표시해 줄 컴포넌트를 넣어준다.

class CounterListContainer extends Component{

render(){
  const {counters, CounterAction} = this.props;
  return (
    <CounterList
      state={counters}
      onIncreament={CounterAction.increament}
      onDecreament={CounterAction.decreament}
      onSetColor={CounterAction.setColor}
    />
  );
}

};

export default connect(
  state => ({ 
    counters: state,
    post: state.post.data,
    loading: state.post.pending,
    error: state.post.error
  }),
  dispatch => ({ 
    CounterAction: bindActionCreators(counterActions, dispatch),
    PostAction: bindActionCreators(postActions, dispatch) 
  })
    )(CounterListContainer);
