import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import signIn from 'features/SignIn/reducers';
import cabinet from 'features/Cabinet/reducers';

const rootReducer = combineReducers({
  signIn,
  cabinet,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
