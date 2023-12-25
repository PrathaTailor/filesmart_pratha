import { Layout } from '@components/Layout';
import { Redirect } from '@components/redirect/Redirect';
import Head from 'next/head';

export default function RedirectPage() {
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
            <Redirect />
        </>
    );
}
