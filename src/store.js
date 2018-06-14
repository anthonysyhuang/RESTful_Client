import reducers from './reducers'
import { applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'

const middleware = applyMiddleware(thunk);
export default createStore(reducers, middleware);