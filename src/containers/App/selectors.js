/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error
  );

const makeSelectTickersData = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.tickersData
  );

const makeSelectLayout = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.layout
  );

const makeSelectGraphDivs = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.graphDivs
  );

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectTickersData,
  makeSelectLayout,
  makeSelectGraphDivs
};
