import { combineReducers } from 'redux';
import collectionData from './slice/collectionSlice';

//to combine all reducer here
const rootReducer = combineReducers({
  collectionData: collectionData,
});

export default rootReducer;
