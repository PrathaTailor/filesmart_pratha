import { Builder } from '@builder.io/react';
import iconCheck from '../../images/icons/icon-round-check.png';
import bagdeCheck from '../../images/icons/icon-green-check.svg';
import warnIcon from '../../images/icons/icon-warn.svg';
import dangerIcon from '../../images/icons/icon-danger.svg';
import OfferStack from './OfferStacked';

Builder.registerComponent(OfferStack, {
    name: 'Offer-Stacked',
    inputs: [
        {
            type: 'object',
            name: 'offerHeadingDetails',
            defaultValue: {
                title: 'According to the IRS, more than 1 billion dollars in tax deductions are <span>missed each year</span>!',
                lessthenThreeDayForYesTitle:
                    '<span>Only 2 days left to tax deadline. </span> Don’t panic. Don’t overpay. Extend Your Tax Return through October 16th',
                pastDeadlineForYesTitle:
                    'The IRS is still accepting extensions after the deadline. File an extension now and avoid up to 25% in penalties',
                lessthenThreeDayForNoTitle:
                    'According to the IRS, more than 1 billion dollars in tax deductions are <span>missed each year! </span>',
                pastDeadlineForNoTitle:
                    'The IRS is still accepting extensions after the deadline. File an extension now and avoid up to 25% in penalties',
                lessthenThreeDayForYesSubTitle: 'File a better return with more time',
                pastDeadlineForYesSubTitle:
                    'Pay your taxes ASAP if you haven’t and use the extra time of the extension to file a better return and reduce taxes owed.',
                lessthenThreeDayForNoSubTitle: 'Could you benefit by getting a <span>tax extension?</span>',
                pastDeadlineForNoSubTitle:
                    'Pay your taxes ASAP if you haven’t and use the extra time of the extension to file a better return and reduce taxes owed.',
                subTitle:
                    'Don’t miss out on credits and deductions you’re owed - <span>let us help you find all the money you’re entitled to.</span> If you don’t have enough time to finish, we can help you get a tax extension so you can take the time to make sure you <span>get it right.</span>',
                smallSubTitle: 'Could you benefit by getting a <b>tax extension?</b>'
            },
            subFields: [
                {
                    name: 'title',
                    type: 'richText'
                },
                {
                    name: 'lessthenThreeDayForYesTitle',
                    type: 'richText'
                },
                {
                    name: 'pastDeadlineForYesTitle',
                    type: 'richText'
                },
                {
                    name: 'lessthenThreeDayForNoTitle',
                    type: 'richText'
                },
                {
                    name: 'pastDeadlineForNoTitle',
                    type: 'richText'
                },
                {
                    name: 'lessthenThreeDayForYesSubTitle',
                    type: 'richText'
                },
                {
                    name: 'pastDeadlineForYesSubTitle',
                    type: 'richText'
                },
                {
                    name: 'lessthenThreeDayForNoSubTitle',
                    type: 'richText'
                },
                {
                    name: 'pastDeadlineForNoSubTitle',
                    type: 'richText'
                },
                {
                    name: 'subTitle',
                    type: 'richText'
                },
                {
                    name: 'smallSubTitle',
                    type: 'richText'
                }
            ]
        },
        {
            type: 'object',
            name: 'tabDetails',
            defaultValue: {
                titleOne: 'YES!',
                subtitleOne: 'I want an extension',
                titleTwo: 'NO!',
                subtitleTwo: `I'm ready to file now`
            },
            subFields: [
                {
                    name: 'titleOne',
                    type: 'string'
                },
                {
                    name: 'subtitleOne',
                    type: 'string'
                },
                {
                    name: 'titleTwo',
                    type: 'string'
                },
                {
                    name: 'subtitleTwo',
                    type: 'string'
                }
            ]
        },
        {
            type: 'object',
            name: 'details',
            defaultValue: {
                counterText: 'Until Tax Day <span>WITH</span> an extension',
                counterTextTwo: 'Until Tax Day <span>WITHOUT</span> an extension',
                expiredText: 'Avoid the penalty! The IRS still accepting extensions',
                counterDays: 'October 16, 2023 00:00:00',
                counterDaysTwo: 'April 18, 2023 00:00:00',
                counterIcon: iconCheck,
                expiredIcon: dangerIcon
            },
            subFields: [
                {
                    name: 'counterText',
                    type: 'string'
                },
                {
                    name: 'counterTextTwo',
                    type: 'string'
                },
                {
                    name: 'expiredText',
                    type: 'string'
                },
                {
                    name: 'counterDays',
                    type: 'date'
                },
                {
                    name: 'counterDaysTwo',
                    type: 'date'
                },
                {
                    name: 'counterIcon',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                    defaultValue:
                        'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
                },
                {
                    name: 'expiredIcon',
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
            name: 'titleDetails',
            defaultValue: {
                title: 'File today or Instantly Get 6 Additional Months to File, No Questions Asked.',
                subTitle:
                    'File better with more, <span>FileSmart<sup>TM</sup></span> & be sure to get it right, no matter what your tax situation is...so, <b><u>how much time do you need?</u></b>',
                titleNoTab: 'Ok! Let’s get filing!',
                subTitleNoTab: 'Choose the plan that best suits your needs, and get ready to <span>FileSmart™️</span>.'
            },
            subFields: [
                {
                    name: 'title',
                    type: 'string'
                },
                {
                    name: 'subTitle',
                    type: 'richText'
                },
                {
                    name: 'titleNoTab',
                    type: 'string'
                },
                {
                    name: 'subTitleNoTab',
                    type: 'richText'
                }
            ]
        },
        {
            type: 'object',
            name: 'cardTitle',
            defaultValue: {
                limitedHeading: 'PAY MONTHLY',
                inclusiveHeading: '6-MONTH PLAN',
                limitedNoHeading: 'RETURN ONLY',
                inclusiveNoHeading: 'PAY MONTHLY',
                limitedTitle: 'I’m ready to file today <br/><span>(or will be within 5 months)</span>',
                inclusiveTitle: 'I’d like the maximum time to file',
                limitedNoTitle: 'I’m ready to<br/> file now',
                inclusiveNoTitle: 'I need<br/> more time'
            },
            subFields: [
                {
                    name: 'limitedHeading',
                    type: 'string'
                },
                {
                    name: 'inclusiveHeading',
                    type: 'string'
                },
                {
                    name: 'limitedTitle',
                    type: 'richText'
                },
                {
                    name: 'inclusiveTitle',
                    type: 'richText'
                }
            ]
        },
        {
            type: 'object',
            name: 'planPrice',
            defaultValue: {
                limitedPlanPrice: '9',
                limitedPlanDecimal: '.95',
                limitedPlanTerm: true,
                limitedComment: '<span style="color: rgb(15, 30, 255);">File by October 16th</span>',
                limitedNoPlanPrice: '29',
                limitedNoPlanDecimal: '.95',
                limitedNoPlanTerm: false,
                limitedNoComment: '<span style="color: rgb(15, 30, 255);">File by April 15th</span>',
                inclusivePlanPrice: '59',
                inclusivePlanDecimal: '.95',
                inclusivePlanTerm: false,
                inclusiveComment: '<span style="color: rgb(15, 30, 255);">File by October 16th</span>',
                inclusiveNoPlanPrice: '9',
                inclusiveNoPlanDecimal: '.95',
                inclusiveNoPlanTerm: true,
                inclusiveNoComment: '<span style="color: rgb(15, 30, 255);">File by October 16th</span>'
            },
            subFields: [
                {
                    name: 'limitedPlanPrice',
                    type: 'string'
                },
                {
                    name: 'limitedPlanDecimal',
                    type: 'string'
                },
                {
                    name: 'limitedPlanTerm',
                    type: 'boolean'
                },
                {
                    name: 'limitedComment',
                    type: 'richText'
                },
                {
                    name: 'limitedNoPlanPrice',
                    type: 'string'
                },
                {
                    name: 'limitedNoPlanDecimal',
                    type: 'string'
                },
                {
                    name: 'limitedNoPlanTerm',
                    type: 'boolean'
                },
                {
                    name: 'limitedNoComment',
                    type: 'string'
                },
                {
                    name: 'inclusivePlanPrice',
                    type: 'string'
                },
                {
                    name: 'inclusivePlanDecimal',
                    type: 'string'
                },
                {
                    name: 'inclusivePlanTerm',
                    type: 'boolean'
                },
                {
                    name: 'inclusiveComment',
                    type: 'richText'
                },
                {
                    name: 'inclusiveNoPlanDecimal',
                    type: 'string'
                },
                {
                    name: 'inclusiveNoPlanTerm',
                    type: 'boolean'
                },
                {
                    name: 'inclusiveNoComment',
                    type: 'string'
                },
                {
                    name: 'inclusivePlanTerm',
                    type: 'string'
                },
                {
                    name: 'inclusiveComment',
                    type: 'richText'
                },
                {
                    name: 'inclusiveNoPlanDecimal',
                    type: 'string'
                },
                {
                    name: 'inclusiveNoPlanTerm',
                    type: 'boolean'
                },
                {
                    name: 'inclusiveNoComment',
                    type: 'string'
                }
            ]
        },
        {
            type: 'object',
            name: 'badgeDetails',
            defaultValue: {
                image: bagdeCheck,
                imageNoWarn: warnIcon,
                badgeLimitedTitle: 'All-Inclusive',
                badgeLimitedSubtitle: '<b>Pay-as-You-Go</b> Plan:',
                badgeNoTabTitle: 'Limited Access Plan',
                badgeInclusiveTitle: 'All-Inclusive',
                badgeInclusiveSubtitle: '<b>One-time</b> Payment:',
                badgeNoTabSubtitle: '<b>Monthly</b> Plan:',
                btnLimited: 'Get Started',
                linkLimited: '/registration',
                btnInclusive: 'Get Started',
                linkInclusive: '/registration'
            },
            subFields: [
                {
                    name: 'image',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                    defaultValue:
                        'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
                },
                {
                    name: 'imageNoWarn',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                    defaultValue:
                        'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
                },
                {
                    name: 'badgeLimitedTitle',
                    type: 'string'
                },
                {
                    name: 'badgeLimitedSubtitle',
                    type: 'richText'
                },
                {
                    name: 'badgeNoTabTitle',
                    type: 'string'
                },
                {
                    name: 'badgeInclusiveTitle',
                    type: 'string'
                },
                {
                    name: 'badgeInclusiveSubtitle',
                    type: 'richText'
                },
                {
                    name: 'badgeNoTabSubtitle',
                    type: 'richText'
                },
                {
                    name: 'btnLimited',
                    type: 'string'
                },
                {
                    name: 'linkLimited',
                    type: 'string'
                },
                {
                    name: 'btnInclusive',
                    type: 'string'
                },
                {
                    name: 'linkInclusive',
                    type: 'string'
                }
            ]
        },
        {
            type: 'list',
            name: 'limitedplanListDetails',
            defaultValue: [
                {
                    title: 'Pay a small monthly fee'
                },
                {
                    title: 'Federal Return'
                },
                {
                    title: 'State Return'
                },
                {
                    title: 'Tax Extension'
                },
                {
                    title: 'Expert Help'
                },
                {
                    title: 'Monthly IRS Inquiry Protection'
                },
                {
                    title: 'Access to Online Tax Courses'
                }
            ],
            subFields: [
                {
                    name: 'title',
                    type: 'string'
                }
            ]
        },
        {
            type: 'list',
            name: 'inclusiveplanListDetails',
            defaultValue: [
                {
                    title: 'Federal Return'
                },
                {
                    title: 'State Return'
                },
                {
                    title: 'Tax Extension'
                },
                {
                    title: 'Expert Help'
                },
                {
                    title: '6-Month IRS Inquiry Protection'
                },
                {
                    title: 'Education to Minimize Tax'
                }
            ],
            subFields: [
                {
                    name: 'title',
                    type: 'string'
                }
            ]
        },
        {
            type: 'text',
            name: 'noTabDescription',
            defaultValue: {
                description: `<span>This plan does not include an extension.</span> We only recommend this plan if you're sure you'll be ready to file by October 16.`
            },
            subFields: [
                {
                    name: 'description',
                    type: 'richText'
                }
            ]
        },
        {
            type: 'object',
            name: 'offerBoxTitle',
            defaultValue: {
                title: 'COMPARE AND SAVE',
                subTitle: 'This is How Much Taxpayers Spend with the <span>“Free Guys”</span>'
            },
            subFields: [
                {
                    name: 'title',
                    type: 'string'
                },
                {
                    name: 'subTitle',
                    type: 'richtext'
                }
            ]
        },
        {
            type: 'list',
            name: 'offerPriceDetails',
            defaultValue: [
                {
                    listLabel: 'Federal Return',
                    listPrice: 59,
                    listDesc: 'for a simple tax return.'
                },
                {
                    listLabel: 'State Return',
                    listPrice: 49,
                    listDesc: 'per state.'
                },
                {
                    listLabel: 'Post-Filing Support',
                    listPrice: 59,
                    listDesc: 'Available as an upsell.'
                }
            ],
            subFields: [
                {
                    name: 'listLabel',
                    type: 'string'
                },
                {
                    name: 'listPrice',
                    type: 'number'
                },
                {
                    name: 'listDesc',
                    type: 'string'
                }
            ]
        },
        {
            type: 'object',
            name: 'freeOfferBox',
            defaultValue: {
                sign: '$',
                price: 119,
                priceDesc: 'or more',
                tagline: `And that's only for a <span>simple</span> return!`
            },
            subFields: [
                {
                    name: 'sign',
                    type: 'string'
                },
                {
                    name: 'price',
                    type: 'number'
                },
                {
                    name: 'priceDesc',
                    type: 'string'
                },
                {
                    name: 'tagline',
                    type: 'richtext'
                }
            ]
        },
        {
            type: 'object',
            name: 'offerHeadingDetails',
            defaultValue: {
                title: 'According to the IRS, more than 1 billion dollars in tax deductions are <span>missed each year</span>!',
                lessthenThreeDayForYesTitle:
                    '<span>Only 2 days left to tax deadline. </span> Don’t panic. Don’t overpay. Extend Your Tax Return through October 16th',
                pastDeadlineForYesTitle:
                    'The IRS is still accepting extensions after the deadline. File an extension now and avoid up to 25% in penalties',
                lessthenThreeDayForNoTitle:
                    'According to the IRS, more than 1 billion dollars in tax deductions are <span>missed each year! </span>',
                pastDeadlineForNoTitle:
                    'The IRS is still accepting extensions after the deadline. File an extension now and avoid up to 25% in penalties',
                lessthenThreeDayForYesSubTitle: 'File a better return with more time',
                pastDeadlineForYesSubTitle:
                    'Pay your taxes ASAP if you haven’t and use the extra time of the extension to file a better return and reduce taxes owed.',
                lessthenThreeDayForNoSubTitle: 'Could you benefit by getting a <span>tax extension?</span>',
                pastDeadlineForNoSubTitle:
                    'Pay your taxes ASAP if you haven’t and use the extra time of the extension to file a better return and reduce taxes owed.',
                subTitle:
                    'Don’t miss out on credits and deductions you’re owed - <span>let us help you find all the money you’re entitled to.</span> If you don’t have enough time to finish, we can help you get a tax extension so you can take the time to make sure you <span>get it right.</span>',
                smallSubTitle: 'Could you benefit by getting a <b>tax extension?</b>'
            },
            subFields: [
                {
                    name: 'title',
                    type: 'richText'
                },
                {
                    name: 'lessthenThreeDayForYesTitle',
                    type: 'richText'
                },
                {
                    name: 'pastDeadlineForYesTitle',
                    type: 'richText'
                },
                {
                    name: 'lessthenThreeDayForNoTitle',
                    type: 'richText'
                },
                {
                    name: 'pastDeadlineForNoTitle',
                    type: 'richText'
                },
                {
                    name: 'lessthenThreeDayForYesSubTitle',
                    type: 'richText'
                },
                {
                    name: 'pastDeadlineForYesSubTitle',
                    type: 'richText'
                },
                {
                    name: 'lessthenThreeDayForNoSubTitle',
                    type: 'richText'
                },
                {
                    name: 'pastDeadlineForNoSubTitle',
                    type: 'richText'
                },
                {
                    name: 'subTitle',
                    type: 'richText'
                },
                {
                    name: 'smallSubTitle',
                    type: 'richText'
                }
            ]
        }
    ]
});
