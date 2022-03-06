import { applyMiddleware, createStore } from "redux"
import reducer from "./reducer";
import { createLogger } from "redux-logger";
import {composeWithDevTools} from 'redux-devtools-extension'

const composedEnhancers = composeWithDevTools();

const logger = createLogger({
    collapsed: (state, action) => action.type === 'todolist/addTodos'
  });
const store = createStore(reducer, composedEnhancers);

export default store;