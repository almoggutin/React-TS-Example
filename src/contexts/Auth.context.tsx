import React, { createContext, ReactNode, useReducer } from 'react';

import { AuthState, AuthActions, AuthContextType } from '../models/auth.model';

import authReducer, { AUTH_INITIAL_STATE } from '../reducers/auth.reducer';

import { getUserFromSessionStorage } from '../utils/storage.utils';

type Props = {
    children: ReactNode;
};

export const AuthContext = createContext<AuthContextType>(null);

const AuthContextProvider = ({ children }: Props) => {
    const userData: AuthState = getUserFromSessionStorage();
    const [authState, dispatchAuthState] = useReducer(authReducer, userData || AUTH_INITIAL_STATE);

    const updateAuthState = (action: AuthActions): void => dispatchAuthState(action);

    const value = { authState, updateAuthState };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
