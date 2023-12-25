import { Builder } from '@builder.io/react'
import InlineList from './InlineList'

Builder.registerComponent(InlineList, {
  name: 'co51 Inline List',
  inputs: [
    {
      type: 'string',
      name: 'inlineListTitle',
      defaultValue:
        'Feel free to click on the links below and jump to the section that interests you most: ',
    },
    {
      type: 'list',
      name: 'listDetails',
      defaultValue: [
        {
          item: 'Why do you need to file a tax return?',
        },
        {
          item: `What happens if you don't file your tax return on time?`,
        },
        {
          item: 'What can I do to avoid the consequence of late filing?',
        },
        {
          item: 'Tax extensions and some of the biggest misconceptions',
        },
        {
          item: 'The BENEFITS and why filing for your tax extension is the smart choice',
        },
        {
          item: 'So, how do I request a tax extension?',
        },
      ],
      subFields: [
        {
          name: 'item',
          type: 'string',
        },
      ],
    },
  ],
})
