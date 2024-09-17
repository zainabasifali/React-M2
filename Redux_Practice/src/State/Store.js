import {applyMiddleware,legacy_createStore} from "redux"
import {thunk} from "redux-thunk"
import reducers from './Reducers/index'

export  const store = legacy_createStore(reducers,{},applyMiddleware(thunk))

