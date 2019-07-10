/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import Graph from 'components/Graph';
import Grid from 'components/Grid';
import getRandomInt from 'utils/getRandomInt';
import * as appSelectors from '../App/selectors';
import * as selectors from './selectors';
import Form from './Form';
import Input from './Input';
import messages from './messages';
import * as appActions from '../App/actions';
import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({
  ticker,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeTickerSymbol,
  triggerTicker,
  tickerSymbol,
  tickersData,
  layout
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state ticker is not null, submit the form to load repos
  }, []);

  const randomColors = [
    '#d3000c',
    '#4eb286',
    '#d5c28d',
    '#3d5070',
    '#81d241',
    '#bf4777',
    '#a71dc0'
  ];

  const graphDivs = Object.keys(tickersData).map((tickerName, index) => {
    return (
      <div key={`${index}_graph`}>
        <div
          style={{
            width: '100%',
            textAlign: 'left',
            fontSize: '7px'
          }}
        >
          {tickerName}
        </div>
        <Graph
          data={tickersData[tickerName]}
          height={150}
          width={300}
          style={{
            stroke: randomColors[index % randomColors.length],
            strokeLinejoin: 'round',
            strokeWidth: '1px'
          }}
          opacity={1}
          stroke="#12939a"
          strokeDasharray=""
          strokeStyle="solid"
          strokeWidth=""
        />
      </div>
    );
  });

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Stock price time series benchmarking tool"
        />
      </Helmet>
      <Form
        onSubmit={e => {
          e.preventDefault();
          onSubmitForm();
        }}
      >
        <label htmlFor="ticker_symbol">
          <Input
            id="ticker_symbol"
            type="text"
            placeholder="MSFT"
            value={tickerSymbol}
            onChange={onChangeTickerSymbol}
          />
        </label>
      </Form>
      <Grid layout={layout}>{graphDivs}</Grid>
    </article>
  );
}

const mapStateToProps = createStructuredSelector({
  tickerSymbol: selectors.makeSelectTickerSymbol(),
  tickersData: appSelectors.makeSelectTickersData(),
  layout: appSelectors.makeSelectLayout()
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeTickerSymbol: evt =>
      dispatch(actions.setTickerSymbol(evt.target.value.toUpperCase())),
    onSubmitForm: () => {
      dispatch(appActions.triggerTicker());
    }
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(HomePage);
