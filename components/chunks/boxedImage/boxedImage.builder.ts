import { Builder } from '@builder.io/react'
import boxedImage from '../../../images/assets/boxed-image.png'
import { BoxedImage } from './BoxedImage'

Builder.registerComponent(BoxedImage, {
  name: 'co54 Boxed Image',
  inputs: [
    {
      type: 'object',
      name: 'boxedImageDetails',
      defaultValue: {
        boxedImg: boxedImage,
        height: 279,
      },
      subFields: [
        {
          name: 'boxedImg',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name: 'height',
          type: 'number',
        },
      ],
    },
  ],
})
