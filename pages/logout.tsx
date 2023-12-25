import { Layout } from '../components/Layout';
import { CircleLoader } from '@atomicleads/ext-satellite-form';
import { useRouter } from 'next/router';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { clearProductCookies } from '@utils/urlHelpers';
import { useState, useEffect } from 'react';

export default function Logout() {
    const router = useRouter();

    // Setting proper product focu
    useEffect(() => {
        console.log('User requested to lougout');
        setCookie(null, 'authenticated', 'false', {
            maxAge: -1,
            path: '/'
        });
        destroyCookie(null, 'authenticated');
        clearProductCookies();
        router.push('/?ts=' + new Date().getTime());
    }, [router]);

    return (
        <Layout>
            <div className="auth-wrap">
                <CircleLoader size={128} />
            </div>
        </Layout>
    );
}
