import { Builder } from '@builder.io/react'
import { Counter } from './Counter'
import iconCheck from '../../../images/icons/icon-round-check.png';

Builder.registerComponent(Counter, {
  name: 'Counter',
  inputs: [
    {
      type: 'object',
      name: 'details',
      defaultValue: {
        counterText: 'Until Tax Day <span>WITH</span> an extension',
        counterDays: 10,
        counterIcon: iconCheck,
      },
      subFields: [
        {
          name: 'counterText',
          type: 'string',
        },
        {
          name: 'counterDays',
          type: 'number',
        },
        {
          name: 'counterIcon',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        }
      ],
    }
  ],
})