import Head from 'next/head';
import { Layout } from '../components/Layout';
import { Login as LoginForm } from '@atomicleads/ext-satellite-form';

function Login() {
    return (
        <>
            <Head>
                <title>FileSmart - Login</title>
                <meta property="og:title" content="FileSmart - Login" />
                <meta name="description" content="Log in to your existing FileSmart account." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <div className="auth-wrap login">
                    <LoginForm productFocus="extension" />
                </div>
            </Layout>
        </>
    );
}

export default Login;
