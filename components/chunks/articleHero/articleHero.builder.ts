import { Builder } from '@builder.io/react'
import { ArticleHero } from './ArticleHero'
import banner from '../../../images/assets/article-banner.png'
import avatarIsabel from '../../../images/assets/avatar-isabel.png'
import iconCalendar from '../../../images/icons/icon-calendar-blue.png'
import iconTime from '../../../images/icons/icon-time-blue.png'

Builder.registerComponent(ArticleHero, {
  name: 'co53 Article Hero',
  inputs: [
    {
      type: 'object',
      name: 'headerDetails',
      defaultValue: {
        advTitle: 'Tax Deadline 2023 Tax Saving Secrets:',
        advTitleMain:
          ' Everything You Need To Know About Individual Tax Filing Deadlines For Your 2022 Tax Year',
        advDesc:
          'In this comprehensive guide to your 2022 tax filing deadlines, we will cover everything you need to know about the tax deadline in 2023, including how to file an extension, the benefits of doing so, who is eligible to file an extension, and the costs involved.',
        articleBanner: banner,
        authName: 'Isabel S.',
        avatarIsabel: avatarIsabel,
        date: '14 Dec 2022',
        iconCalendar: iconCalendar,
        time: '10 min read',
        iconTime: iconTime,
      },
      subFields: [
        {
          name: 'advTitle',
          type: 'string',
        },
        {
          name: 'advTitleMain',
          type: 'richText',
        },
        {
          name: 'advDesc',
          type: 'string',
        },
        {
          name: 'articleBanner',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name: 'authName',
          type: 'string',
        },
        {
          name: 'avatarIsabel',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name: 'date',
          type: 'string',
        },
        {
          name: 'iconCalendar',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name: 'time',
          type: 'string',
        },
        {
          name: 'iconTime',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
      ],
    },
  ],
})
