import { Builder } from '@builder.io/react'
import { Benefits } from './Benefits'
import iconThumb from '../../images/icons/icon-thumb.svg'
import iconHelp from '../../images/icons/icon-help.svg'
import iconEducation from '../../images/icons/icon-education.svg'
import iconMoney from '../../images/icons/icon-money.svg'

Builder.registerComponent(Benefits, {
  name: 'co04 Benefits',
  inputs: [
    {
      type: 'list',
      name: 'benefits',
      defaultValue: [
        {
          image: iconThumb,
          description: 'Transparent Pricing',
        },
        {
          image: iconMoney,
          description: 'Maximize Deductions',
        },
        {
          image: iconHelp,
          description: 'Expert Help',
        },
        {
          image: iconEducation,
          description: 'Tax Education',
        },
      ],
      subFields: [
        {
          name: 'description',
          type: 'string',
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
