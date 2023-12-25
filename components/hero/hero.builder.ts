import { Builder } from '@builder.io/react'
import { Hero } from './Hero'
import avatar from '../../images/temp/testimonial.png'

Builder.registerComponent(Hero, {
  name: 'co03 Hero',
  inputs: [
    {
      type: 'object',
      name: 'heros',
      defaultValue: {
        title: 'The <span>All-Inclusive</span> Way to File <i>Your Taxes</i>',
        subTitle:
          'File Federal and State taxes for one low fee <span>while saving on taxes all year round</span>',
        buttonText: 'Get Started Now',
        testimonialUserProfile: avatar,
        testimonialUserName: '<span>Nadia R</span>, EA, RIA',
        testimonialQuote:
          '"<span>FileSmart™</span> is the go-to tax preparation software for hands-on tax filers.”',
      },
      subFields: [
        {
          name: 'title',
          type: 'richText',
        },
        {
          name: 'subTitle',
          type: 'richText',
        },
        {
          name: 'buttonText',
          type: 'string',
        },
        {
          name: 'testimonialUserProfile',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name: 'testimonialUserName',
          type: 'richText',
        },
        {
          name: 'testimonialQuote',
          type: 'richText',
        },
      ],
    },
  ],
})
