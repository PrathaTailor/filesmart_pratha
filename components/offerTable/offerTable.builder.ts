import { Builder } from '@builder.io/react';
import { OfferTable } from './OfferTable';
import iconArrow from '../../images/icons/icon-arrow-right.png';
import iconDollar from '../../images/icons/icon-money-red.png';
import iconNotOffered from '../../images/icons/icon-not-offered.png';

Builder.registerComponent(OfferTable, {
    name: 'co08 Offer Table',
    inputs: [
        {
            type: 'object',
            name: 'offerDetails',
            defaultValue: {
                title: 'Why <span style="color:blue">FileSmart<sup>TM</sup></span> Is a Better Solution for You and Your Wallet',
                smallTitle:
                    'Why <span style="color:blue">FileSmart</span><sup>TM</sup> Is Better for You and for Your Pocket',
                subTitle: "We're America's first robust, cost-effective tax solution. Here's why:",
                note: '* Comparison pricing and features of other online tax products were obtained directly from the TurboTax website on March 29th, 2022. Filing with all forms, including self-employed. Cost of filing state with complex federal return',
                freePackageTitle: 'Transparent Pricing',
                premiumPackageTitle: 'The “Free” Guys',
                premiumPackageSubTitle: 'Upsell Pricing',
                buttonSymbol: iconArrow,
                buttonText: 'Get Started',
                buttonSmallText: 'And Access FileSmart<sup>TM</sup> Instantly'
            },
            subFields: [
                {
                    name: 'title',
                    type: 'richText'
                },
                {
                    name: 'smallTitle',
                    type: 'richText'
                },
                {
                    name: 'subTitle',
                    type: 'string'
                },
                {
                    name: 'freePackageTitle',
                    type: 'string'
                },
                {
                    name: 'premiumPackageTitle',
                    type: 'string'
                },
                {
                    name: 'premiumPackageSubTitle',
                    type: 'string'
                },
                {
                    name: 'note',
                    type: 'string'
                },
                {
                    name: 'buttonSymbol',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                    defaultValue:
                        'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
                },
                {
                    name: 'buttonText',
                    type: 'string'
                },
                {
                    name: 'buttonSmallText',
                    type: 'string'
                }
            ]
        },
        {
            type: 'list',
            name: 'labels',
            defaultValue: [
                {
                    title: 'Pricing'
                },
                {
                    title: 'State Return'
                },
                {
                    title: 'Post-Filing Support'
                },
                {
                    title: 'Extension'
                },
                {
                    title: 'Ask an Expert'
                },
                {
                    title: 'Tax Education'
                }
            ],
            subFields: [
                {
                    name: 'title',
                    type: 'string'
                }
            ]
        },
        {
            type: 'list',
            name: 'freePackage',
            defaultValue: [
                {
                    priceText: 'Starting at',
                    price: '$9.95',
                    term: false,
                    text: 'All-inclusive, all tax situations.',
                    icon: ''
                },
                {
                    priceText: '',
                    price: 'Free',
                    term: false,
                    text: 'For all US states.',
                    icon: ''
                },
                {
                    priceText: '',
                    price: 'Free',
                    term: false,
                    text: 'Get help as needed.',
                    icon: ''
                },
                {
                    priceText: '',
                    price: 'Free',
                    term: false,
                    text: 'Get 6 months to file.',
                    icon: ''
                },
                {
                    priceText: '',
                    price: 'Free',
                    term: false,
                    text: 'Access to tax experts.',
                    icon: ''
                },
                {
                    priceText: '',
                    price: 'Free',
                    term: false,
                    text: 'Empowering tax saving strategies.',
                    icon: ''
                }
            ],
            subFields: [
                {
                    name: 'priceText',
                    type: 'string'
                },
                {
                    name: 'price',
                    type: 'string'
                },
                {
                    name: 'term',
                    type: 'boolean'
                },
                {
                    name: 'text',
                    type: 'string'
                },
                {
                    name: 'icon',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                    defaultValue:
                        'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
                }
            ]
        },
        {
            type: 'list',
            name: 'premiumPackage',
            defaultValue: [
                {
                    priceText: '',
                    price: '$59',
                    term: false,
                    text: 'for a simple tax return.',
                    icon: ''
                },
                {
                    priceText: '',
                    price: '$49',
                    term: false,
                    text: 'per state.',
                    icon: ''
                },
                {
                    priceText: '',
                    price: '$59',
                    term: false,
                    text: 'Available as an upsell.',
                    icon: ''
                },
                {
                    priceText: '',
                    price: 'FREE',
                    term: false,
                    text: 'Get 6 months to file.',
                    icon: ''
                },
                {
                    priceText: '',
                    price: '',
                    term: false,
                    text: 'Limited',
                    icon: iconDollar
                },
                {
                    priceText: '',
                    price: '',
                    term: false,
                    text: 'Not offered',
                    icon: iconNotOffered
                }
            ],
            subFields: [
                {
                    name: 'priceText',
                    type: 'string'
                },
                {
                    name: 'term',
                    type: 'boolean'
                },
                {
                    name: 'price',
                    type: 'string'
                },
                {
                    name: 'text',
                    type: 'string'
                },
                {
                    name: 'icon',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                    defaultValue:
                        'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
                }
            ]
        }
    ]
});
