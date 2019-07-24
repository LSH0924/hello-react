import React from "react";
import CounterList from "../components/CounterList";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import * as counterActions from "../modules/counter";

// 데이터와 함수들을 props로 받는 컴포넌트 생성후
// 표시해 줄 컴포넌트를 넣어준다.

const CounterListContainer = ({ counters, counterAction }) => {
  return (
    <CounterList
      counters={counters}
      onIncreament={counterAction.increamentAcync}
      onDecreament={counterAction.decreamentAcync}
      onSetColor={counterAction.setColor}
    />
  );
};

export default connect(
  state => ({ counters: state }),
  dispatch => ({ counterAction: bindActionCreators(counterActions, dispatch) })
    )(CounterListContainer);
