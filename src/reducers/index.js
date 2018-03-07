import { combineReducers } from 'redux';

import shots from './shots';
import dialog from './dialog';

const rootReducer = combineReducers({
  shots,
  dialog
});

export const getInitState = () => ({});
export default rootReducer;
