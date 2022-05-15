import { useEffect } from 'react';
import { useNavigate, Outlet, NavigateFunction } from 'react-router-dom';

import { getUserFromSessionStorage } from '../utils/storage.utils';

type Props = {
    redirectPath: string;
    children: JSX.Element;
};

const PrivateRoute = ({ redirectPath, children }: Props) => {
    const navigate: NavigateFunction = useNavigate();

    useEffect((): void => {
        const userData = getUserFromSessionStorage();

        if (!userData) navigate(redirectPath);
    }, []);

    return children ? children : <Outlet />;
};

export default PrivateRoute;
