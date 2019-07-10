/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import * as constants from './constants';

// The initial state of the Home Page
export const initialState = {
  tickerSymbol: ''
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.SET_TICKER_SYMBOL:
        draft.tickerSymbol = action.tickerSymbol;
        break;
    }
  });

export default homeReducer;
