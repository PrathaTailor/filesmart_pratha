import { Builder } from '@builder.io/react'
import { Problems } from './Problems'
import iconTime from '../../images/icons/icon-time.png'
import iconTax from '../../images/icons/icon-tax.png'
import iconMoney from '../../images/icons/icon-money.png'

Builder.registerComponent(Problems, {
  name: 'co05 Problems',
  inputs: [
    {
      type: 'list',
      name: 'problems',
      defaultValue: [
        {
          image: iconTime,
          name: 'Last Minute Filing Can Be Expensive',
          description:
            "Missing the deadline without getting an extension can result in hefty IRS penalties.",
        },
        {
          image: iconMoney,
          name: '“Free” Online Tax Filing Services Hide Hidden Pricing',
          description:
            'After spending hours online completing your tax forms with “free” filing services, you’re suddenly hit with.',
        },
        {
          image: iconTax,
          name: 'You Should Never Pay More Taxes Than You Owe',
          description:
            'Missing out on credits and deductions can be costly. Get what you deserve.',
        },
      ],
      subFields: [
        {
          name: 'name',
          type: 'string',
        },
        {
          name: 'description',
          type: 'richText',
        },
        {
          name: 'image',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
      ],
    },
    {
      type: 'richText',
      name: 'header',
      defaultValue:
        'A <u>stress-free and less expensive</u> way to file your taxes',
    },
  ],
})
