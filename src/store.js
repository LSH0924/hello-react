// 리덕스 관련 불러오기
import { createStore, applyMiddleware } from "redux";
import modules from "./modules";
// import ReduxThunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";

import logger from "redux-logger";

export default createStore(modules, applyMiddleware(logger, promiseMiddleware()));
