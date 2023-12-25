import { Builder } from '@builder.io/react'
import { Testimonials } from './Testimonials'
import iconCategory from '../../images/icons/icon-check-solid.png'

Builder.registerComponent(Testimonials, {
  name: 'co11 Transparent Pricing',
  inputs: [
    {
      type: 'object',
      name: 'testimonialDetails',
      defaultValue: {
        categoryIcon: iconCategory,
        categoryName: 'Transparent Pricing',
        title:
          'One price, no upsells, guaranteed.',
        description: 'Rely on <span>FileSmart</span><sup>TM</sup> to help you with your tax situation, no matter how simple or complex.'
      },
      subFields: [
        {
          name: 'categoryIcon',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name: 'categoryName',
          type: 'string',
        },
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'description',
          type: 'richText',
        },
      ],
    },
    {
      type: 'list',
      name: 'sectionOneTestimonials',
      defaultValue: [
        {
          text: 'An employee looking for an affordable tax filing solution.',
        },
        {
          text: 'Self-employed and working from home.',
        },
        {
          text: 'A business owner.',
        },
        {
          text: 'A “Gig Economy” worker (Uber/Lyft driver, TaskRabbit tasker, etc.).',
        },
      ],
      subFields: [
        {
          name: 'text',
          type: 'string',
        },
      ],
    },
    {
      type: 'list',
      name: 'sectionTwoTestimonials',
      defaultValue: [
        {
          text: 'A buyer or seller of stocks.',
        },
        {
          text: 'A creator, buyer, or seller of crypto assets.',
        },
        {
          text: 'Unemployed and receive unemployment income.',
        },
        {
          text: 'Retired.',
        },
      ],
      subFields: [
        {
          name: 'text',
          type: 'string',
        },
      ],
    },
  ],
})
