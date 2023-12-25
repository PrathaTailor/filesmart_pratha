import { Builder } from '@builder.io/react';
import { InfoBox } from './InfoBox';
import iconCheck from '../../../images/icons/icon-infobox-check.png';
import iconPause from '../../../images/icons/icon-infobox-pause.png';

Builder.registerComponent(InfoBox, {
    name: 'co64 Infobox ',
    inputs: [
        {
            type: 'list',
            name: 'infoList',
            defaultValue: [
                {
                    icon: iconCheck,
                    content:
                        '<b>If you’re ready to file on April 18th</b>, FileSmart<sup>TM</sup> provides Federal and State return filing plus year-round support for a fraction of what you’d pay with other online filing services. '
                },
                {
                    icon: iconPause,
                    content:
                        '<b>If you need an additional six months to file</b>, we’ll help you get an extension in under five minutes. The IRS will grant your extension automatically, no questions asked, and you’ll get a confirmation almost instantly'
                }
            ],
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
                    name: 'content',
                    type: 'richText'
                }
            ]
        }
    ]
});
