import {createStore, applyMiddleware} from 'redux'
import reducers from '../reducers/ToDo'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const middleware = [thunkMiddleware]

if (process.env.NODE_ENV === 'development')
  middleware.push(logger)

export default createStore(reducers, applyMiddleware(...middleware))
