import { Builder } from '@builder.io/react'
import { Cta } from './Cta'
import iconArrow from '../../images/icons/icon-arrow-right.png'

Builder.registerComponent(Cta, {
  name: 'co14 Content CTA',
  inputs: [
    {
      type: 'object',
      name: 'ctaDetails',
      defaultValue: {
        title: 'Finally, an Affordable and Transparent Tax Filing Company',
        subTitle:
          'The stress-free way to get your taxes done in a way that’s easy on you and your wallet.',
        buttonSymbol: iconArrow,
        buttonText: 'Get Started',
        buttonSmallText: 'File your taxes the Smart Way',
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
          name: 'buttonSymbol',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name: 'buttonText',
          type: 'string',
        },
        {
          name: 'buttonSmallText',
          type: 'string',
        },
      ],
    },
  ],
})
