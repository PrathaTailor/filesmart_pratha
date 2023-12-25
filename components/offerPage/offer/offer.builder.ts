import { Builder } from '@builder.io/react';
import Offer from './Offer';
import iconCheck from '../../../images/icons/icon-round-check.png';
import bagdeCheck from '../../../images/icons/icon-green-check.svg';
import warnIcon from '../../../images/icons/icon-warn.svg';
import dangerIcon from '../../../images/icons/icon-danger.svg';
import ImageObj from '@utils/interfaces';
import { productSkuEnum } from '@utils/apiMethods';

Builder.registerComponent(Offer, {
    name: 'Offer',
    inputs: [
        {
            type: 'object',
            name: 'productConfig',
            defaultValue: {
                extPayMonthlyProduct: 'pr40',
                ext6MothsProduct: 'pr42',
                noExtReturnOnlyProduct: 'pr43',
                noExtPayMonthlyProduct: 'pr27'
            },
            subFields: [
                {
                    name: 'extPayMonthlyProduct',
                    friendlyName: 'Wants Extension Pay Monthly Product',
                    type: 'string',
                    enum: productSkuEnum(),
                    defaultValue: 'pr40',
                    required: true
                },
                {
                    name: 'ext6MothsProduct',
                    friendlyName: 'Wants Extension 6 Months Product',
                    type: 'string',
                    enum: productSkuEnum(),
                    defaultValue: 'pr42',
                    required: true
                },
                {
                    name: 'noExtReturnOnlyProduct',
                    friendlyName: 'No Extension Return Only Product',
                    type: 'string',
                    enum: productSkuEnum(),
                    defaultValue: 'pr43',
                    required: true
                },
                {
                    name: 'noExtPayMonthlyProduct',
                    friendlyName: 'No Extension Pay Monthly Product',
                    type: 'string',
                    enum: productSkuEnum(),
                    defaultValue: 'pr27',
                    required: true
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
                    name: '',
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
                counterNoText: 'Until Tax Day <span>WITHOUT</span> an extension',
                expiredText: 'Avoid the penalty! The IRS still accepting extensions',
                counterDays: 'October 17, 2023 00:00:00',
                counterNoDays: 'April 19, 2023 00:00:00',
                counterIcon: iconCheck,
                expiredIcon: dangerIcon
            },
            subFields: [
                {
                    name: 'counterText',
                    type: 'string'
                },
                {
                    name: 'counterNoText',
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
                    name: 'counterNoDays',
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
                limitedPlanTerm: true,
                limitedComment: '<span style="color: rgb(15, 30, 255);">File by October 16th</span>',
                limitedNoPlanTerm: false,
                limitedNoComment: '<span style="color: rgb(15, 30, 255);">File by April 15th</span>',
                inclusivePlanTerm: false,
                inclusiveComment: '<span style="color: rgb(15, 30, 255);">File by October 16th</span>',
                inclusiveNoPlanTerm: true,
                inclusiveNoComment: '<span style="color: rgb(15, 30, 255);">File by October 16th</span>'
            },
            subFields: [
                {
                    name: 'limitedPlanTerm',
                    type: 'boolean'
                },
                {
                    name: 'limitedComment',
                    type: 'richText'
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
                    name: 'inclusivePlanTerm',
                    type: 'boolean'
                },
                {
                    name: 'inclusiveComment',
                    type: 'richText'
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
            type: 'object',
            name: 'noTabDescription',
            defaultValue: {
                description: `<b>This plan does not include an extension.</b> We only recommend this plan if you're sure you'll be ready to file by April 18th.`
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

export interface TabDetails {
    titleOne: string;
    subtitleOne: string;
    titleTwo: string;
    subtitleTwo: string;
}
export interface ProductConfig {
    extPayMonthlyProduct: string;
    ext6MothsProduct: string;
    noExtReturnOnlyProduct: string;
    noExtPayMonthlyProduct: string;
}
export interface Detail {
    counterText: string;
    counterNoText: string;
    expiredText: string;
    counterDays: number;
    counterNoDays: number;
    counterIcon: ImageObj;
    expiredIcon: ImageObj;
}
export interface TitleDetails {
    title: string;
    subTitle: string;
    titleNoTab: string;
    subTitleNoTab: string;
}
export interface CardTitle {
    limitedHeading: string;
    inclusiveHeading: string;
    limitedNoHeading: string;
    inclusiveNoHeading: string;
    limitedTitle: string;
    inclusiveTitle: string;
    limitedNoTitle: string;
    inclusiveNoTitle: string;
}
export interface CardPriceDetails {
    limitedPlanTerm: boolean;
    limitedComment: string;
    limitedNoPlanTerm: boolean;
    limitedNoComment: string;
    inclusivePlanTerm: boolean;
    inclusiveComment: string;
    inclusiveNoPlanTerm: boolean;
    inclusiveNoComment: string;
}
export interface BadgeDetails {
    image: ImageObj;
    imageNoWarn: ImageObj;
    badgeLimitedTitle: string;
    badgeLimitedSubtitle: string;
    badgeNoTabTitle: string;
    badgeInclusiveTitle: string;
    badgeInclusiveSubtitle: string;
    badgeNoTabSubtitle: string;
    btnLimited: string;
    btnInclusive: string;
}
export interface LimitedplanListDetails {
    title: string;
}
export interface InclusiveplanListDetails {
    title: string;
}
export interface NoTabDescription {
    description: string;
}
export interface Title {
    title: string;
    subTitle: string;
}

export interface OfferPriceDetails {
    listLabel: string;
    listPrice: number;
    listDesc: string;
}
export interface FreeOfferBox {
    sign: string;
    price: number;
    priceDesc: string;
    tagline: string;
}

export interface offerHeadingDetails {
    title: string;
    lessthenThreeDayForYesTitle: string;
    pastDeadlineForYesTitle: string;
    lessthenThreeDayForNoTitle: string;
    pastDeadlineForNoTitle: string;
    lessthenThreeDayForYesSubTitle: string;
    pastDeadlineForYesSubTitle: string;
    lessthenThreeDayForNoSubTitle: string;
    pastDeadlineForNoSubTitle: string;
    subTitle: string;
    smallSubTitle: string;
}
