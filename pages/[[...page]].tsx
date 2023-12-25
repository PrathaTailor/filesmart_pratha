import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import builderConfig from '@config/builder';
import * as Sentry from '@sentry/nextjs';
// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content
import '@builder.io/widgets/dist/lib/builder-widgets-async';
import imgLogo from '../images/icons/file-smart-tax-logo.png';
import { useEffect, useState, createContext } from 'react';
import { queryParamHeaders } from '../config/query-param-headers';
import { decodeOptions, encodeOptions } from '../utils/utils';
import { catalogApi } from '@atomicleads/tax-client';
import { getProductsShort } from '@utils/apiMethods';

builder.init(builderConfig.apiKey);
export const ProductContext = createContext<catalogApi.Product[]>([]);

type KeywordContainer = {
    kw?: string;
};

export async function getStaticProps(context: GetStaticPropsContext<{ page: string[] }>) {
    console.log('page rendering: ', context.params?.page);

    const params = context.params;
    const hasKeyword = params?.page[params.page.length - 1].startsWith('{');
    let path = '/';
    let options: KeywordContainer = {};
    let queryString = '';
    const defaultHeaders = {
        heading11: 'The <span>All-Inclusive</span> Way to File Your Taxes',
        heading12: 'The <span>All-Inclusive</span> Way to File Your Taxes',
        subHeading1: 'File Federal and State taxes for one low fee while saving on taxes all year round',
        subHeading2: 'File Federal and State taxes for one low fee while saving on taxes all year round'
    };
    const defaultShortHeaders = {
        heading11: "Starting to feel tax-time stress? We've got a solution for that.",
        heading12: "Starting to feel tax-time stress? We've got a solution for that.",
        subHeading1:
            "Don't pay hefty IRS penalties or more than you owe because you rushed to meet the deadline. Meet <b> FileSmart</b>, the all-inclusive way to file your taxes. ",
        subHeading2:
            "Don't pay hefty IRS penalties or more than you owe because you rushed to meet the deadline. Meet <b> FileSmart</b>, the all-inclusive way to file your taxes. "
    };
    if (hasKeyword) {
        options = decodeOptions(params?.page[params.page.length - 1]);
        const searchParams = new URLSearchParams(options);
        queryString = searchParams.toString();
    }
    if (!hasKeyword) {
        path = '/' + params?.page.join('/');
    }
    const builderPageOptions = {
        userAttributes: {
            urlPath: path,
            queryParam: queryString
        }
    };

    try {
        const page = (await builder.get('pa-01-home', builderPageOptions).toPromise()) || null;
        const products = await getProductsShort();

        // @ts-ignore
        const headers: any = queryParamHeaders.find((queryParam) => queryParam.kw === options.kw) || defaultHeaders;
        // @ts-ignore
        const shortheaders: any =
            queryParamHeaders.find((queryParam) => queryParam.kw === options.kw) || defaultShortHeaders;
        return {
            props: {
                page,
                headers,
                products,
                shortheaders
            },
            revalidate: 60 * 10 // every 10 minutes
        };
    } catch (error) {
        Sentry.captureException(error);
        return {
            props: {
                page: null,
                headers: defaultHeaders,
                products: [],
                shortheaders: defaultShortHeaders
            },
            revalidate: 5 // every 5 seconds. We want to revalidate as soon as possible if there is an error
        };
    }
}

export async function getStaticPaths() {
    //  Fetch all published pages for the current .
    //  Using the `fields` option will limit the size of the response
    //  and only return the `data.url` field from the matching pages.
    // const pages = await builder.getAll('pa-01-home', {
    //     fields: 'data.url', // only request the `data.url` field
    //     options: { noTargeting: false },
    //     limit: 10
    // });

    const keywords = queryParamHeaders.map((x) => x.kw);

    const paths = keywords.map((x) => {
        const keyword = encodeOptions({
            kw: x
        });
        return {
            params: {
                page: [keyword]
            }
        };
    });

    return {
        paths: paths,
        fallback: true
    };
}
export default function Index({
    page,
    headers,
    products,
    shortheaders
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter();
    const isPreviewingInBuilder = useIsPreviewing();
    const show404 = !page && !isPreviewingInBuilder;

    if (router.isFallback) {
        return null;
    }
    if (show404) {
        const productSkus = products.map((x) => x.sku?.toString() || '').join(',');
        Sentry.captureException(new Error('404 error'), {
            tags: {
                page: page,
                headers,
                products: productSkus,
                shortheaders
            }
        });
    }

    return (
        <>
            <Head>
                <title>FileSmart - The All-Inclusive Way to File Your Taxes</title>
                <meta property="og:title" content="FileSmart - The All-Inclusive Way to File Your Taxes" />
                <meta
                    name="description"
                    content="File Federal and State taxes for one low fee while saving on taxes all year round."
                />
                <meta property="og:image" content={`${location.origin}${imgLogo.src}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {!page && <meta name="robots" content="noindex" />}
            </Head>
            {show404 ? (
                <DefaultErrorPage statusCode={404} />
            ) : (
                <ProductContext.Provider value={products}>
                    <BuilderComponent model="pa-01-home" content={page} data={{ headers, shortheaders }} />
                </ProductContext.Provider>
            )}
        </>
    );
}
