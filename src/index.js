import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

// 리덕스 관련 불러오기
import { createStore } from "redux";
import reducers from "./reducers";
import {Provider} from "react-redux";

// 스토어 생성
const store = createStore(reducers);

const provider = 
            <Provider store={store}>
                <App/>
            </Provider>;

ReactDOM.render(provider, document.getElementById('root'));

serviceWorker.unregister();