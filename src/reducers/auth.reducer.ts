import { AuthState, AuthActions } from '../models/auth.model';
import AuthActionTypes from '../actions/auth.actions';

export const AUTH_INITIAL_STATE: AuthState = null;

const authReducer = (state: AuthState, action: AuthActions): AuthState => {
    switch (action.type) {
        case AuthActionTypes.LOGIN: {
            const { userID } = action.payload;

            return { userID };
        }
        case AuthActionTypes.LOGOUT: {
            return AUTH_INITIAL_STATE;
        }
        default:
            return state;
    }
};

export default authReducer;
