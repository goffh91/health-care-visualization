import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import appReducer from './app/reducers';

const createRootReducer = history =>
    combineReducers({
        app: appReducer,
        router: connectRouter(history)
    });

export default createRootReducer;
