'use strict';

import * as types from '../constants/ActionTypes';

const initialState = {
  isRefreshing: false,
  loading: false,
  isLoadMore: false,
  noMore: false,
  repoList: {}
};

export default function repos (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_REPO_LIST:
      return state;
    default:
      return state;
  }
}