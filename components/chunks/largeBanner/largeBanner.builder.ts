import { Builder } from '@builder.io/react'
import { LargeBanner } from './LargeBanner'
import banner from '../../../images/assets/c055-Large-Banner.png'
import iconArrowRight from '../../../images/icons/icon-arrow-right-blue.png'

Builder.registerComponent(LargeBanner, {
  name: 'co55 Large Banner',
  inputs: [
    {
      type: 'object',
      name: 'largeBannerDetails',
      defaultValue: {
        link: '',
        banner: banner,
        lgText:
          'Your Business Tax Filing <span>Deadline</span> is Sneaking Up. Do you need more time?',
        btntext: 'Click here and find out ',
        iconArrowRight: iconArrowRight,
      },
      subFields: [
        {
          name: 'link',
          type: 'string',
        },
        {
          name: 'banner',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name: 'lgText',
          type: 'richText',
        },
        {
          name: 'btntext',
          type: 'richText',
        },
        {
          name: 'iconArrowRight',
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
