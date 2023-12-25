import { Builder } from '@builder.io/react'
import SmallBanner from './SmallBanner'
import iconTaxFiling from '../../../images/icons/icon-tax-filing-blue.png'
import iconArrow from '../../../images/icons/icon-arrow-white.png'

Builder.registerComponent(SmallBanner, {
  name: 'co52 Small Banner',
  inputs: [
    {
      type: 'object',
      name: 'taxDeadlineDetails',
      defaultValue: {
        taxFilingDesc:
          'The Tax Filing Deadline is <span>April 18, 2023</span>. Do you need more time?',
        iconTaxFiling: iconTaxFiling,
        btnTextLg:
          ' Click here and get an <label>immediate tax extension</label>',
        btnTextSm: 'Get 6 additional months to file!',
        iconArrow: iconArrow,
      },
      subFields: [
        {
          name: 'taxFilingDesc',
          type: 'richText',
        },
        {
          name: 'iconTaxFiling',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name: 'btnTextLg',
          type: 'richText',
        },
        {
          name: 'btnTextSm',
          type: 'string',
        },
        {
          name: 'iconArrow',
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
