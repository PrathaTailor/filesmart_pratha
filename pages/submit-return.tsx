import Head from 'next/head';
import { Layout } from '../components/Layout';
import { CreateAccountNextAPI as RegistrationForm } from '@atomicleads/ext-satellite-form';
import { setCookie } from 'nookies';
import { useEffect } from 'react';

export default function Registration() {
    useEffect(() => {
        setCookie(null, 'product-focus', 'return', {
            maxAge: 30 * 24 * 60 * 60,
            path: '/'
        });
    }, []);

    return (
        <>
            <Head>
                <title>FileSmart - File Your Tax Return</title>
                <meta property="og:title" content="FileSmart - File Your Tax Return" />
                <meta name="description" content="Register here to file your tax return" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <div className="auth-wrap registration">
                    <RegistrationForm productFocus="return" disablePasswordConfirm />
                </div>
            </Layout>
        </>
    );
}
