import { Builder } from '@builder.io/react'
import InlineAlert from './InlineAlert'
import iconAlert from '../../../images/icons/icon-alert.png'

Builder.registerComponent(InlineAlert, {
  name: 'co50 Inline Alert',
  inputs: [
    {
      type: 'object',
      name: 'alertDetails',
      defaultValue: {
        iconAlert: iconAlert,
        description:
          'Remember that the "failure to file" penalty of 5% per month can be AVOIDED when you obtain your personal tax extension.',
      },
      subFields: [
        {
          name: 'iconAlert',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name: 'description',
          type: 'richText',
        },
      ],
    },
  ],
})
