import { Builder } from '@builder.io/react';
import { Step3 } from './Step3';
import iconWatch from '../../../../images/icons/icon-yellow-watch.png';
import quizBanner from '../../../../images/assets/quiz-step-3-banner.png';

Builder.registerComponent(Step3, {
    name: 'pa41 Quiz Step 3',
    inputs: [
        {
            type: 'object',
            name: 'stepThreeBannerContent',
            defaultValue: {
                quizBanner: quizBanner,
                title: "The <span class='yellowText'>average</span> <span class='whiteBold'> tax refund </span> in 2022 was <span class='greenText'>$3,337</span>",
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
