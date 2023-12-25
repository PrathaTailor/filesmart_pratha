import { Builder } from '@builder.io/react';
import { FinancialEmpowerment } from './FinancialEmpowerment';
import iconBBB from '../../../images/icons/icon-empowerment-bbb.png';
import icon1m from '../../../images/icons/icon-empowerment-1m.png';
import iconIRS from '../../../images/icons/icon-empowerment-irs.png';
import iconSecure from '../../../images/icons/icon-empowerment-secure.png';

Builder.registerComponent(FinancialEmpowerment, {
    name: 'co69 Final Section',
    inputs: [
        {
            type: 'object',
            name: 'financialDetails',
            defaultValue: {
                financialTitle: 'A Decade Devoted to Your Financial Empowerment',
                desc: '<b>We are a tax tech company in business for over 18 years and rated A+ with the BBB.</b>',
                content:
                    'At FileSmart<sup>TM</sup> we leverage tech and education to offer taxpayers a better, more cost-effective, and transparent way to file for a remarkably low fee.',
                getStartedDesc: 'Finally, an Affordable and Transparent Tax Filing Company',
                getStartedDescTwo:
                    'The stress-free way to get your taxes done in a way that’s easy on you and your wallet. ',
                btnText: 'Get Started',
                btnLink: '/regsitration',
                comment: 'File your taxes the Smart Way.'
            },
            subFields: [
                {
                    name: 'financialTitle',
                    type: 'string'
                },
                {
                    name: 'desc',
                    type: 'richText'
                },
                {
                    name: 'content',
                    type: 'richText'
                },
                {
                    name: 'getStartedDesc',
                    type: 'string'
                },
                {
                    name: 'getStartedDescTwo',
                    type: 'string'
                },
                {
                    name: 'btnText',
                    type: 'string'
                },
                {
                    name: 'btnLink',
                    type: 'string'
                },
                {
                    name: 'comment',
                    type: 'string'
                }
            ]
        },
        {
            type: 'list',
            name: 'financialList',
            defaultValue: [
                {
                    icon: iconBBB,
                    title: 'A+ Rated with the BBB'
                },
                {
                    icon: icon1m,
                    title: 'Over 1,000,000 accounts created'
                },
                {
                    icon: iconIRS,
                    title: 'IRS-Approved E-File Provider'
                },
                {
                    icon: iconSecure,
                    title: 'Your data is 100% safe and secure'
                }
            ],
            subFields: [
                {
                    name: 'icon',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                    defaultValue:
                        'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
                },
                {
                    name: 'title',
                    type: 'string'
                }
            ]
        }
    ]
});
