import { Builder } from '@builder.io/react';
import { QuizIntro } from './QuizIntro';
import iconArrow from '../../../images/icons/icon-arrow-right.png';
import quizBAnner from '../../../images/assets/quiz-banner.png';

Builder.registerComponent(QuizIntro, {
    name: 'pa37 Quiz Intro',
    inputs: [
        {
            type: 'object',
            name: 'quizIntro',
            defaultValue: {
                title: 'Find Your Deductions and Save on Taxes',
                subTitle: `Let's get started!`,
                btnText: 'I Want More Details',
                iconArrow: iconArrow,
                backgroundImage: quizBAnner,
                backgroundImageTitle:
                    "In order to help you find the deductions you're eligible for and save the most money on your taxes, we need to ask you a few questions",
                backgroundImageSubtitle: "Don't worry: It takes less than 30 seconds (really, we timed it!)"
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
                },
                {
                    name: 'backgroundImage',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                    defaultValue:
                        'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
                },
                {
                    name: 'backgroundImageTitle',
                    type: 'string'
                },
                {
                    name: 'backgroundImageSubtitle',
                    type: 'string'
                }
            ]
        }
    ]
});
