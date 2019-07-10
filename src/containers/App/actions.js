import * as constants from './constants';

/**
 * Start the ticker analysis process
 *
 * @return {object} An action object with a type of TRIGGER_TICKER
 */
export function triggerTicker() {
  return {
    type: constants.TRIGGER_TICKER
  };
}

/**
 * Set values for tickers data
 *
 * @param  {array} tickerData an array of tickers data
 *
 * @return {object}      An action object with a type of SET_TICKERS_DATA
 */
export function setTickersData(tickersData) {
  return {
    type: constants.SET_TICKERS_DATA,
    tickersData
  };
}

/**
 * Set layout values for the grid
 *
 * @param  {array} layout layout for the grid
 *
 * @return {object}      An action object with a type of SET_LAYOUT
 */
export function setLayout(layout) {
  return {
    type: constants.SET_LAYOUT,
    layout
  };
}
