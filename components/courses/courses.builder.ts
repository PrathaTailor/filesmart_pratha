import { Builder } from '@builder.io/react'
import { Courses } from './Courses'
import iconCategory from '../../images/icons/icon-education.png'

Builder.registerComponent(Courses, {
  name: 'co10 Courses',
  inputs: [
    {
      type: 'object',
      name: 'categoryDetails',
      defaultValue: {
        categoryIcon: iconCategory,
        categoryName: 'Tax Education',
        title: 'Know your taxes, ease your filing.',
        subTitle:
          'Knowing your way around taxes helps you save time and money while eliminating the stress, anxiety, and fear around filing.',
        cardTitle: 'Some of our many courses',
      },
      subFields: [
        {
          name: 'categoryIcon',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name: 'categoryName',
          type: 'string',
        },
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'subTitle',
          type: 'string',
        },
        {
          name: 'cardTitle',
          type: 'string',
        },
      ],
    },
    {
      type: 'list',
      name: 'courseList',
      defaultValue: [
        {
          title: 'Getting Started with Tax Optimization',
        },
        {
          title: 'Common Tax Deductions for Self-Employed and Side Gigs',
        },
        {
          title: 'How to Pay Less Taxes on Investment Income',
        },
        {
          title: 'Taxes on Crypto: How it Works',
        },
        {
          title: 'Common Tax Credits If You Have Children or Dependents',
        },
        {
          title: 'Rental Income: How to Pay Less in Taxes',
        },
        {
          title: 'What Taxes Are and How They Work',
        },
        {
          title: 'How Income Tax is Calculated',
        },
        {
          title: 'How to File a Tax Extension (and why you might want to)',
        },
        {
          title: 'How IRS Penalties and Fines Work',
        },
      ],
      subFields: [
        {
          name: 'title',
          type: 'string',
        },
      ],
    },
  ],
})
