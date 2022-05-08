import AuthActionTypes from '../actions/auth.actions';

export interface IAuthState {
    userID: string;
}

export interface ILoginAction {
    type: AuthActionTypes;
    payload: {
        userID: string;
    };
}

export interface ILogoutAction {
    type: AuthActionTypes;
}
