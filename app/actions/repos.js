'use strict';

import * as types from '../constants/ActionTypes';
import {request} from '../utils/HttpServices';
import * as host from '../constants/Urls';

export function fetchRepos(isRefreshing, loading, isLoadMore, page) {
  return dispatch => {
    request(host.REPOS_URL)
    .then((repoList) => {
      console.log(repoList);
      dispatch(receiveRepoList(repoList));
    })
    .catch((error) => {
      dispatch(receiveRepoList([]));
      console.error(error);
    })
  }
}

function receiveRepoList(repoList) {
  return {
    type: types.RECEIVE_REPO_LIST,
    reposList: repoList.items
  }
}