import { Builder } from '@builder.io/react'
import { BlogContent } from './BlogContent'

Builder.registerComponent(BlogContent, {
  name: 'co49 Blog Content',
  inputs: [
    {
      type: 'richText',
      name: 'blogContent',
      defaultValue: `If you're an individual taxpayer, the deadline for filing your tax return is April 18, 2023. This is the date by which you must file your tax return or <a href="/contact-us">request an extension</a>.`,
    },
  ],
})
