import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import builderConfig from '@config/builder';
// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content
import '@builder.io/widgets/dist/lib/builder-widgets-async';

builder.init(builderConfig.apiKey);

export async function getStaticProps(context: GetStaticPropsContext<{ page: string[] }>) {
  const builderPageOptions = {
    userAttributes: {
      urlPath: '/' + (context.params?.page?.join('/') || 'order-confirmation-v2')
    },
    options: {
      noTargeting: true
    }
  };
  const page = (await builder.get('pa-35-order-confirmation', builderPageOptions).toPromise()) || null;
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

export default function Index({ page }: InferGetStaticPropsType<typeof getStaticProps>) {
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {!page && <meta name="robots" content="noindex" />}
      </Head>
      {show404 ? (
        <DefaultErrorPage statusCode={404} />
      ) : (
        <BuilderComponent model="pa-35-order-confirmation" content={page} />
      )}
    </>
  );
}
