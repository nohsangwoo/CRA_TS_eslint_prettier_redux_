import { combineReducers } from 'redux'
import toggleSlice from './toggleSlice'
import counterSlice from './counterSlice'
import someOtherSlice from './someOtherSlice'
import userSlice from './userSlice'
// import postSlice from "./postSlice";
// import { all } from "redux-saga/effects";
// import sagaCounter, { counterSaga } from "./sagacounter";

const rootReducer = combineReducers({
  toggles: toggleSlice.reducer,
  counter: counterSlice.reducer,
  somesome: someOtherSlice.reducer,
  users: userSlice.reducer,
})

export default rootReducer
