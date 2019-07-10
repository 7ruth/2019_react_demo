/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';

import { request } from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';

export default function* homePageRootSaga() {}
