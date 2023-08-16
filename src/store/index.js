import Cookies from "js-cookie";
import { createStore } from "redux"

const initialState = {
  isAuth: false,
  isLoading: true,
  lastTime: false,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      if (action.access_token) {
        Cookies.set("token", action.access_token, { expires: 22 });
      }
      return { ...state, isAuth: true }
    case 'LOGOUT':
      Cookies.remove("token");
      return { ...state, isAuth: false }
    case 'SWITCH_LOADING':
      return { ...state, isLoading: action.isLoading }
    case 'SWITCH_LAST_UPDATED_TIME':
      return { ...state, lastTime: action.lastTime }
    default:
      return state
  }
}

export const store = createStore(rootReducer)