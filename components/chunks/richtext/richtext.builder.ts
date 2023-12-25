import { Builder } from '@builder.io/react'
import Richtext from './Richtext'

Builder.registerComponent(Richtext, {
  name: 'co49 Rich Text',
  inputs: [
    {
      type: 'object',
      name: 'richTextDetails',
      defaultValue: {
        title: `Individual Taxes. Here's What You Need to Know`,
        subTitle: 'First things first: why do you need to file a tax return?',
      },
      subFields: [
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'subTitle',
          type: 'string',
        },
      ],
    },
    {
      type: 'object',
      name: 'questionAnswerDetails',
      defaultValue: {
        question: ` Q: “But what if my request for an extension gets denied?”`,
        answer:
          '<p> If you&apos;re an individual taxpayer, the deadline for filing your tax return is April 18, 2023. This is the date by which you must file your tax return or <a href="/">request an extension</a>. </p> <p> The short answer is that it&apos;s the law. The Internal Revenue Service (IRS) requires all taxpayers to file a tax return each year, regardless of whether or not you owe any taxes. But there&apos;s more to it than just following the rules. <b> <i>Filing a tax return can also help you get back.</i> </b> </p> <ol> <li> Download Form 4868 from the IRS website or order it by calling the IRS at 1-800-829-3676. </li> <li> Correctly fill out Form 4868. You will need to provide your personal information (such as your name, Social Security number, and address), as well as an estimate of your tax liability for the current year. </li> <li> Print the completed Form. Get an envelope with tracking number etc. </li> <li>Submit the form by physically mailing it to the IRS.</li> </ol>',
      },
      subFields: [
        {
          name: 'question',
          type: 'string',
        },
        {
          name: 'answer',
          type: 'richText',
        },
      ],
    },
  ],
})
