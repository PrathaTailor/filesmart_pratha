import { Builder } from '@builder.io/react';
import { Step1 } from './Step1';
import iconWatch from '../../../../images/icons/icon-yellow-watch.png';
import quizBanner from '../../../../images/assets/quiz-step-1-banner.png';
import iconArrow from '../../../../images/icons/icon-arrow-right.png';

Builder.registerComponent(Step1, {
    name: 'pa38 Quiz Step 1',
    inputs: [
        {
            type: 'list',
            name: 'quizStepOneList',
            defaultValue: [
                {
                    label: 'I’m an employee'
                },
                {
                    label: 'I’m self-employed working at home'
                },
                {
                    label: 'I’m self-employed outside the home'
                },
                {
                    label: 'I have virtual currency or NFT gains'
                },
                {
                    label: 'I have gains from securities (stocks, bonds, mutual funds, etc.)'
                },
                {
                    label: 'I don’t have any of these income sources'
                }
            ],
            subFields: [
                {
                    name: 'label',
                    type: 'string'
                }
            ]
        },
        {
            type: 'object',
            name: 'stepOneBannerContent',
            defaultValue: {
                quizBanner: quizBanner,
                title: "The IRS is <span class='yellowText'>automatically</span> granting a <span class='greenText'>6-month</span> <span class='whiteBold'> filling extension </span> to anyone who asks",
                subTitle: 'Time Until Deadline',
                iconWatch: iconWatch,
                counterDays: 'April 18, 2023 00:00:00'
            },
            subFields: [
                {
                    name: 'quizBanner',
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
                    name: 'subTitle',
                    type: 'string'
                },
                {
                    name: 'iconWatch',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                    defaultValue:
                        'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
                },
                {
                    name: 'counterDays',
                    type: 'date'
                }
            ]
        },
        {
            type: 'object',
            name: 'quizStepOne',
            defaultValue: {
                title: 'What are your income sources?',
                subTitle: `Check all that apply`,
                btnText: 'Next',
                iconArrow: iconArrow
            },
            subFields: [
                {
                    name: 'title',
                    type: 'string'
                },
                {
                    name: 'subTitle',
                    type: 'string'
                },
                {
                    name: 'btnText',
                    type: 'string'
                },
                {
                    name: 'iconArrow',
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
