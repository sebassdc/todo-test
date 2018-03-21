import { auth, db } from '../../firebase'

export const USER_REGISTER_STARTED = 'USER_REGISTER_STARTED'
export const USER_REGISTER_DONE = 'USER_REGISTER_DONE'
export const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR'

export const USER_LOGIN_STARTED = 'USER_LOGIN_STARTED'
export const USER_LOGIN_DONE = 'USER_LOGIN_DONE'
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR'

export const CLEAR_STATE = 'CLEAR_STATE'
export const USER_LOGOUT_ERROR = 'USER_LOGOUT_ERROR'

export const TODO_ADD_DONE = 'TODO_ADD_DONE'
export const TODO_EDIT_DONE = 'TODO_EDIT_DONE'

export const LOAD_LIST = 'LOAD_LIST'

// Register
export const userRegisterStarted = () => ({
  type: USER_REGISTER_STARTED
})

export const userRegisterDone = payload => ({
  type: USER_REGISTER_DONE,
  payload
})

export const userRegisterError = error => ({
  type: USER_REGISTER_ERROR,
  error
})

export const userRegister = ({email, password}) => async dispatch => {
  try {
    dispatch(userRegisterStarted())
    const done = await auth.createUserWithEmailAndPassword(email, password)
    console.log(done.uid)
    dispatch(userRegisterDone({
      uid: done.uid
    }))
  } catch (error) {
    dispatch(userRegisterError(error))
  }
}

// Login
export const userLoginStarted = () => ({
  type: USER_LOGIN_STARTED
})

export const userLoginDone = payload => ({
  type: USER_LOGIN_DONE,
  payload
})

export const userLoginError = error => ({
  type: USER_LOGIN_ERROR,
  error
})

const loadList = list => ({
  type: LOAD_LIST,
  payload: {
    list
  }
})

export const userLogin = ({email, password}) => async (dispatch, getState) => {
  try {
    dispatch(userLoginStarted())
    const done = await auth.signInWithEmailAndPassword(email, password)
    console.log(done)
    dispatch(userLoginDone({
      uid: done.uid
    }))
    db.ref(`users/${done.uid}/`).on('value', snapshot => {
      const data = snapshot.val()
      if (data) {
        dispatch(loadList(Object.values(data)))
      }
    })
  } catch (error) {
    dispatch(userLoginError(error))
  }
  
}

// Logout
export const clearState = () => ({
  type: CLEAR_STATE
})

const userLogoutError = error => ({
  type: USER_LOGOUT_ERROR,
  error
})

export const userLogout = () => async dispatch => {
  try {
    await auth.signOut()
    dispatch(clearState())
  } catch (error) {
    dispatch(userLogoutError(error))
  }
}

// Todolist

export const todoAdd = todo => async (dispatch, getState) => {
  const { uid } = getState()
  const key = db.ref(`users/${uid}`).push().key
  await db.ref(`users/${uid}/${key}`).set({...todo, key})
}

// export const todoEdit = () => {

// }