import {
  CREATE_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPVOTE,
  DOWNVOTE,
  SET_CATEGORY_FILTER,
  CategoryFilters,
} from "../actions"

import { combineReducers } from 'redux'

const initialState = {
  view: CategoryFilters.ALL,
  react: [],
  redux: [],
  udacity: [],
  all: [],
}

function contentPage (state = initialState, action) {
  const { post. comment, filter, article } = action

  switch (action.type) {
    case SET_CATEGORY_FILTER:
    return {
      view: filter
    }
  }
}
