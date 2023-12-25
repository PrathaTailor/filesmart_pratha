import { Layout } from '../components/Layout';
import {
    CircleLoader,
    EngineRedirect as EngineRedirectComponent,
    getEngineRedirectURL
} from '@atomicleads/ext-satellite-form';
import { useRouter } from 'next/router';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { addSearchParamToUrl, clearProductCookies } from '@utils/urlHelpers';

export default function EngineRedirect() {
    const { query, replace } = useRouter();
    const { token, event: action, provider } = query as Record<string, string>;
    const engine: string = process.env.NEXT_PUBLIC_ENGINE_URL as string;
    const cookies = parseCookies();

    const [loggedIn, setLoggedIn] = useState<boolean>(() => {
        return !!cookies['authenticated'];
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [productFocus, setProductFocus] = useState<string>('extension');
    const [redirectURL, setRedirectURL] = useState<string>(() => {
        return getEngineRedirectURL({ token, action, provider, engine, cookies, skipDataLayer: action !== 'login' }); // skiping datalayer for all that is not login
    });

    // Setting proper product focu
    useEffect(() => {
        if (productFocus === cookies['product-focus']) return;

        if (cookies['product-focus']) {
            setProductFocus(cookies['product-focus']);
        }
    }, [cookies, productFocus]);

    useEffect(() => {
        const setAuth = async () => {
            if (action === 'login') {
                setIsLoading(true);

                const { data } = await axios.post('/api/set-auth', { token });
                const { status } = data;

                if (status) {
                    setCookie(null, 'authenticated', 'true', {
                        maxAge: 20 * 60,
                        path: '/'
                    });
                }
                setIsLoading(false);
            }
        };
        setAuth();
    }, [action, token]);

    // There is not product selected, setting refresh tooken cookie and redirecting to
    // pricing page. Should be done only if product focus is 'return'
    useEffect(() => {
        if (cookies['product-selected'] || isLoading || loggedIn || action === 'login') return;

        const exchangeToken = async () => {
            setIsLoading(true);

            const { data } = await axios.post('/api/set-auth', { token });
            const { status } = data;

            if (status) {
                setCookie(null, 'authenticated', 'true', {
                    maxAge: 20 * 60,
                    path: '/'
                });
                setLoggedIn(true);

                replace('/pricing');
            } else {
                console.error('Failed to set auth cookie', data);
                replace('/login');
            }
        };
        if (productFocus === 'return' && !isLoading) {
            exchangeToken();
        }
    }, [cookies, isLoading, loggedIn, replace, token, productFocus, action]);

    // storing action and provider for later use in cookies
    useEffect(() => {
        if (!action || !provider || !loggedIn) return;

        setCookie(null, 'action', action, {
            maxAge: 20 * 60,
            path: '/'
        });
        setCookie(null, 'provider', provider, {
            maxAge: 20 * 60,
            path: '/'
        });
    }, [action, loggedIn, provider]);

    // Product was already selected, user just registered or logged in, we need to
    // send him to checkout page
    useEffect(() => {
        if (!cookies['product-selected'] || isLoading || action === 'login') return;
        setIsLoading(true);

        const engineUrl = addSearchParamToUrl(
            redirectURL,
            'redirect-to', // Param name
            `/checkout/return?pr=${cookies['product-selected']}&redirect-to=${window.location.origin}` // redirect url
        );

        clearProductCookies();
        replace(engineUrl);
    }, [cookies, replace, redirectURL, isLoading, action]);

    useEffect(() => {
        if (isLoading) return;
        // If user logged it and there is no product selected, redirect to pricing page
        if (loggedIn && !cookies['product-selected']) {
            setIsLoading(true);
            replace('/pricing');
        }
    }, [loggedIn, productFocus, cookies, replace, isLoading]);

    return (
        <Layout>
            {(isLoading || productFocus === 'return') && action !== 'login' ? (
                <div className="auth-wrap">
                    <CircleLoader size={128} />
                </div>
            ) : (
                <EngineRedirectComponent
                    engine="filesmart.tax"
                    timeout={1000 * 2}
                    redirect={() => {
                        replace(redirectURL);
                    }}
                />
            )}
        </Layout>
    );
}
