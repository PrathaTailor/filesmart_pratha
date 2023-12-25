import { Builder } from '@builder.io/react'
import { BlogQuestion } from './BlogQuestion'

Builder.registerComponent(BlogQuestion, {
  name: 'co49 Blog Question Answer',
  inputs: [
    {
      type: 'object',
      name: 'blogQuesAns',
      defaultValue: {
        question: `Q: “But what if my request for an extension gets denied?”`,
        answer: `A: No one gets denied unless you enter INCORRECT information while you are filling out your form.`,
      },
      subFields: [
        {
          name: 'question',
          type: 'richText',
        },
        {
          name: 'answer',
          type: 'richText',
        },
      ],
    },
  ],
})
