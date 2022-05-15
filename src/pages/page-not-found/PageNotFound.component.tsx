import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import './page-not-found.styles.scss';

import Loader from '../../components/shared/loader/Loader.component';
import useLoader from '../../hooks/useLoader.hook';

const PageNotFound = () => {
    const navigate: NavigateFunction = useNavigate();

    const isLoading: boolean = useLoader();

    const handleClick = (): void => navigate('/');

    return isLoading ? (
        <Loader />
    ) : (
        <main className="page-not-found">
            <h1>404</h1>

            <button type="button" onClick={handleClick}>
                Go Back Home
            </button>
        </main>
    );
};

export default PageNotFound;
