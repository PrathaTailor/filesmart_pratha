/* eslint-disable @next/next/inline-script-id */
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

// Included Custom CSS Files
import '../styles/Home.module.css';
import '../styles/_colors.scss';
import '../styles/_fonts.scss';
import '../styles/_reset.scss';
import '../styles/_variable.scss';
import '../styles/globals.css';

// All Inclusive Page Sections
import '../components/about/about.builder';
import '../components/benefits/benefits.builder';
import '../components/courses/courses.builder';
import '../components/cta/cta.builder';
import '../components/faq/faq.builder';
import '../components/footer/footer.builder';
import '../components/header/header.builder';
import '../components/hero/hero.builder';
import '../components/offer/offer.builder';
import '../components/offerTable/offerTable.builder';
import '../components/problems/problems.builder';
import '../components/paraIcons/paraIcons.builder';
import '../components/products/products.builder';
import '../components/services/services.builder';
import '../components/testimonials/testimonials.builder';
import '../components/announcementBar/announcementBar.builder';
import '../components/stickyFooterBar/stickyFooterBar.builder';
import '../components/termsOfUse/termsOfUse.builder';
import '../components/privacy/privacy.builder';
import '../components/refundPolicy/refundPolicy.builder';

// pa07 Offer Page
import '../components/tabs/tabs.builder';
import '../components/offerPage/offerHeading/offerHeading.builder';
import '../components/offerPage/offerPlans/offerPlans.builder';
import '../components/offerPage/offerBoxFree/offerBoxFree.builder';
import '../components/offerPage/counter/counter.builder';
import '../components/offerPage/offer/offer.builder';
import '../components/offerStacked/offerStacked.builder';
import '../components/checkout/checkout.builder';

// Short Home
import '../components/shortHome/headline/headline.builder';
import '../components/shortHome/infoBox/infoBox.builder';
import '../components/shortHome/pricing/pricing.builder';
import '../components/shortHome/info/info.builder';
import '../components/shortHome/customerService/customerService.builder';
import '../components/shortHome/testimonials/testimonials.builder';
import '../components/shortHome/financialEmpowerment/financialEmpowerment.builder';

// Extension
import '../components/extension/extension.builder';

// Deductions Plan
import '../components/deductionPlans/deductionPlanHeader/deductionPlanHeader.builder';
import '../components/deductionPlans/quizIntro/quizIntro.builder';
import '../components/deductionPlans/quizSteps/step1/step1.builder';
import '../components/deductionPlans/quizSteps/step2/step2.builder';
import '../components/deductionPlans/quizSteps/step3/step3.builder';
import '../components/deductionPlans/quizSteps/step4/step4.builder';
import '../components/deductionPlans/quizResult/quizResult.builder';
import '../components/deductionPlans/quizHeader/quizHeader.builder';

// Advertorial Components
import '../components/chunks/alert/inlineAlert.builder';
import '../components/chunks/articleHero/articleHero.builder';
import '../components/chunks/blogColumnContent/blogColumnContent.builder'
import '../components/chunks/blogContent/blogContent.builder'
import '../components/chunks/blogQuestion/blogQuestion.builder'
import '../components/chunks/blogSubtile/blogSubtitle.builder'
import '../components/chunks/blogTitle/blogTitle.builder'
import '../components/chunks/boxedImage/boxedImage.builder'
import '../components/chunks/largeBanner/largeBanner.builder'
import '../components/chunks/largeBannerv2/largeBannerv2.builder'
import '../components/chunks/list/inlineList.builder'
import '../components/chunks/relatedContent/relatedContent.builder'
import '../components/chunks/richtext/richtext.builder'
import '../components/chunks/smallBanner/smallBanner.builder'
import '../components/chunks/testimonialAuthor/testimonialAuthor.builder'
import '../components/chunks/blogNotes/blogNotes.builder'

// Contact Us
import '../components/contact/contact.builder';

import { Builder, builder } from '@builder.io/react';
import builderConfig from '@config/builder';
import { SatelliteFormProvider } from '@atomicleads/ext-satellite-form';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import Router from 'next/router';
import '@fontsource/mulish/400.css';
import '@fontsource/mulish/400-italic.css';
import '@fontsource/mulish/600.css';
import '@fontsource/mulish/700.css';
import '@fontsource/mulish/800.css';
import '@fontsource/mulish/900.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@atomicleads/ext-satellite-form/index.css';
import '@styles/common.scss';

import Script from 'next/script';
import Head from 'next/head';
builder.init(builderConfig.apiKey);
import { ipEvent } from '../utils/events';

// Remove this to allow all built-in components to be used too
const OVERRIDE_INSERT_MENU = false;

if (OVERRIDE_INSERT_MENU) {
    // (optionally) use this to hide all default built-in components and fully manage
    // the insert menu components and sections yourself
    Builder.register('editor.settings', { customInsertMenu: true });
}

// (optionally) set these to add your own sections of components arranged as you choose.
// this can be used with or without `customInsertMenu` above

Builder.register('insertMenu', {
    name: 'Content components',
    items: [
        { name: 'co15 FAQ' },
        { name: 'co49 Rich Text' },
        { name: 'co50 Inline Alert' },
        { name: 'co51 Inline List' },
        { name: 'co54 Boxed Image' },
        { name: 'co70 Testimonial Author' },
        { name: 'co71 Related Content' }
    ]
});

Builder.register('insertMenu', {
    name: 'Headers & Footers components',
    items: [
        { name: 'co02 Header' },
        { name: 'co16 Footer' },
        { name: 'co35 Sticky Footer Bar' },
        { name: 'co35 Sticky Announcement Bar' },
        { name: 'co76 Deduction Plan Header' }
    ]
});

Builder.register('insertMenu', {
    name: 'Hero components',
    items: [{ name: 'co03 Hero' }, { name: 'co53 Article Hero' }]
});

Builder.register('insertMenu', {
    name: 'Sales components',
    items: [
        { name: 'co04 Benefits' },
        { name: 'co05 Problems' },
        { name: 'co06 Product' },
        { name: 'co07 Services' },
        { name: 'co08 Offer Table' },
        { name: 'co09 Offer' },
        { name: 'co10 Courses' },
        { name: 'co11 Transparent Pricing' },
        { name: 'co13 About Us' },
        { name: 'co14 Content CTA' },
        { name: 'co52 Small Banner' },
        { name: 'co55 Large Banner' },
        { name: 'co55 Large Banner v2' },
        { name: 'pa44 Contact Us' }
    ]
});

Builder.register('insertMenu', {
    name: 'Advertorial Components',
    items: [
        { name: 'co49 Blog Column Content' },
        { name: 'co49 Blog Content' },
        { name: 'co49 Blog Question Answer' },
        { name: 'co49 Blog Title' },
        { name: 'co49 Blog Subtitle' },
        { name: 'co49 Blog Notes' },
        { name: 'co49 Rich Text' },
        { name: 'co50 Inline Alert' },
        { name: 'co51 Inline List' },
        { name: 'co52 Small Banner' },
        { name: 'co53 Article Hero' },
        { name: 'co54 Boxed Image' },
        { name: 'co55 Large Banner' },
        { name: 'co55 Large Banner v2' },
        { name: 'co71 Related Content' },
        { name: 'co70 Testimonial Author' },
        
    ]
});

export default function MyApp({ Component, pageProps }: any) {
    const [showChild, setShowChild] = useState(false);
    useEffect(() => {
        setShowChild(true);
    }, []);

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            handleOptimize(url);
            GTMPageView(url);
            ipEvent('').then();
        };

        const handleOptimize = (url: string) => {
            window &&
                (window as any).dataLayer &&
                (window as any).dataLayer.push({
                    event: 'optimize.activate',
                    newUrl: url
                });
        };

        handleOptimize('');
        Router.events.on('routeChangeComplete', handleRouteChange);
        ipEvent('').then();

        return () => {
            console.log('disabling events');
            Router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);

    if (!showChild) {
        return null;
    }

    if (typeof window === 'undefined') {
        return <></>;
    } else {
        return (
            <>
                <Head>
                    <title>Filesmart.tax</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <link
                        rel="prefetch"
                        href="https://helpdesk.filesmart.tax/assets/53453/pub/build//243.js"
                        as="script"
                    />
                    <link
                        rel="prefetch"
                        href="https://helpdesk.filesmart.tax/assets/53453/pub/build/DeskPRO_HelpcenterBundle.js?v=1665409673"
                        as="script"
                    />
                    <link
                        rel="prefetch"
                        href="https://helpdesk.filesmart.tax/web/javascripts/DeskPRO/User/TicketFormWidget/TicketFormWidget.js"
                        as="script"
                    />
                </Head>
                <Script id="google-tag-manager" strategy="afterInteractive">
                    {`
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://sgtm.filesmart.tax/gran_tour_monaco.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-T429GHR');
                   `}
                </Script>
                <SatelliteFormProvider
                    theme="filesmarttax"
                    axios={axios}
                    Router={Router as any}
                    Link={Link as any}
                    Image={Image as any}
                >
                    <Component {...pageProps} />
                </SatelliteFormProvider>
            </>
        );
    }
}

const GTMPageView = (url: string) => {
    window &&
        (window as any).dataLayer &&
        (window as any).dataLayer.push({
            event: 'pageview',
            page: url
        });
};
