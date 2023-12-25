import { Builder } from '@builder.io/react';
import { Headline } from './Headline';
import banner from '../../../images/assets/co63-Headline-Banner.png';

Builder.registerComponent(Headline, {
    name: 'co63 Headline',
    inputs: [
        {
            type: 'object',
            name: 'headlineDetails',
            defaultValue: {
                title: 'Starting to feel tax-time stress? We’ve got a solution for that.',
                content:
                    ' Don’t pay hefty IRS penalties or more than you owe because you rushed to meet the deadline. Meet <b> FileSmart<sup>TM</sup></b>, the all-inclusive way to file your taxes. ',
                banner: banner,
                btnText: 'Get Started',
                btnLink: '/registration',
                description:
                    'Whether you’re ready to file by the tax deadline or need extra time, we’ve got you covered with <b>transparent pricing</b> and <b>no hidden charges</b>.'
            },
            subFields: [
                {
                    name: 'title',
                    type: 'richText'
                },
                {
                    name: 'content',
                    type: 'richText'
                },
                {
                    name: 'banner',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                    defaultValue:
                        'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
                },
                {
                    name: 'showImage',
                    type: 'boolean'
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
                    name: 'description',
                    type: 'richText'
                }
            ]
        }
    ]
});
