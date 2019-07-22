import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

// 리덕스 관련 불러오기
import { createStore } from "redux";
import module from "./modules/counter";
import {Provider} from "react-redux";

const store = createStore(module, window.devToolsExtension && window.devToolsExtension());

const provider = 
            <Provider store={store}>
                <App/>
            </Provider>;

ReactDOM.render(provider, document.getElementById('root'));

serviceWorker.unregister();