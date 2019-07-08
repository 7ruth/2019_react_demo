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

// /**
//  * Dispatched when the repositories are loaded by the request saga
//  *
//  * @param  {array} repos The repository data
//  * @param  {string} username The current username
//  *
//  * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
//  */
// export function reposLoaded(repos, username) {
//   return {
//     type: LOAD_REPOS_SUCCESS,
//     repos,
//     username
//   };
// }

// /**
//  * Dispatched when loading the repositories fails
//  *
//  * @param  {object} error The error
//  *
//  * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
//  */
// export function repoLoadingError(error) {
//   return {
//     type: LOAD_REPOS_ERROR,
//     error
//   };
// }
