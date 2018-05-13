'use strict';

import * as types from '../constants/ActionTypes';
import {request} from '../utils/HttpServices';
import * as host from '../constants/Urls';

export function fetchRepos() {
  return dispatch => {
    request(host.REPOS_URL)
    .then((repoList) => {
      console.log(repoList);
      console.warn("dispatch receive action here");
    })
    .catch((error) => {
      console.error(error);
    })
  }
}