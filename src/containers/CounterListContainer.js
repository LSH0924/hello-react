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

  loadData = () => {
    const {PostAction, state} = this.props;
    const {clickedCounterIndex} = this.state;
    const number = state.counter.getIn([clickedCounterIndex,"number"]);
    PostAction.getPost(number);
  }

  componentDidMount(){
    // 컴포넌트가 업데이트 되면 실행
    this.loadData();
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState){
    // 이전 카운터의 숫자와 현재 카운터의 숫자가 다르면 요청을 시작한다.
    // 근데 지금은 둘다같음.. 내일 수정하자.
    const {clickedCounterIndex} = this.state; 
    if(this.props.state.counter.getIn([clickedCounterIndex, "number"]) !== prevProps.state.counter.getIn([clickedCounterIndex, "number"])) {
      this.loadData();
    }
  }

  handleSetClickedCounterIndex = index => {
    this.setState({
      clickedCounterIndex: index
    });
  }

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
              <h3>{data.title}</h3>
              <h3>{data.body}</h3>
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
    post: state.post
  }),
  dispatch => ({ 
    CounterAction: bindActionCreators(counterActions, dispatch),
    PostAction: bindActionCreators(postActions, dispatch) 
  })
    )(CounterListContainer);
