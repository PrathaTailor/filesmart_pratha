import { Builder } from '@builder.io/react';
import { Step2 } from './Step2';
import iconWatch from '../../../../images/icons/icon-yellow-watch.png';
import quizBanner from '../../../../images/assets/quiz-step-1-banner.png';
import iconArrow from '../../../../images/icons/icon-arrow-right.png';

Builder.registerComponent(Step2, {
    name: 'pa39 Quiz Step 2',
    inputs: [
        {
            type: 'list',
            name: 'quizStepOneList',
            defaultValue: [
                {
                    label: 'I pay dependent care expenses while I work'
                },
                {
                    label: 'I have depreciable rental property'
                },
                {
                    label: 'I pay health insurance premiumss'
                },
                {
                    label: 'I have expenses for business use of my home'
                },
                {
                    label: 'I have expenses related to self-employment'
                },
                {
                    label: 'I don\'t have any of these expenses'
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
                title: "IRS failure to file <span class='whiteBold'>penalty</span> can be <span class='yellowText'>up to 25%</span> of unpaid taxes.",
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
                }
            ]
        },
        {
            type: 'object',
            name: 'quizStepOne',
            defaultValue: {
                title: 'Do you have any of these expenses?',
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
