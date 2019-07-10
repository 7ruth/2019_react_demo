/**
 *
 * App
 *
 */

// Utils
import React, { useEffect, memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from 'global-styles';

// Redux
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
// Components
import { Helmet } from 'react-helmet';
import Wrap from 'containers/App/components/Wrap';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
// import Header from 'components/Header';
// import Footer from 'components/Footer';
// Local Redux
import * as actions from './actions';
import reducer from './reducer';
// Local Saga
import saga from './saga';

const key = 'app';

export function App() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    console.log('app use effect');
  }, []);

  return (
    <Wrap>
      <Helmet
        titleTemplate="%s - 2019 React Demo"
        defaultTitle="2019 React Demo"
      >
        <meta name="description" content="A 2019 React Demo" />
      </Helmet>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
      <GlobalStyle />
    </Wrap>
  );
}

const mapStateToProps = createStructuredSelector({
  // username: makeSelectUsername(),
});

export function mapDispatchToProps(dispatch) {
  return {
    // triggerTicker: () => dispatch(actions.triggerTicker())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(App);
