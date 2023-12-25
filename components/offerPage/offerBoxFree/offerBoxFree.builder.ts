import { Builder } from '@builder.io/react'
import { OfferBoxFree } from './OfferBoxFree'

Builder.registerComponent(OfferBoxFree, {
    name: 'Offer Box Free Guys',
    inputs: [
        {
            type: 'object',
            name: 'offerBoxTitle',
            defaultValue: {
                title: 'COMPARE AND SAVE',
                subTitle: 'This is How Much Taxpayers Spend with the <span>“Free Guys”</span>'
            },
            subFields: [
                {
                    name: 'title',
                    type: 'string'
                },
                {
                    name: 'subTitle',
                    type: 'richtext'
                }
            ]
        },
        {
            type: 'list',
            name: 'offerPriceDetails',
            defaultValue: [
                {
                    listLabel: 'Federal Return',
                    listPrice: '$59',
                    listDesc: 'for a simple tax return.'
                },
                {
                    listLabel: 'State Return',
                    listPrice: '$49',
                    listDesc: 'per state.'
                },
                {
                    listLabel: 'Post-Filing Support',
                    listPrice: '$59',
                    listDesc: 'Available as an upsell.'
                },
            ],
            subFields: [
                {
                    name: 'listLabel',
                    type: 'string'
                },
                {
                    name: 'listPrice',
                    type: 'string'
                },
                {
                    name: 'listDesc',
                    type: 'string'
                },
            ]
        },
        {
            type: 'object',
            name: 'freeOfferBox',
            defaultValue: {
                sign: '$',
                price: '119',
                priceDesc: 'or more',
                tagline: `And that's only for a <span>simple</span> return!`
            },
            subFields: [
                {
                    name: 'sign',
                    type: 'string'
                },
                {
                    name: 'price',
                    type: 'string'
                },
                {
                    name: 'priceDesc',
                    type: 'string'
                },
                {
                    name: 'tagline',
                    type: 'richtext'
                }
            ]
        },
    ]
}
)