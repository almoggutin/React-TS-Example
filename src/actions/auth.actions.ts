import { ILoginAction, ILogoutAction } from '../models/auth.model';

enum AuthActionTypes {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
}

export const loginAction = (userID: string): ILoginAction => ({
    type: AuthActionTypes.LOGIN,
    payload: {
        userID,
    },
});

export const logoutAction = (): ILogoutAction => ({
    type: AuthActionTypes.LOGOUT,
});

export default AuthActionTypes;
