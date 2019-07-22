import React, { Component } from 'react';
import {connect} from "react-redux";
import getRandomColor from "../lib/getRandomColor";

// 컴포넌트
import CounterListContaner from "../containers/CounterListContainer";
import Buttons from "../components/Buttons";

import * as counterActions from "../modules/counter";
import { bindActionCreators } from "redux";

class App extends Component {
    onCreate = () => {
        const { create } = this.props;
        create(getRandomColor());
    };
    
    render() {
        const {onCreate} = this;
        const {remove} = this.props;
        return (
            <div className="App">
                <Buttons
                onCreate={onCreate}
                onRemove={remove}/>
                <CounterListContaner/>
            </div>
        );
    }
}

export default connect(null, dispatch => bindActionCreators(counterActions, dispatch))(App);