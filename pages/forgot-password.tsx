import { useEffect } from 'react';
import Head from 'next/head';
import { Layout } from '../components/Layout';
import { ForgotPassword as ForgotForm } from '@atomicleads/ext-satellite-form';

function Forgot() {
    useEffect(() => {
        document.body.classList.add('forgotPassword')
        return () => {
            document.body.classList.remove('forgotPassword')
        }
    }, [])
    return (
        <>
            <Head>
                <title>FileSmart - Forgot your password?</title>
                <meta property="og:title" content="FileSmart - Forgot your password?" />
                <meta
                    name="description"
                    content="Forgot your password? Simply input your email, and we’ll send you a password recovery link."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Layout>
                <div className="auth-wrap forgot">
                    <ForgotForm />
                </div>
            </Layout>
        </>
    );
}

export default Forgot;
