export const CREATE_POST = "CREATE_POST"
export const ADD_COMMENT = "ADD_COMMENT"
export const DELETE_POST = "DELETE_POST"
export const DELETE_COMMENT = "DELETE_COMMENT"
export const UPVOTE = "UPVOTE"
export const DOWNVOTE = "DOWNVOTE"
export const SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER"
export const CategoryFilters = {
  ALL: "ALL"
  REACT: "REACT",
  REDUX: "REDUX",
  UDACITY: "UDACITY",
}

export function createPost ({ post, category }) {
  return {
    type: CREATE_POST,
    post,
    category,
  }
}

export function deletePost ({ post, category }) {
  return {
    type: DELETE_POST,
    post,
    category,
  }
}

export function addComment ({ post, comment }) {
  return {
    type: ADD_COMMENT,
    post,
    comment,
  }
}

export function deleteComment ({ post, comment }) {
  return {
    type: DELETE_COMMENT,
    post,
    comment,
  }
}

export function upVote ({ article }) {
  return {
    type: UPVOTE,
    article,
  }
}

export function downVote ({ articule }) {
  return {
    type: DOWNVOTE,
    article,
  }
}

export function setCategoryFilter (filter) {
  return {
    type: SET_CATEGORY_FILTER,
    filter,
  }
}
