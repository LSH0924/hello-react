import React, { Component } from 'react';
import {connect} from "react-redux";
import * as actions from "../actions";
import getRandomColor from "../lib/getRandomColor";

// 컴포넌트
import CounterListContaner from "../containers/CounterListContainer";
import Buttons from "../components/Buttons";

class App extends Component {
    render() {
        const {onCreate, onRemove} = this.props;
        return (
            <div className="App">
                <Buttons
                onCreate={onCreate}
                onRemove={onRemove}/>
                <CounterListContaner/>
            </div>
        );
    }
}

const mapToDispatch = (dispatch) => ({
    onCreate: () => dispatch(actions.create(getRandomColor())),
    onRemove: (index) => dispatch(actions.remove())
});

export default connect(null, mapToDispatch)(App);