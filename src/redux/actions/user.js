import { auth } from '../../firebase'

const USER_REGISTER_STARTED = 'USER_REGISTER_STARTED'
const USER_REGISTER_DONE = 'USER_REGISTER_DONE'
const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR'

const USER_LOGIN_STARTED = 'USER_LOGIN_STARTED'
const USER_LOGIN_DONE = 'USER_LOGIN_DONE'
const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR'

const userRegisterStarted = () => ({
  type: USER_REGISTER_STARTED
})

const userRegisterDone = () => ({
  type: USER_REGISTER_DONE
})

const userRegisterError = error => ({
  type: USER_REGISTER_ERROR,
  error
})

const userRegister = ({email, password}) => async dispatch => {
  try {
    dispatch(userRegisterStarted())
    await auth.createUserWithEmailAndPassword(email, password)
    dispatch(userRegisterDone())
  } catch (error) {
    dispatch(userRegisterError(error))
  }
}

const userLoginStarted = () => ({
  type: USER_LOGIN_STARTED
})

const userLoginDone = () => ({
  type: USER_LOGIN_DONE
})

const userLoginError = error => ({
  type: USER_LOGIN_ERROR,
  error
})

const userLogin = ({email, password}) => async dispatch => {
  try {
    dispatch(userLoginStarted())
    await auth.signInWithEmailAndPassword(email, password)
    dispatch(userLoginDone())
  } catch (error) {
    dispatch(userLoginError(error))
  }
}
