import { Builder } from '@builder.io/react'
import avatar from '../../../images/assets/author-isabel-avatar.png'
import { TestimonialAuthor } from './TestimonialAuthor'

Builder.registerComponent(TestimonialAuthor, {
  name: 'co70 Testimonial Author',
  inputs: [
    {
      type: 'object',
      name: 'testimonialDetails',
      defaultValue: {
        avatar: avatar,
        authorLabel: 'Author',
        authorName: 'Isabel S.',
        authorPosition: 'Tax Expert',
        authorDesc: `Over 5 years' experience in tax preparation. Always providing clear
          guidance to clients, assuring that all possible legal deductions are
          claimed and clarifying any complex matter in simple terms so they have
          peace of mind when filing their tax return.`,
      },
      subFields: [
        {
          name: 'avatar',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name: 'authorLabel',
          type: 'string',
        },
        {
          name: 'authorName',
          type: 'string',
        },
        {
          name: 'authorPosition',
          type: 'string',
        },
        {
          name: 'authorDesc',
          type: 'richText',
        },
      ],
    },
  ],
})
