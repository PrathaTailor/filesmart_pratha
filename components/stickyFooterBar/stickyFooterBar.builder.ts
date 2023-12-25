import { Builder } from '@builder.io/react';
import { StickyFooterBar } from './StickyFooterBar';

Builder.registerComponent(StickyFooterBar, {
    name: 'co35 Sticky Footer Bar',
    inputs: [
        {
            type: 'object',
            name: 'stickyFooterDetails',
            defaultValue: {
                text: 'Want to Extend your tax Deadline?',
                btnText: 'Get Started',
                btnLink: '/registration'
            },
            subFields: [
                {
                    name: 'text',
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
        }
    ]
});
