import { call, put, select, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import * as homePageSelectors from 'containers/HomePage/selectors';
import * as selectors from './selectors';
import * as constants from './constants';
import * as actions from './actions';

// /**
//  * Get ticker data
//  */
export function* getTickerData() {
  // Select ticker
  const ticker = yield select(homePageSelectors.makeSelectTickerSymbol());
  let tickersData = yield select(selectors.makeSelectTickersData());

  try {
    // Request ticker data from express endpoint
    const requestURL = `/api/getTicker?ticker=${ticker}`;
    const response = yield call(request, requestURL);

    // If ticker data is already there, update it
    if (!Reflect.has(tickersData, ticker)) {
      tickersData = { ...tickersData, [ticker]: response.graphData };
    } else {
      // Otherwise add it
      tickersData[ticker] = response.graphData;
    }
  } catch (err) {
    // Prelim error handling
    console.log(err);
  }

  // Set ticker data to global redux state
  yield put(actions.setTickersData(tickersData));
  // Set new layout
  const layout = Object.keys(tickersData).map((tickerData, index) => {
    return {
      i: `${index}_graph`,
      x: 0,
      y: index * 2.5,
      w: 10,
      h: 3,
      isResizable: false
    };
  });

  yield put(actions.setLayout(layout));
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* appRootSaga() {
  // listen for trigger ticker action
  yield takeLatest(constants.TRIGGER_TICKER, getTickerData);
}
