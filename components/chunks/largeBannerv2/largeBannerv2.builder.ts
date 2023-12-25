import { Builder } from '@builder.io/react'
import { LargeBannerv2 } from './LargeBannerv2'
import banner from '../../../images/assets/c055-Large-Bannerv2.png'
import iconArrowRight from '../../../images/icons/Icon-arrow-right-purple.png'

Builder.registerComponent(LargeBannerv2, {
  name: 'co55 Large Banner v2',
  inputs: [
    {
      type: 'object',
      name: 'largeBannerDetails',
      defaultValue: {
        link: '',
        banner: banner,
        lgText:
          ' The Tax Filing <span>Deadline</span> is April 18, 2023. Do you need more time?',
        btntextLg: 'Click here and get an immediate tax extension.',
        btntextSm: 'Get 6 additional months to file!',
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
          name: 'btntextLg',
          type: 'string',
        },
        {
          name: 'btntextSm',
          type: 'string',
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
