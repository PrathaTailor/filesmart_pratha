import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import builderConfig from '@config/builder';
// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content
import '@builder.io/widgets/dist/lib/builder-widgets-async';
import { useEffect, useState } from 'react';
import { getDeductions } from '@utils/apiMethods';
import { DeductionAnswerContext } from './quiz-intro';

builder.init(builderConfig.apiKey);

export async function getStaticProps(context: GetStaticPropsContext<{ page: string[] }>) {
    const builderPageOptions = {
        userAttributes: {
            urlPath: '/' + (context.params?.page?.join('/') || 'extension')
        },
        options: {
            noTargeting: true
        }
    };
    const page = (await builder.get('pa-40-quiz-step-4', builderPageOptions).toPromise()) || null;
    const deductionAnswers = await getDeductions();
    return {
        props: {
            page,
            deductionAnswers
        },
        revalidate: 60
    };
}

export default function Index({ page, deductionAnswers }: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter();
    const isPreviewingInBuilder = useIsPreviewing();
    const show404 = !page && !isPreviewingInBuilder;

    if (router.isFallback) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <Head>
                <title>FileSmart - Extend Your Tax Return Through April 18th.</title>
                <meta property="og:title" content="FileSmart - Extend Your Tax Return Through April 18th." />
                <meta
                    name="description"
                    content="Want an extra 6 months to file your taxes? Sign up for FileSmart today."
                />
                <meta property="og:image" content="https://example.com/images/cool-page.jpg" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {!page && <meta name="robots" content="noindex" />}
            </Head>
            {show404 ? (
                <DefaultErrorPage statusCode={404} />
            ) : (
                <DeductionAnswerContext.Provider value={deductionAnswers}>
                    <BuilderComponent model="pa-40-quiz-step-4" content={page} />
                </DeductionAnswerContext.Provider>
            )}
        </>
    );
}
