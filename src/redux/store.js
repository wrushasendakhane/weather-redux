import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import weatherReducer from "./reducers/weatherReducer"
import promiseMiddleware from "redux-promise"

const rootReducer = combineReducers({
  weather: weatherReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [promiseMiddleware]

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))

export default store;