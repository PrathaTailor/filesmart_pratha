import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import { getAsyncProps } from '@builder.io/utils';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import builderConfig from '@config/builder';
// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content
import '@builder.io/widgets/dist/lib/builder-widgets-async';

builder.init(builderConfig.apiKey);
// console.log('offer page init');

export async function getStaticProps(context: GetStaticPropsContext<{ page: string[]; resolvedUrl: string }>) {
    // console.log('offer page getStaticProps');

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
    const offer = (await builder.get('co-09-offer', builderSectionOptions).toPromise()) || null;

    await getAsyncProps(page, {
        async Products(props) {
            return {
                data: []
            };
        }
    });

    return {
        props: {
            page,
            offer
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 5 seconds
        revalidate: 5
    };
}

export default function Offer({ page, offer }: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter();
    const isPreviewingInBuilder = useIsPreviewing();
    const show404 = !page && !isPreviewingInBuilder;

    if (router.isFallback) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {!page && <meta name="robots" content="noindex" />}
            </Head>
            {show404 ? <DefaultErrorPage statusCode={404} /> : <BuilderComponent model="co-09-offer" content={offer} />}
        </>
    );
}
