import Head from 'next/head';
import { Layout } from '../components/Layout';
import { CreateAccountNextAPI as RegistrationForm } from '@atomicleads/ext-satellite-form';
import { setCookie } from 'nookies';
import { useEffect } from 'react';

export default function Registration() {
    useEffect(() => {
        setCookie(null, 'product-focus', 'extension', {
            maxAge: 30 * 24 * 60 * 60,
            path: '/'
        });
    }, []);


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
