import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import builderConfig from '@config/builder';
import { createContext, useEffect, useState } from 'react';
// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content
import '@builder.io/widgets/dist/lib/builder-widgets-async';
import { getProductsShort } from '@utils/apiMethods';
import { ProductContext } from 'pages/[[...page]]';

builder.init(builderConfig.apiKey);

export async function getStaticProps(context: GetStaticPropsContext<{ page: string[] }>) {
    const builderPageOptions = {
        userAttributes: {
            urlPath: '/' + (context.params?.page?.join('/') || 'pricing')
        },
        options: {
            noTargeting: true
        }
    };
    const page = (await builder.get('pa-07-offer', builderPageOptions).toPromise()) || null;
    const products = await getProductsShort();
    return {
        props: {
            page,
            products
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 5 seconds
        revalidate: 5
    };
}
export default function Pricing({ page, products }: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter();
    const isPreviewingInBuilder = useIsPreviewing();
    const show404 = !page && !isPreviewingInBuilder;
    if (router.isFallback) {
        return <h1>Loading...</h1>;
    }
    return (
        <>
            <Head>
                <title>FileSmart - File Your Return Today or Get an Extra 6 Months to File</title>
                <meta
                    property="og:title"
                    content="FileSmart - File Your Return Today or Get an Extra 6 Months to File"
                />
                <meta
                    name="description"
                    content="Sign up for FileSmart and file your tax return today, or get an additional 6 months to file."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {!page && <meta name="robots" content="noindex" />}
            </Head>
            {show404 ? (
                <DefaultErrorPage statusCode={404} />
            ) : (
                <ProductContext.Provider value={products}>
                    <BuilderComponent model="pa-07-offer" content={page} />
                </ProductContext.Provider>
            )}
        </>
    );
}
