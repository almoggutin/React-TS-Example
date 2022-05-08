import { IAuthState, ILoginAction, ILogoutAction } from '../models/auth.model';
import AuthActionTypes from '../actions/auth.actions';

type AuthActions = ILoginAction | ILogoutAction;

export const AUTH_INITIAL_STATE: IAuthState | null = null;

const authReducer = (state: IAuthState, action: AuthActions) => {
    switch (action.type) {
        case AuthActionTypes.LOGIN: {
            const { userID } = action.payload;

            return { userID };
        }
        case AuthActionTypes.LOGOUT: {
            return AUTH_INITIAL_STATE;
        }
        default:
            return { ...state };
    }
};

export default authReducer;
