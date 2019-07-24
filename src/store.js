// 리덕스 관련 불러오기
import { createStore, applyMiddleware } from "redux";
import module from "./modules/counter";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";

export default createStore(module, applyMiddleware(logger, ReduxThunk));
