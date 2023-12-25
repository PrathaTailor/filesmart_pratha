import { Builder } from '@builder.io/react'
import { BlogColumnContent } from './BlogColumnContent'
import blogContentWatchImg from '../../../images/assets/blog-content-watch.png'

Builder.registerComponent(BlogColumnContent, {
  name: 'co49 Blog Column Content',
  inputs: [
    {
      type: 'object',
      name: 'blogColumnContentDetails',
      defaultValue: {
        title: 'Extra time to file:',
        banner: blogContentWatchImg,
        content: `You may be unable to complete your tax return by the deadline due to unforeseen circumstances (such as a natural disaster or a family emergency). Or you may need more time to gather all of the necessary documents and information. <b>One of the main benefits of filing for a tax extension is that it gives you extra time to file your tax return.</b> This can be especially helpful if you are dealing with a complex tax situation or have a lot of paperwork to complete.`,
      },
      subFields: [
        {
          name: 'title',
          type: 'richText',
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
          name: 'content',
          type: 'richText',
        },
      ],
    },
  ],
})
