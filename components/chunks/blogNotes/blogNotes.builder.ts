import { Builder } from '@builder.io/react'
import { BlogNotes } from './BlogNotes'

Builder.registerComponent(BlogNotes, {
  name: 'co49 Blog Notes',
  inputs: [
    {
      type: 'richText',
      name: 'blogContent',
      defaultValue: `Please note that FileSmart.tax & associated sites guarantees neither the accuracy nor completeness of any information and is not responsible for any errors or omissions, or for results obtained by others as a result of reliance upon such information. Our site and any responses from our software or representatives are not intended to provide legal, tax or accounting advice, and you are advised to consult your tax advisor for any specific advice.`,
    },
  ],
})
