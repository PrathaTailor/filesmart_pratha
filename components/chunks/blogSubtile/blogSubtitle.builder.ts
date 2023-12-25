import { Builder } from '@builder.io/react'
import { BlogSubtitle } from './BlogSubtitle'

Builder.registerComponent(BlogSubtitle, {
  name: 'co49 Blog Subtitle',
  inputs: [
    {
      type: 'richText',
      name: 'subTitle',
      defaultValue: `Individual Taxes. Here's What You Need to Know`,
    },
    {
      type: 'string',
      name: 'id',
      defaultValue: '',
    },
  ],
})
