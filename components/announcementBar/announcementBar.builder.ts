import { Builder } from '@builder.io/react';
import { AnnouncementBar } from './AnnouncementBar';
import { target } from '@builder.io/react/dist/types/lib/on-change';

Builder.registerComponent(AnnouncementBar, {
    name: 'co35 Sticky Announcement Bar',
    inputs: [
        {
            type: 'object',
            name: 'announcementBarDetails',
            defaultValue: {
                titleWExt: 'Only {{x}} days and {{y}} minutes to the tax deadline. File your return or',
                titleWOExt: `{{x}} days left to file! Click here for a 6 month extension. Only $29.95`,
                btnTextWExt: 'File an Extension',
                btnTextWOExt: 'Get an Extension',
                btnLink: '/registration',
                targetDate: 'April 19, 2023 00:00:00',
                withExtension: true
            },
            subFields: [
                {
                    name: 'titleWExt',
                    type: 'string'
                },
                {
                    name: 'titleWOExt',
                    type: 'string'
                },
                {
                    name: 'btnTextWExt',
                    type: 'string'
                },
                {
                    name: 'btnTextWOExt',
                    type: 'string'
                },
                {
                    name: 'btnLink',
                    type: 'string'
                },
                {
                    name: 'targetDate',
                    type: 'date'
                },
                {
                    name: 'withExtension',
                    type: 'boolean'
                }
            ]
        }
    ]
});
