import { Builder } from '@builder.io/react';
import { CustomerService } from './CustomerService';
import iconSupport from '../../../images/icons/icon-customer-service-support.png';

Builder.registerComponent(CustomerService, {
    name: 'co67 Customer Service',
    inputs: [
        {
            type: 'object',
            name: 'serviceDeatils',
            defaultValue: {
                icon: iconSupport,
                title: 'Year-Round Tax Support',
                contentOne:
                    'At FileSmart, we don’t support you only during tax season but throughout the entire year, helping you make each tax season as stress-free as the last.',
                contentTwo: 'Here are some of the benefits you’ll receive 365 days per year:',
                btnText: 'Get Started',
                btnLink: '/registration'
            },
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
                },
                {
                    name: 'contentOne',
                    type: 'richText'
                },
                {
                    name: 'contentTwo',
                    type: 'richText'
                },
                {
                    name: 'btnText',
                    type: 'string'
                },
                {
                    name: 'btnLink',
                    type: 'string'
                }
            ]
        },
        {
            type: 'list',
            name: 'serviceList',
            defaultValue: [
                {
                    listItem: '<b>Ask an Expert</b> - Ask our team of tax professionals up to five questions per month.'
                },
                {
                    listItem:
                        ' <b>IRS ShieldTM</b> - Respond to IRS letters with the help of our experts with no hourly fees'
                },
                {
                    listItem:
                        '<b>2023 Deduction Finder</b> - A personalized program to help calculate your credits and deductions throughout the year.'
                },
                {
                    listItem:
                        '<b>Online Mini Courses</b> - Our short and easy tax courses help you get to know your way around taxes and eliminate the stress of filing.'
                }
            ],
            subFields: [
                {
                    name: 'listItem',
                    type: 'richText'
                }
            ]
        }
    ]
});
