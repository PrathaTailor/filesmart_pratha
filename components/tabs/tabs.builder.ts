import { Builder } from '@builder.io/react'
import { Tabs } from './Tabs'

Builder.registerComponent(Tabs, {
  name: 'Tabs',
  inputs: [
    {
      type: 'object',
      name: 'tabDetails',
      defaultValue: {
        titleOne: 'YES!',
        subtitleOne: 'I want an extension',
        titleTwo: 'NO!',
        subtitleTwo: `I'm ready to file now`
      },
      subFields: [
        {
          name: 'titleOne',
          type: 'string'
        },
        {
          name: 'subtitleOne',
          type: 'string'
        },
        {
          name: 'titleTwo',
          type: 'string'
        },
        {
          name: 'subtitleTwo',
          type: 'string'
        }
      ]
    }
  ]
})