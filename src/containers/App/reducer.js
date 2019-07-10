/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import * as constants from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  tickersData: {},
  layout: []
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.TRIGGER_TICKER:
        draft.loading = true;
        draft.error = false;
        break;
      case constants.SET_TICKERS_DATA:
        draft.tickersData = action.tickersData;
        break;
      case constants.SET_LAYOUT:
        draft.layout = action.layout;
        break;
    }
  });

export default appReducer;
