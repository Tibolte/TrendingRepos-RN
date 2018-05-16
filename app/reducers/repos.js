'use strict';

import * as types from '../constants/ActionTypes'

const initialState = {
  loading: false,
  isLoadMore: false,
  currentPage: 1,
  reposList: []
}

export default function repos (state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case types.FETCH_REPO_LIST:
      return {
        ... state,
        isLoadMore: action.isLoadMore,
        loading: true
      }
    case types.RECEIVE_REPO_LIST:
      return {
        ... state,
        reposList: [
          ...state.reposList,
          ...action.reposList
        ],
        currentPage: action.newPage,
        isLoadMore: false,
        loading: false
      }
    default:
      return state
  }
}