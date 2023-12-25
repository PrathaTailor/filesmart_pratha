import { Builder } from '@builder.io/react';
import { Info } from './Info';
import iconStateReturn from '../../../images/icons/icon-info-federal-state-return.png';
import iconMilitarySecurity from '../../../images/icons/icon-info-military-grade-security.png';
import iconExtensionFiling from '../../../images/icons/icon-info-tax-extension-filing.png';
import iconTransparent from '../../../images/icons/icon-transparent-pricing.png';

Builder.registerComponent(Info, {
    name: 'co66 Info Section',
    inputs: [
        {
            type: 'richText',
            name: 'infoDescWrapper',
            defaultValue:
                'Whether you’re a full-time employee, self-employed, a gig-economy worker, a business owner, or a retiree, FileSmart<sup>TM</sup> is designed to work with all financial situations. '
        },
        {
            type: 'list',
            name: 'infoList',
            defaultValue: [
                {
                    icon: iconStateReturn,
                    title: 'Federal & State Return Included',
                    content:
                        'With our award-winning online tax preparation service, you can file both Federal and State tax returns in the most straightforward, least expensive, and most efficient way possible.'
                },
                {
                    icon: iconExtensionFiling,
                    title: 'Tax Extension Filing',
                    content:
                        'Failure to file your return can result in unmanageable IRS penalties, and rushing to file could result in overpaying taxes. Filing an extension eliminates costly penalties and gives you additional time to prepare and get it right.'
                },
                {
                    icon: iconMilitarySecurity,
                    title: 'Military Grade Security',
                    content:
                        'We protect your data as if it were our own. Our data storage processes utilize AES-256 encryption to ensure that all your data is 100% secure. We do not share customer data with unaffiliated third parties as specified in our privacy policy.'
                },
                {
                    icon: iconTransparent,
                    title: 'Transparent Pricing',
                    content:
                        'Whether your returns are simple or complex, our pricing is all-inclusive, so you won&apos;t be surprised by hidden charges. What you see is what you get. It&apos;s just that simple.'
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
                    name: 'title',
                    type: 'string'
                },
                {
                    name: 'content',
                    type: 'richText'
                }
            ]
        }
    ]
});
