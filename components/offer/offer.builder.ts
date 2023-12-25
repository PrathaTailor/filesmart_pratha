import { Builder } from '@builder.io/react'
import { Offer } from './Offer'
import iconFileSmart from '../../images/icons/icon-file-smart.svg'
import sign from '../../images/icons/sign-samantha.png'
import iconArrow from '../../images/icons/icon-arrow-right.png'
import fileSmartExpert from '../../images/assets/filesmart-expert.png'
import iconAllExclusive from '../../images/icons/icon-inclusive-check.png'
import iconAskOurTeam from '../../images/icons/icon-ask-our-team.svg'
import iconGetAccess from '../../images/icons/icon-get-access.svg'
import iconHowToSave from '../../images/icons/icon-how-to-save.svg'
import iconAllInclusive from '../../images/icons/icon-all-inclusive.png';

Builder.registerComponent(Offer, {
  name: 'co09 Offer',
  inputs: [
    {
      type: 'object',
      name: 'offers',
      defaultValue: {
        title: 'All-Inclusive',
        subTitle: 'For All Your 2022 Tax Needs',
        iconAllInclusive: iconAllInclusive,
        additionalText: 'get an <b>additional 6 months to file!</b>',
        pricingDescription: 'Starting At Only',
        pricing: '9.95',
        buttonText: 'Get Started',
        buttonSmallText: 'No hidden fees',
        featureListTitle: 'PLUS:',
        buttonSymbol: iconArrow,
        expertImage: fileSmartExpert,
        expertLogoText: 'FileSmart&trade; <span>Expert</span>',
        expertSign: sign,
        expert: 'Samantha G., J.D.',
        expertLogo: iconFileSmart,
      },
      subFields: [
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'subTitle',
          type: 'string',
        },
        {
          name: 'iconAllInclusive',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name: 'additionalText',
          type: 'richText'
        },
        {
          name: 'pricingDescription',
          type: 'string'
        },
        {
          name: 'pricing',
          type: 'number'
        },
        {
          name: 'buttonText',
          type: 'string',
        },
        {
          name: 'buttonSmallText',
          type: 'string'
        },
        {
          name: 'buttonSymbol',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name: 'featureListTitle',
          type: 'string',
        },
        {
          name: 'productBanner',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name: 'expertImage',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name: 'expertLogoText',
          type: 'richText',
        },
        {
          name: 'expertSign',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name: 'expert',
          type: 'string',
        },
        {
          name: 'expertLogo',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
      ],
    },
    {
      type: 'list',
      name: 'benefits',
      defaultValue: [
        {
          title: 'Federal Return',
          image: iconAllExclusive,
        },
        {
          title: 'State Return',
          image: iconAllExclusive,
        },
        {
          title: 'Tax Extension Filing',
          image: iconAllExclusive,
        },
        {
          title: 'Expert Help',
          image: iconAllExclusive,
        },
      ],
      subFields: [
        {
          name: 'title',
          type: 'richText',
        },
        {
          name: 'image',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
      ],
    },
    {
      type: 'list',
      name: 'features',
      defaultValue: [
        {
          title:
            '<p><b>Ask our team</b> of tax experts up to 5 questions per month</p>',
          image: iconAskOurTeam,
        },
        {
          title: '<p><b>Get access</b> to our library of tax and financial courses</p>',
          image: iconGetAccess,
        },
        {
          title:
            '<p><b>Learn how to save</b> more money…all year round! <br><b>(not just at tax time)</b></p>',
          image: iconHowToSave,
        },
      ],
      subFields: [
        {
          name: 'title',
          type: 'richText',
        },
        {
          name: 'image',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
      ],
    },
  ],
})
