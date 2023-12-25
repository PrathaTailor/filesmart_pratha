import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import builderConfig from '@config/builder';
// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content
import '@builder.io/widgets/dist/lib/builder-widgets-async';
import { useEffect, useState } from 'react';
import { queryParamHeaders } from '../../config/query-param-headers'

builder.init(builderConfig.apiKey);

export async function getStaticProps(context: GetStaticPropsContext<{ page: string[]; resolvedUrl: string }>) {
    const builderPageOptions = {
        userAttributes: {
            urlPath: '/' + (context.params?.page?.join('/') || '')
        }
    };
    const builderSectionOptions = {
        options: {
            noTargeting: true
        }
    };

    const page = (await builder.get('page', builderPageOptions).toPromise()) || null;
    const hero = (await builder.get('co-03-hero', builderSectionOptions).toPromise()) || null;

    return {
        props: {
            page,
            hero
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 5 seconds
        revalidate: 5
    };
}

export default function Hero({ page, hero }: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter();
    const isPreviewingInBuilder = useIsPreviewing();
    const [headers, setHeaders] = useState({});
    const show404 = !page && !isPreviewingInBuilder;

    useEffect(() => {
        if (window.location.search) {
            const url = new URL(window.location.href);
            const params = new URLSearchParams(url.search);

            const keyword: string = String(params.get('kw'));

            let newHeaders: any = queryParamHeaders.find((queryParam) => queryParam.kw === keyword);
            if (!newHeaders) {
                newHeaders = {
                    heading11: "The All-Inclusive Way to File Your Taxes",
                    heading12: "The All-Inclusive Way to File Your Taxes",
                    subHeading1: "File Federal and State taxes for one low fee while saving on taxes all year round",
                    subHeading2: "File Federal and State taxes for one low fee while saving on taxes all year round"   
                }
            }
            setHeaders({...newHeaders, kw: undefined});
        }
    }, [router.query]);

    if (router.isFallback) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {!page && <meta name="robots" content="noindex" />}
            </Head>
            {show404 ? <DefaultErrorPage statusCode={404} /> : <BuilderComponent model="co-03-hero" content={hero} data={headers} />}
        </>
    );
}
