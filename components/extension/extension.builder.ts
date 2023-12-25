import { Builder } from '@builder.io/react';
import { Extension } from './Extension';

Builder.registerComponent(Extension, {
    name: 'pa27 Extension',
    inputs: [
        {
            type: 'object',
            name: 'extensionDetails',
            defaultValue: {
                title: 'Extend Your Tax Return through <span>October 15th</span>',
                subTitle: 'File Your 6-Month IRS Federal Tax Extension Online In Just A Few Minutes Today!'
            },
            subFields: [
                {
                    name: 'title',
                    type: 'richText'
                },
                {
                    name: 'subTitle',
                    type: 'richText'
                }
            ]
        }
    ]
});
