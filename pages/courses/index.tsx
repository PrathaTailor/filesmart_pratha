import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import builderConfig from '@config/builder';
// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content
import '@builder.io/widgets/dist/lib/builder-widgets-async';
// import { IdentityClient, CatalogClient } from '../utils/apiClient';

builder.init(builderConfig.apiKey);

export async function getStaticProps(context: GetStaticPropsContext<{ page: string[]; resolvedUrl: string }>) {
    // const client = new IdentityClient(process.env.IDENTITY_API_URL!, process.env.SERVICES_API_KEY!);
    // const jwt = await client.GetJwtToken();

    // const catalogClient = new CatalogClient(process.env.CATALOG_API_URL!, jwt!);
    // const courses = await catalogClient.GetCourses();
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
    const course = (await builder.get('co-10-courses', builderSectionOptions).toPromise()) || null;

    return {
        props: {
            page,
            course
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 5 seconds
        revalidate: 5
    };
}

export default function Courses({ page, course }: InferGetStaticPropsType<typeof getStaticProps>) {
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
            {show404 ? (
                <DefaultErrorPage statusCode={404} />
            ) : (
                <BuilderComponent model="co-10-courses" content={course} />
            )}
        </>
    );
}
