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
  tickerData: false,
  currentUser: false,
  userData: {
    repositories: false
  }
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.TRIGGER_TICKER:
        draft.loading = true;
        draft.error = false;
        draft.tickerData = false;
        break;

      // case LOAD_REPOS_SUCCESS:
      //   draft.userData.repositories = action.repos;
      //   draft.loading = false;
      //   draft.currentUser = action.username;
      //   break;

      // case LOAD_REPOS_ERROR:
      //   draft.error = action.error;
      //   draft.loading = false;
      //   break;
    }
  });

export default appReducer;
