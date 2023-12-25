import { Builder } from '@builder.io/react'
import { About } from './About'
import logo from '../../images/assets/logo-lg.svg'
import iconBBB from '../../images/assets/logo-BBB.svg'
import icon1m from '../../images/assets/logo-1m.svg'
import iconAuth from '../../images/assets/logo-auth.svg'
import iconSecure from '../../images/assets/logo-secure.svg'

Builder.registerComponent(About, {
  name: 'co13 About Us',
  inputs: [
    {
      type: 'object',
      name: 'aboutDetails',
      defaultValue: {
        logo: logo,
        title: 'A Decade Devoted to Your Financial Empowerment',
        subTitle:
          '<p>We are a tax tech company in business for over 15 years and rated A+ with the BBB.</p><p>At <span>FileSmart<sup>TM</sup></span> we leverage tech and education to offer taxpayers a better, more cost-effective, and transparent way to file for a remarkably low fee.</p>',
      },
      subFields: [
        {
          name: 'logo',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'subTitle',
          type: 'richText',
        },
      ],
    },
    {
      type: 'list',
      name: 'benefits',
      defaultValue: [
        {
          icon: iconBBB,
          title: 'A+ Rated with<br/> the BBB',
        },
        {
          icon: icon1m,
          title: 'Over 1,000,000<br/> accounts created',
        },
        {
          icon: iconAuth,
          title: 'IRS Approved<br/> E-File Provider',
        },
        {
          icon: iconSecure,
          title: 'Your data is 100%<br/> safe and secure',
        },
      ],
      subFields: [
        {
          name: 'icon',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name: 'title',
          type: 'string',
        },
      ],
    },
  ],
})
