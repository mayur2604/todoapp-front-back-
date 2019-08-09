import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { modifyItem } from "./reducers/modifyItem";
export const store = createStore(modifyItem, applyMiddleware(logger));

