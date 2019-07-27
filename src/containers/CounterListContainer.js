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
      const response = await PostAction.getPost(number);
      console.log(response);
    }catch(e){
      console.log(e);
    }
  };

  componentDidMount(){
    // 컴포넌트가 마운트 되면 실행
    this.loadData();
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
