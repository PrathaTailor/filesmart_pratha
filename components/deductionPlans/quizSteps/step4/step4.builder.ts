import { Builder } from '@builder.io/react';
import { Step4 } from './Step4';
import iconWatch from '../../../../images/icons/icon-yellow-watch.png';
import quizBanner from '../../../../images/assets/quiz-step-4-banner.png';

Builder.registerComponent(Step4, {
  name: 'pa40 Quiz Step 4',
  inputs: [
    {
        type: 'object',
        name: 'stepFourBannerContent',
        defaultValue: {
            quizBanner: quizBanner,
            title: "US taxpayers <span class='yellowText'> miss out </span> on <span class='greenText'> up to $1B </span> in <span class='whiteBold'>deductions annually</span>",
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
    }
]
});








// US taxpayers miss out on up to $1B in deductions annually