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
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError
} from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import Graph from 'components/Graph';
import Grid from 'components/Grid';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import * as appActions from '../App/actions';
import * as actions from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeTickerSymbol
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  const reposListProps = {
    loading,
    error,
    repos
  };

  const layout = [
    { i: 'a', x: 0, y: 0, w: 4, h: 4, isResizable: false },
    { i: 'b', x: 0, y: 4, w: 4, h: 4, isResizable: false },
    { i: 'c', x: 0, y: 8, w: 4, h: 4, isResizable: false },
    { i: 'j', x: 0, y: 12, w: 4, h: 4, isResizable: false }
  ];

  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 }
  ];

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
        onSubmit={() => {
          console.log('submit form');
        }}
      >
        <label htmlFor="ticker_symbol">
          <FormattedMessage {...messages.inputTicker} />
          <AtPrefix />
          <Input
            id="ticker_symbol"
            type="text"
            placeholder="MSFT"
            // value={username}
            onChange={onChangeTickerSymbol}
          />
        </label>
      </Form>
      <Grid layout={layout}>
        <div key="a">
          <Graph data={data} height={200} width={300} />
        </div>
        <div key="b">
          <Graph data={data} height={200} width={300} />
        </div>
        <div key="c">
          <Graph data={data} height={200} width={300} />
        </div>
        <div key="j">
          <Graph data={data} height={200} width={300} />
        </div>
      </Grid>

      {/* <div>
        <CenteredSection>
          <H2>
            <FormattedMessage {...messages.startProjectHeader} />
          </H2>
          <p>
            <FormattedMessage {...messages.startProjectMessage} />
          </p>
        </CenteredSection>
        <Section>
          <H2>
            <FormattedMessage {...messages.trymeHeader} />
          </H2>
          <Form onSubmit={onSubmitForm}>
            <label htmlFor="username">
              <FormattedMessage {...messages.trymeMessage} />
              <AtPrefix>
                <FormattedMessage {...messages.trymeAtPrefix} />
              </AtPrefix>
              <Input
                id="username"
                type="text"
                placeholder="mxstbr"
                value={username}
                onChange={onChangeUsername}
              />
            </label>
          </Form>
          <ReposList {...reposListProps} />
        </Section>
      </div> */}
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeTickerSymbol: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeTickerSymbol: evt =>
      dispatch(actions.setTickerSymbol(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
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
