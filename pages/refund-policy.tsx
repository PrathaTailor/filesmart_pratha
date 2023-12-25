import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { builder, BuilderComponent, useIsPreviewing } from '@builder.io/react';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import builderConfig from '@config/builder';
// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content
import '@builder.io/widgets/dist/lib/builder-widgets-async';

builder.init(builderConfig.apiKey);

export async function getStaticProps({ params }: GetStaticPropsContext<{ page: string[] }>) {
    const page =
        (await builder
            .get('legal-terms', {
                userAttributes: {
                    urlPath: '/' + (params?.page?.join('/') || 'refund-policy')
                }
            })
            .toPromise()) || null;

    return {
        props: {
            page
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 5 seconds
        revalidate: 5
    };
}

// export async function getStaticPaths() {
//   const pages = await builder.getAll('page', {
//     options: { noTargeting: true },
//     omit: 'data.blocks',
//   })

//   return {
//     paths: pages.map((page) => `${page.data?.url}`),
//     fallback: true,
//   }
// }

export default function Page({ page }: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter();
    const isPreviewingInBuilder = useIsPreviewing();
    const show404 = !page && !isPreviewingInBuilder;

    if (router.isFallback) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <Head>
                <title>FileSmart - Refund Policy</title>
                <meta property="og:title" content="FileSmart - Refund Policy" />
                <meta
                    name="description"
                    content="Not completely satisfied with your purchase? Read our refund policy here."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {!page && <meta name="robots" content="noindex" />}
            </Head>
            {show404 ? <DefaultErrorPage statusCode={404} /> : <BuilderComponent model="legal-terms" content={page} />}
        </>
    );
}
