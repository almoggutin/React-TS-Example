import { useState, useEffect, useContext } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import { AuthContext } from '../contexts/Auth.context';
import { AuthContextType } from '../models/auth.model';

import { LOADER_TIMEOUT } from '../constants/constants';

const useAuth = (): boolean => {
    const { authState } = useContext<AuthContextType>(AuthContext)!;

    const navigate: NavigateFunction = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect((): void => {
        if (authState != null) {
            navigate('/tasks');
        }

        setTimeout((): void => {
            setIsLoading(false);
        }, LOADER_TIMEOUT);
    }, []);

    return isLoading;
};

export default useAuth;
