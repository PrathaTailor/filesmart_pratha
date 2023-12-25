import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import { builder } from '@builder.io/react';
// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content
import '@builder.io/widgets/dist/lib/builder-widgets-async';
import { OrderConfirmation } from '@components/orderConfirmation/OrderConfirmation';
import { Layout } from '@components/Layout';
import { getProductsShort, productSkuEnum } from '@utils/apiMethods';
import { catalogApi } from '@atomicleads/tax-client';
import path from 'path';
import { useEffect } from 'react';

export async function getStaticProps(context: GetStaticPropsContext<{ page: string[] }>) {
    const products = await getProductsShort();

    return {
        props: {
            products
        }
    };
}
export async function getStaticPaths() {
    const skus = productSkuEnum();
    const paths = skus.map((x) => {
        return {
            params: {
                sku: [x]
            }
        };
    });

    return {
        paths: paths,
        fallback: true
    };
}

export default function Index({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter();

    if (router.isFallback) {
        return <h1>Loading...</h1>;
    }
    const { sku, tid = '' } = router.query;
    if (!sku || sku.length === 0) {
        console.log('sku is missing', router.query);
        return <DefaultErrorPage statusCode={404} />;
    }

    const purchase = products.filter((pr) => pr.sku === sku[0])[0];
    if (!purchase) {
        console.log('purchase is missing: ', sku);
        return <DefaultErrorPage statusCode={404} />;
    }

    const extProducts = purchase?.subProducts?.filter(
        (x) => x.productType === catalogApi.Product.productType.PRODUCT_TYPE_PERSONAL_EXTENSION
    );
    const shieldProducts = purchase?.subProducts?.filter(
        (x) => x.productType === catalogApi.Product.productType.PRODUCT_TYPE_SHIELD
    );
    const supportProducts = purchase?.subProducts?.filter(
        (x) => x.productType === catalogApi.Product.productType.PRODUCT_TYPE_SUPPORT
    );
    const coursesProducts = purchase?.subProducts?.filter(
        (x) => x.productType === catalogApi.Product.productType.PRODUCT_TYPE_COURSE
    );

    let hasExtension = extProducts !== undefined && extProducts.length > 0;
    let hasShield = shieldProducts !== undefined && shieldProducts.length > 0;
    let hasSupport = supportProducts !== undefined && supportProducts.length > 0;
    let hasCourses = coursesProducts !== undefined && coursesProducts.length > 0;
    
    // tracking will be only enabled if transactionId is exist
    if (tid) {
        // is event is tracked or not
        const storageTid = localStorage.getItem('tid')
        if (!storageTid || storageTid !== tid) {
            builder.trackConversion((purchase?.basePrice || 0) / 100);
            localStorage.setItem('tid', tid?.toString() || '')
        }
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
            </Head>
            <Layout isHeaderVisible={false}>
                <OrderConfirmation
                    planName={purchase.name!}
                    hasExtension={hasExtension}
                    hasCourses={hasCourses}
                    hasShield={hasShield}
                    hasSupport={hasSupport}
                />
            </Layout>
        </>
    );
}
