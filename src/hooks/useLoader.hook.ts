import { useState, useEffect } from 'react';

import { LOADER_TIMEOUT } from '../constants/constants';

const useLoader = (): boolean => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect((): void => {
        setTimeout((): void => {
            setIsLoading(false);
        }, LOADER_TIMEOUT);
    }, []);

    return isLoading;
};

export default useLoader;
