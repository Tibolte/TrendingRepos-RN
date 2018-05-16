'use strict';

import * as types from '../constants/ActionTypes';
import {request} from '../utils/HttpServices';
import * as host from '../constants/Urls';

export function fetchRepos(currentPage, isLoadMore) {
  return dispatch => {
    dispatch(fetchReposList(isLoadMore))
      return request(host.buildUrl(currentPage))
        .then((repoList) => {
          console.log(repoList);
          dispatch(receiveRepoList(repoList, currentPage + 1));
        })
        .catch((error) => {
          dispatch(receiveRepoList([], currentPage));
          console.error(error);
        })
  }
}

function fetchReposList(isLoadMore) {
  return {
    type: types.FETCH_REPO_LIST,
    isLoadMore: isLoadMore
  }
}

function receiveRepoList(repoList, newPage) {
  return {
    type: types.RECEIVE_REPO_LIST,
    reposList: repoList.items,
    newPage: newPage
  }
}