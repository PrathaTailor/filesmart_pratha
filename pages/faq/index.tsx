import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import builderConfig from '@config/builder';
// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content
import '@builder.io/widgets/dist/lib/builder-widgets-async';

builder.init(builderConfig.apiKey);

export async function getStaticProps(context: GetStaticPropsContext<{ page: string[]; resolvedUrl: string }>) {
    const builderPageOptions = {
        userAttributes: {
            urlPath: '/' + (context.params?.page?.join('/') || 'faq')
        }
    };
    const faq = (await builder.get('co-15-faq', builderPageOptions).toPromise()) || null;

    return {
        props: {
            faq
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 5 seconds
        revalidate: 5
    };
}

export default function FAQ({ faq }: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter();
    const isPreviewingInBuilder = useIsPreviewing();
    const show404 = !faq && !isPreviewingInBuilder;

    if (router.isFallback) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {!faq && <meta name="robots" content="noindex" />}
            </Head>
            {show404 ? <DefaultErrorPage statusCode={404} /> : <BuilderComponent model="co-15-faq" content={faq} />}
        </>
    );
}
