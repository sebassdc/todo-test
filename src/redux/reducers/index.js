import createReducer from '../createReducer'

import {
  USER_REGISTER_STARTED,
  USER_REGISTER_DONE,
  USER_LOGIN_STARTED,
  USER_LOGIN_DONE,
  CLEAR_STATE,
  TODO_ADD,
  LOAD_LIST,
} from '../actions/user'

export default createReducer({
  uid: null,
  registering: false,
  logining: false,
  list: [],
}, {
  [USER_REGISTER_STARTED]: (state, action) => ({
    ...state,
    registering: true,
  }),
  [USER_REGISTER_DONE]: (state, action) => ({
    ...state,
    registering: false,
    uid: action.payload.uid
  }),
  [USER_LOGIN_STARTED]: (state, action) => ({
    ...state,
    logining: true,
  }),
  [USER_LOGIN_DONE]: (state, action) => ({
    ...state,
    logining: false,
    uid: action.payload.uid
  }),
  [CLEAR_STATE]: (state, action) => ({
    uid: null,
    list: []
  }),
  [LOAD_LIST]: (state, action) => ({
    ...state,
    list: action.payload.list
  })
})