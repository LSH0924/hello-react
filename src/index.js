import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

// 리덕스 관련 불러오기
import store from "./store";
import { Provider } from "react-redux";

const provider = 
            <Provider store={store}>
                <App/>
            </Provider>;

ReactDOM.render(provider, document.getElementById('root'));

serviceWorker.unregister();