import { Builder } from '@builder.io/react'
import { ParaIcons } from './ParaIcons'
import logo from '../../images/icons/icon-secure.svg'
import iconIRS from '../../images/assets/logo-irs-security.svg'
import iconAuthFile from '../../images/assets/logo-auth-file.svg'
import iconHosting from '../../images/assets/logo-hosting.svg'
import iconPCIDSS from '../../images/assets/logo-pcidss.svg'

Builder.registerComponent(ParaIcons, {
  name: 'co12.security',
  inputs: [
    {
      type: 'object',
      name: 'paraDetails',
      defaultValue: {
        logo: logo,
        title: 'Committed to keeping your information secure.',
        subtitle:
          'We protect your data as if it were our own. We utilize military-grade data storage processes to ensure that all your data is 100% secure. Your privacy is guaranteed—we do not share any customer data with unaffiliated third parties as specified in our privacy policy.'
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
          type: 'string'
        },
        {
          name: 'subtitle',
          type: 'string'
        }
      ]
    },
    {
      type: 'list',
      name: 'paraIcon',
      defaultValue: [
        {
          icon: iconIRS,
        },
        {
          icon: iconAuthFile,
        },
        {
          icon: iconHosting,
        },
        {
          icon: iconPCIDSS,
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
      ]
    }
  ]
})