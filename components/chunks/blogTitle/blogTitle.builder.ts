import { Builder } from '@builder.io/react'
import { BlogTitle } from './BlogTitle'

Builder.registerComponent(BlogTitle, {
  name: 'co49 Blog Title',
  inputs: [
    {
      type: 'richText',
      name: 'title',
      defaultValue: `Individual Taxes. Here's What You Need to Know`,
    },
    {
      type: 'string',
      name: 'id',
      defaultValue: '',
    },
  ],
})
