import { Builder } from '@builder.io/react'
import { OfferPlans } from './OfferPlans'
import bagdeCheck from '../../../images/icons/icon-green-check.svg'

Builder.registerComponent(OfferPlans, {
  name: 'Offer Plans',
  inputs: [
    {
      type: 'object',
      name: 'titleDetails',
      defaultValue: {
        title: 'Instantly Get 6 Months to File, No Questions Asked',
        subTitle: 'File better with more, FileSmart<sup>TM</sup> & be sure to get it right, no matter what your tax situation is...so, <b><u>how much time do you need?</u></b>',
        titleNoTab: 'Ok! Let’s get filing!',
        subTitleNoTab: 'Choose the plan that best suiits your needs below, and get ready to FileSmart™️.'
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
          type: 'string'
        },
      ]
    },
    {
      type: 'object',
      name: 'cardTitle',
      defaultValue: {
        limitedTitle: 'I’m not sure yet',
        inclusiveTitle: 'I need a lot of time'
      },
      subFields: [
        {
          name: 'title',
          type: 'string'
        }
      ]
    },
    {
      type: 'object',
      name: 'planPrice',
      defaultValue: {
        limitedPlanPrice: '9',
        limitedPlanDecimal: '.95',
        limitedPlanTerm: '/mo',
        limitedComment: '<span style="color: rgb(15, 30, 255);">File by October 16th</span>',
        inclusivePlanPrice: '59',
        inclusivePlanDecimal: '.95',
        inclusiveComment: '<span style="color: rgb(15, 30, 255);">File by October 16th</span>'
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
          type: 'string'
        },
        {
          name: 'limitedComment',
          type: 'richText'
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
          name: 'inclusiveComment',
          type: 'richText'
        },

      ]
    },
    {
      type: 'object',
      name: 'badgeDetails',
      defaultValue: {
        image: bagdeCheck,
        badgeLimitedTitle: 'All-Inclusive',
        badgeLimitedSubtitle: '<b>Pay-as-You-Go</b> Plan:',
        badgeInclusiveTitle: 'All-Inclusive',
        badgeInclusiveSubtitle: '<b>One-time</b> Payment:'
      },
      subFields: [
        {
          name: 'image',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name: 'badgeLimitedTitle',
          type: 'string',
        },
        {
          name: 'badgeLimitedSubtitle',
          type: 'richText'
        },
        {
          name: 'badgeInclusiveTitle',
          type: 'string'
        },
        {
          name: 'badgeInclusiveSubtitle',
          type: 'richText'
        },
      ]
    },
    {
      type: 'list',
      name: 'limitedplanListDetails',
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
          title: 'Monthly IRS Inquiry Protection'
        },
        {
          title: 'Education to Minimize Tax'
        },
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
        },
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
        description: `<b>This plan does not include an extension.</b> We only recommend this plan if you're 100% ready to file.`,
      },
      subFields: [
        {
          name: 'description',
          type: 'richText'
        }
      ]
    }
  ]
})