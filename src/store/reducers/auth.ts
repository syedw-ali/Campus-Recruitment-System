import { AuthActions } from '../actions';
// import { IlocalStorageUser, ICheckedinInfo } from '../models';

interface IInitalState {
  isLoading: boolean;
  isError: { status: boolean, msg: string }
  isLoggedin: boolean;
  user: any;
  isRegistered: boolean;
}

const InitalState: IInitalState = {
  isLoading: false,
  isError: { status: false, msg: null },
  isLoggedin: false,
  user: {},
  isRegistered: false,
};

export const authReducer = function (state: IInitalState = InitalState, action: { type: string, payload?: any }) {
  switch (action.type) {
    case AuthActions.LOGIN:
      return Object.assign({}, state, { isLoading: true });
    case AuthActions.LOGIN_FAIL:
      return Object.assign({}, state, { isLoading: false, isLoggedin: false, user: {} });
    case AuthActions.LOGIN_SUCCESS:
      return Object.assign({}, state, { isLoading: false, isLoggedin: true, user: action.payload });
    case AuthActions.LOGOUT_FAIL:
      return Object.assign({}, state, { isLoading: false });
    case AuthActions.LOGOUT_SUCCESS:
      return Object.assign({}, state, { isLoading: false, isLoggedin: false, user: {} });
    // case AuthActions.SETCURRENTUSERDATA:
    //   return Object.assign({}, state, { user: Object.assign({}, state.user, action.payload) });
    case AuthActions.SIGN_UP:
      return Object.assign({}, state, { isLoading: true, isRegistered: false });
    case AuthActions.SIGN_UP_SUCCESS:
      return Object.assign({}, state, { isLoading: false, isRegistered: true });
    case AuthActions.SIGN_UP_FAIL:
      return Object.assign({}, state, { isLoading: false, isError: action.payload.isError });
    
    case AuthActions.GET_USER_INFO:
      return Object.assign({}, state, { isLoadding: true });
    case AuthActions.GET_USER_INFO_SUCCESS:
      return Object.assign({}, state, { user: action.payload, isLoading: false });
    case AuthActions.GET_USER_INFO_FAIL:
      return Object.assign({}, state, { isLoadding: false });
    default:
      return state;
  }
}