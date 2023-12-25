import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import builderConfig from '@config/builder';
// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content
import '@builder.io/widgets/dist/lib/builder-widgets-async';
import { queryParamHeaders } from '../config/query-param-headers';
import { useEffect, useState, createContext } from 'react';
import { catalogApi } from '@atomicleads/tax-client';
import { getProductsShort } from '@utils/apiMethods';
import { ProductContext } from './[[...page]]';

builder.init(builderConfig.apiKey);

export async function getStaticProps(context: GetStaticPropsContext<{ page: string[] }>) {
    const builderPageOptions = {
        userAttributes: {
            urlPath: '/' + (context.params?.page?.join('/') || 'short-home')
        }
    };
    const page = (await builder.get('pa-26-short-home', builderPageOptions).toPromise()) || null;
    const products = await getProductsShort();

    return {
        props: {
            page,
            products
        },
        revalidate: 5
    };
}

export default function Index({ page, products }: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter();
    const isPreviewingInBuilder = useIsPreviewing();

    const [content, setContent] = useState(page);
    const [headers, setHeaders] = useState({});

    const show404 = !content && !isPreviewingInBuilder;
    useEffect(() => {
        const defaultHeaders = {
            heading11: 'Starting to feel tax-time stress? We’ve got a solution for that.',
            heading12: 'Starting to feel tax-time stress? We’ve got a solution for that.',
            subHeading1:
                'Don’t pay hefty IRS penalties or more than you owe because you rushed to meet the deadline. Meet <b> FileSmart<sup>TM</sup></b>, the all-inclusive way to file your taxes. ',
            subHeading2:
                'Don’t pay hefty IRS penalties or more than you owe because you rushed to meet the deadline. Meet <b> FileSmart<sup>TM</sup></b>, the all-inclusive way to file your taxes. '
        };
        if (window.location.search) {
            const url = new URL(window.location.href);
            const params = new URLSearchParams(url.search);

            const keyword: string = String(params.get('kw'));

            let newHeaders: any = queryParamHeaders.find((queryParam) => queryParam.kw === keyword);
            if (newHeaders) {
                setHeaders({ ...newHeaders, kw: undefined });
            } else {
                setHeaders(defaultHeaders);
            }

            async function fetchContent() {
                const userAttributes = {
                    urlPath: window.location.pathname,
                    queryParam: window.location.search
                };
                builder.setUserAttributes(userAttributes);

                const content = await builder.get('pa-26-short-home').promise();
                setContent(content);
            }
            fetchContent();
        } else {
            setHeaders(defaultHeaders);
        }
    }, [router.query]);

    if (router.isFallback) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <Head>
                <title>Make filing your taxes less stressful with FileSmart.</title>
                <meta property="og:title" content="Make filing your taxes less stressful with FileSmart." />
                <meta
                    name="description"
                    content="Whether you’re ready to file your taxes or need more time, FileSmart has you covered. Learn how to become a member today."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {!content && <meta name="robots" content="noindex" />}
            </Head>
            {show404 ? (
                <DefaultErrorPage statusCode={404} />
            ) : (
                <ProductContext.Provider value={products}>
                    <BuilderComponent model="pa-26-short-home" content={content} data={{ shortheaders: headers }} />
                </ProductContext.Provider>
            )}
        </>
    );
}
