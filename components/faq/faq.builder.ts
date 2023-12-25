import { Builder } from '@builder.io/react'
import { Faq } from './Faq'

Builder.registerComponent(Faq, {
  name: 'co15 FAQ',
  inputs: [
    {
      type: 'string',
      name: 'title',
      defaultValue: 'Frequently Asked Questions',
    },
    {
      type: 'list',
      name: 'faqs',
      defaultValue: [
        {
          question: 'What are the services covered with FileSmart?',
          answer:
            '<p>With FileSmart, you will get access to: </p><p>1x Tax Return Filing per year: via our online tax-filing software.</p><p>1x Extension Filing: get 6 more months to file, automatically approved by the IRS. File online - no trips to the post office.</p><p>PLUS all of these additional services:</p><ul><li>IRS Shield: Tax attorney and tax expert support to respond to IRS letters, should you receive them.</li><li>Ask An Expert: Get support from a team of enrolled agents, tax attorneys, CPAs and product experts for any and all tax related questions you have throughout the year (up to 5/month).</li><li>Tax Education: Learn what to do to pay less in taxes with bite-sized educational courses. Save time (and money!) while removing the stress, anxiety and fear around filing.</li><li>Tax Optimization Report: Answer a few questions about your situation to get a step-by-step plan to make filing your taxes as easy as possible.</li></ul>',
        },
        {
          question: 'How can FileSmart help me after I file my tax return?',
          answer:
            '<p>The membership is designed to help you file the best return possible. If you signed up for FileSmart before April 18th and are not prepared to file, we recommend that you first file an extension (included). This will give you enough time to help you prepare for the extended deadline (October 16th).</p><p>If you have already filed, you can access our other features to learn how to save money on your taxes all year round including access to your customized tax optimization report and bite-sized educational courses to enable you to learn how to tap into all the credits and deductions that you are due.</p>',
        },
        {
          question:
            'How do I contact support, if needed?',
          answer:
            '<p>Our Customer Success team is ready to assist you with all your tax needs.  For fastest response, we recommend emailing us at <a href="malto:support@filesmart.tax">support@filesmart.tax</a>, or <a href=https://filesmart.tax/contact-us>submit a ticket here</a>.</p>',
        },
        {
          question: 'What if I’m not happy with my membership?',
          answer:
            '<p>You can cancel your membership at any time - there is no minimum term.</p>',
        },
        {
          question: 'How do I get started?',
          answer:
            '<p>To create your account, simply input your email address and create a secure password. After creating your account, you will be taken to a page to proceed with the next steps, and/or add your payment method.  We make it easy and are here for you every step of the way!</p>',
        },
      ],
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
