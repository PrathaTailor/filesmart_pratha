import { Builder } from '@builder.io/react';
import { Products } from './Products';
import iconProductRefund from '../../images/assets/product-refund.png';
import iconSmallProductRefund from '../../images/assets/small-product-refund.webp';
import iconRatingBadge from '../../images/assets/rating-badge.png';
import iconArrowRight from '../../images/icons/icon-arrow-right.svg';

Builder.registerComponent(Products, {
    name: 'co06 Product',
    inputs: [
        {
            type: 'list',
            name: 'services',
            defaultValue: [
                {
                    serviceTitle: 'Join <span>FileSmart<sup>™</sup></span>',
                    serviceDescription:
                        'Discover just how easy it is to get started and ensure your tax needs are covered all year round.'
                },
                {
                    serviceTitle: 'Get Year-Round Tax Services',
                    serviceDescription:
                        'Online filing with expert help (including state return), tax extension, and post-filing support. '
                },
                {
                    serviceTitle: 'Save Money & Stay Protected',
                    serviceDescription:
                        'Reduce your tax liability while keeping yourself prepared and protected all year round.'
                }
            ],
            subFields: [
                {
                    name: 'serviceTitle',
                    type: 'richText'
                },
                {
                    name: 'serviceDescription',
                    type: 'richText'
                }
            ]
        },
        {
            type: 'object',
            name: 'products',
            defaultValue: {
                title: 'Are You Ready To <span style="color: rgb(15, 30, 255);">FileSmart</span><sup>TM</sup>?',
                subTitle: 'Switch to the <u>all-inclusive</u> way to file your taxes. ',
                note: '*For illustrative purposes only',
                buttonMainText: 'Get Started',
                buttonSubText: 'No hidden fees',
                productBanner: iconProductRefund,
                smallProductBanner: iconSmallProductRefund,
                productBadge: iconRatingBadge,
                buttonIcon: iconArrowRight
            },
            subFields: [
                {
                    name: 'title',
                    type: 'richText'
                },
                {
                    name: 'subTitle',
                    type: 'richText'
                },
                {
                    name: 'note',
                    type: 'string'
                },
                {
                    name: 'buttonMainText',
                    type: 'string'
                },
                {
                    name: 'buttonSubText',
                    type: 'string'
                },
                {
                    name: 'productBanner',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                    defaultValue:
                        'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
                },
                {
                    name: 'smallProductBanner',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                    defaultValue:
                        'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
                },
                {
                    name: 'productBadge',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                    defaultValue:
                        'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
                },
                {
                    name: 'buttonIcon',
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
