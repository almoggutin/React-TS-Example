import './login-page.styles.scss';

import Loader from '../../components/shared/loader/Loader.component';
import useAuth from '../../hooks/useAuth.hooks';

import Card from '../../components/card/Card.component';
import LoginForm from './login-form/LoginForm.component';

type Props = {};

const LoginPage = () => {
    const isLoading: boolean = useAuth();

    return isLoading ? (
        <Loader />
    ) : (
        <main className="login-page">
            <Card className="login-page-card">
                <h1>Welcome Back!</h1>

                <LoginForm />
            </Card>
        </main>
    );
};

export default LoginPage;
