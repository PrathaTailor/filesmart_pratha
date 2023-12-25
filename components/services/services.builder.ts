import { Builder } from '@builder.io/react';
import { Services } from './Services';
import iconFederalStateReturn from '../../images/icons/icon-federal-state-return.svg';
import iconTaxExtensionFiling from '../../images/icons/icon-tax-extension-filing.svg';
import iconIrsShield from '../../images/icons/icon-irs-shield.svg';
import iconAskExpert from '../../images/icons/icon-ask-an-expert.svg';
import iconPrepPlan from '../../images/icons/icon-2023-prep-plan.svg';
import iconOnlineCourses from '../../images/icons/icon-online-courses.svg';

Builder.registerComponent(Services, {
    name: 'co07 Services',
    inputs: [
        {
            type: 'richText',
            name: 'serviceTitle',
            defaultValue: 'Included With <span>FileSmart<sup>TM</sup></span>'
        },
        {
            type: 'richText',
            name: 'serviceDescription',
            defaultValue:
                "With <span>FileSmart</span><sup>TM</sup>, you'll have access to everything you need with no hidden fees."
        },
        {
            type: 'list',
            name: 'serviceList',
            defaultValue: [
                {
                    title: 'Federal & <br /> State Return',
                    icon: iconFederalStateReturn,
                    description:
                        'Our award-winning online tax preparation service enables you to file your tax return in the simplest, least expensive, and most efficient.',
                    benefits: {
                        benefit1: '<b>State return filing included</b>, at no additional cost.',
                        benefit2: 'Ensure you’re receiving all available tax credits and deductions.',
                        benefit3: 'Access to our team of tax experts to help ensure accuracy and '
                    }
                },
                {
                    title: 'Tax Extension <br /> Filing',
                    icon: iconTaxExtensionFiling,
                    description:
                        'Rushing to file your tax return may cause you to miss important credits and deductions and could result in overpayment of taxes.',
                    benefits: {
                        benefit1: 'Receive an extra <b>six months to file</b> your return',
                        benefit2: '<b>Minimize your liability</b> by ensuring you have enough time to claim all',
                        benefit3: '<b>Eliminate the stress</b> and worry of having to rush to complete your'
                    }
                },
                {
                    title: 'IRS <br /> Shield',
                    icon: iconIrsShield,
                    perfectFor: 'All U.S. citizens ages 18+',
                    description:
                        'Respond to any IRS letter with the help of our tax experts - without paying ANY hourly fees! Get help and support from people who know how to respond...',
                    benefits: {
                        benefit1: 'Get personalized help from our team of experts if you receive any ',
                        benefit2: 'We will review your case and propose a solution',
                        benefit3: 'Our team will work directly with the IRS on your behalf'
                    }
                },
                {
                    title: 'Ask An <br /> Expert',
                    icon: iconAskExpert,
                    description:
                        'As a FileSmart<sup>TM</sup> member, you’ll be able to ask our team of tax experts up to 5 questions per month. If you have a tax question....',
                    benefits: {
                        benefit1: 'Our team of tax experts will be available to answer your tax and',
                        benefit2: 'Skip the expense of having to visit a CPA - you’ll receive the answers',
                        benefit3: 'Receive personalized support and advice throughout the year'
                    }
                },
                {
                    title: '2023 <br /> Prep Plan',
                    icon: iconPrepPlan,
                    description:
                        'If you’d like to be better prepared to file your taxes next year — or learn how to save more money this year—our Prep Plan may be right for you.',
                    benefits: {
                        benefit1: 'Receive personalized advice based on your financial situation',
                        benefit2: 'Save more money on taxes',
                        benefit3: 'Remove the stress of tax season by preparing ahead of time'
                    }
                },
                {
                    title: 'Online <br /> Courses',
                    icon: iconOnlineCourses,
                    description:
                        'Our library of tax and financial courses is available to all our members. Use them to educate yourself about tax and financial topics or as a quick...',
                    benefits: {
                        benefit1: 'Empower yourself by learning about taxes and general finances',
                        benefit2: 'New courses are added regularly',
                        benefit3: 'Save money at tax time by having answers at your fingertips.'
                    }
                }
            ],
            subFields: [
                {
                    name: 'title',
                    type: 'richText'
                },
                {
                    name: 'icon',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                    defaultValue:
                        'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
                },
                {
                    name: 'description',
                    type: 'string'
                },
                {
                    name: 'benefits',
                    type: 'map'
                }
            ]
        }
    ]
});
