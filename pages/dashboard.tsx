import { Layout } from '../components/Layout';
import { CircleLoader, getEngineRedirectURL } from '@atomicleads/ext-satellite-form';
import { useRouter } from 'next/router';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { addSearchParamToUrl, clearProductCookies } from '@utils/urlHelpers';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Logout() {
    const router = useRouter();

    // Setting proper product focu
    useEffect(() => {
        const dashboardRedirect = async () => {
            const cookies = parseCookies();
            if ('authenticated' in cookies) {
                const transferResponse = await axios.post('/api/transfer');
                if (transferResponse.status === 200 && transferResponse.data.token) {
                    const token = transferResponse.data.token;
                    const action = cookies['action'] ?? 'login';
                    const provider = cookies['provider'] ?? 'email';
                    const engine: string = process.env.NEXT_PUBLIC_ENGINE_URL as string;
                    let redirectUrl = getEngineRedirectURL({
                        token,
                        action,
                        provider,
                        engine,
                        cookies,
                        skipDataLayer: true
                    });
                    redirectUrl = addSearchParamToUrl(
                        redirectUrl,
                        'redirect-to', // Param name
                        `/dashboard` // redirect url
                    );
                    router.replace(redirectUrl);
                    return;
                } else {
                    destroyCookie(null, 'authenticated');
                    router.replace('/login');
                }
            } else {
                destroyCookie(null, 'authenticated');
                router.replace('/login');
            }
        };
        dashboardRedirect();
    }, [router]);

    return (
        <Layout>
            <div className="auth-wrap">
                <CircleLoader size={128} />
            </div>
        </Layout>
    );
}
