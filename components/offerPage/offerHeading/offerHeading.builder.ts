import { Builder } from '@builder.io/react'
import { OfferHeading } from './OfferHeading'

Builder.registerComponent(OfferHeading, {
    name: 'Offer Heading',
    inputs: [
        {
            type: 'object',
            name: 'offerHeadingDetails',
            defaultValue: {
                title: 'According to the IRS, more than 1 billion dollars in tax deductions are <span>missed each year</span>!',
                lessthenThreeDayForYesTitle: '<span>Only 2 days left to tax deadline. </span> Don’t panic. Don’t overpay. Extend Your Tax Return through October 16th',
                pastDeadlineForYesTitle: 'The IRS is still accepting extensions after the deadline. File an extension now and avoid up to 25% in penalties',
                lessthenThreeDayForNoTitle: 'According to the IRS, more than 1 billion dollars in tax deductions are <span>missed each year! </span>',
                pastDeadlineForNoTitle: 'The IRS is still accepting extensions after the deadline. File an extension now and avoid up to 25% in penalties',
                lessthenThreeDayForYesSubTitle: 'File a better return with more time',
                pastDeadlineForYesSubTitle: 'Pay your taxes ASAP if you haven’t and use the extra time of the extension to file a better return and reduce taxes owed.',
                lessthenThreeDayForNoSubTitle: 'Could you benefit by getting a <span>tax extension?</span>',
                pastDeadlineForNoSubTitle: 'Pay your taxes ASAP if you haven’t and use the extra time of the extension to file a better return and reduce taxes owed.',
                subTitle: 'Don’t miss out on credits and deductions you’re owed - <span>let us help you find all the money you’re entitled to.</span> If you don’t have enough time to finish, we can help you get a tax extension so you can take the time to make sure you <span>get it right.</span>',
                smallSubTitle: 'Could you benefit by getting a <b>tax extension?</b>'
            },
            subFields: [
                {
                    name: 'title',
                    type: 'richText'
                },
                {
                    name: 'lessthenThreeDayForYesTitle',
                    type: 'richText'
                },
                {
                    name: 'pastDeadlineForYesTitle',
                    type: 'richText'
                },
                {
                    name: 'lessthenThreeDayForNoTitle',
                    type: 'richText'
                },
                {
                    name: 'pastDeadlineForNoTitle',
                    type: 'richText'
                },
                {
                    name: 'lessthenThreeDayForYesSubTitle',
                    type: 'richText'
                },
                {
                    name: 'pastDeadlineForYesSubTitle',
                    type: 'richText'
                },
                {
                    name: 'lessthenThreeDayForNoSubTitle',
                    type: 'richText'
                },
                {
                    name: 'pastDeadlineForNoSubTitle',
                    type: 'richText'
                },
                {
                    name: 'subTitle',
                    type: 'richText'
                },
                {
                    name: 'smallSubTitle',
                    type: 'richText'
                }
            ]
        }
    ]
})