import AuthActionTypes from '../actions/auth.actions';

export interface IAuthState {
    userID: string;
}

export interface ILoginAction {
    type: AuthActionTypes.LOGIN;
    payload: {
        userID: string;
    };
}

export interface ILogoutAction {
    type: AuthActionTypes.LOGOUT;
}

export interface IAuthContext {
    authState: AuthState;
    updateAuthState: (action: AuthActions) => void;
}

export type AuthContextType = IAuthContext | null;

export type AuthState = IAuthState | null;

export type AuthActions = ILoginAction | ILogoutAction;
