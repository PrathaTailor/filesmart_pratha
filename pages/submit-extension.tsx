import Head from 'next/head';
import { Layout } from '../components/Layout';
import { CreateAccountNextAPI as RegistrationForm } from '@atomicleads/ext-satellite-form';

function Register() {
    return (
        <>
            <Head>
                <title>FileSmart - File Your Tax Extension</title>
                <meta property="og:title" content="FileSmart - File Your Tax Extension" />
                <meta
                    name="description"
                    content="Register here to file your tax extension, and get an additional 6 months to file your taxes."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <div className="auth-wrap registration">
                    <RegistrationForm productFocus="extension" disablePasswordConfirm />
                </div>
            </Layout>
        </>
    );
}

export default Register;
