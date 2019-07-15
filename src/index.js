import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

// 리덕스 관련 불러오기
import {createStore} from "redux";
import reducers from "./reducers"

// 스토어 생성
const store = createStore(reducers);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();