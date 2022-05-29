import './home-page.styles.scss';

import Loader from '../../components/shared/loader/Loader.component';
import useLoader from '../../hooks/useLoader.hook';

type Props = {};

const HomePage = () => {
    const isLoading: boolean = useLoader();

    return isLoading ? (
        <Loader />
    ) : (
        <main className="home-page">
            <h1>Home</h1>
        </main>
    );
};

export default HomePage;
