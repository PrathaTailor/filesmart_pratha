import { Builder } from '@builder.io/react';
import { productSkuEnum } from '@utils/apiMethods';
import { Pricing } from './Pricing';

Builder.registerComponent(Pricing, {
    name: 'co65 Pricing',
    inputs: [
        {
            type: 'string',
            name: 'title',
            defaultValue: 'Choose the plan that works best for you:'
        },
        {
            type: 'object',
            name: 'pricingDetailsOne',
            defaultValue: {
                title: 'File by April 18th',
                pricingWrapper: 'One-time Fee',
                noFees: 'No hidden fees',
                btnText: 'Get Started',
                oneTimePlanProduct: 'pr42'
            },
            subFields: [
                {
                    name: 'title',
                    type: 'string'
                },
                {
                    name: 'oneTimePlanProduct',
                    friendlyName: 'One Time Payment Product',
                    type: 'string',
                    enum: productSkuEnum(),
                    defaultValue: 'pr42',
                    required: true
                },
                {
                    name: 'pricingWrapper',
                    type: 'richText'
                },
                {
                    name: 'noFees',
                    type: 'string'
                },
                {
                    name: 'btnText',
                    type: 'string'
                },
                {
                    name: 'btnLink',
                    type: 'string'
                }
            ]
        },
        {
            type: 'object',
            name: 'pricingDetailsTwo',
            defaultValue: {
                title: 'File by October 16th',
                price: 'pr40',
                pricingWrapper: 'Monthly',
                noFees: 'No hidden fees',
                btnText: 'Get Started'
            },
            subFields: [
                {
                    name: 'title',
                    type: 'string'
                },
                {
                    name: 'montlyPlanProduct',
                    friendlyName: 'Subscription Plan Product',
                    type: 'string',
                    enum: productSkuEnum(),
                    defaultValue: 'pr40',
                    required: true
                },
                {
                    name: 'pricingWrapper',
                    type: 'richText'
                },
                {
                    name: 'noFees',
                    type: 'string'
                },
                {
                    name: 'btnText',
                    type: 'string'
                },
                {
                    name: 'btnLink',
                    type: 'string'
                }
            ]
        },
        {
            type: 'list',
            name: 'featureListOne',
            defaultValue: [
                {
                    item: 'Federal Return'
                },
                {
                    item: 'State Return'
                },
                {
                    item: 'Deduction Calculator (increase your refund)'
                },
                {
                    item: 'Limited Expert Help'
                }
            ],
            subFields: [
                {
                    name: 'item',
                    type: 'richText'
                }
            ]
        },
        {
            type: 'list',
            name: 'featureListTwo',
            defaultValue: [
                {
                    item: '<b>Tax Extension Filing</b> (get an additional six months to file)'
                },
                {
                    item: 'Federal Return'
                },
                {
                    item: 'State Return'
                },
                {
                    item: 'Easy-to-use Deductions Finder (Reduce Your Taxes)'
                },
                {
                    item: 'Expert Help'
                },
                {
                    item: '<b>Year-Round Tax Support - <span>Show Less</span></b>'
                },
                {
                    item: 'Ask our team of tax experts up to 5 questions per month'
                },
                {
                    item: 'Online courses to learn how to maximize your tax savings'
                },
                {
                    item: 'Protection from IRS inquiries with IRS ShieldTM'
                }
            ],
            subFields: [
                {
                    name: 'item',
                    type: 'richText'
                }
            ]
        }
    ]
});

export interface PricingDetailsOne {
    title: string;
    oneTimePlanProduct: string;
    pricingWrapper: string;
    noFees: string;
    btnText: string;
}
export interface PricingDetailsTwo {
    title: string;
    montlyPlanProduct: string;
    pricingWrapper: string;
    noFees: string;
    btnText: string;
}
export interface FeatureListOne {
    item: string;
}
export interface FeatureListTwo {
    item: string;
}
