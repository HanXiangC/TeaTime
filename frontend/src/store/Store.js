// Import Redux dependencies
import { createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Import reducers
import preferenceReducer from '../reducers/preferenceReducer';
import userReducer from '../reducers/userReducer';
import roomReducer from '../reducers/roomReducer';

export let initStore = () => {

  // Combine reducers
  const reducer = combineReducers({
    preferences: preferenceReducer,
    users: userReducer,
    rooms: roomReducer
  });

  // Create the store with all the reducers and allow for chrome redux dev tools to run and read reducers
  const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;

}
