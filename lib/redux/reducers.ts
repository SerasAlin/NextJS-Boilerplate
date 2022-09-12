import { combineReducers } from 'redux';

import task from './slices/ui';

const reducers = {
  task,
};

const rootReducer = combineReducers({
  ...reducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
