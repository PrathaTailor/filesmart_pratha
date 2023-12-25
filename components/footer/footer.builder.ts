import { Builder } from '@builder.io/react';
import { Footer } from './Footer';
import logoFileSmart from '../../images/assets/logo-file-smart-white.svg';
import logoIrs from '../../images/assets/logo-IRS.png';
import logoBbb from '../../images/assets/logo-bbb-sm.png';
import logoSsl from '../../images/assets/logo-ssl.png';
import logoTrustArc from '../../images/assets/logo-trust-arc.svg';
import logoSecureTrust from '../../images/assets/logo-secure-trust.svg';
import logoAes from '../../images/assets/logo-aes.png';
import iconMail from '../../images/icons/icon-mail.png';
import iconLinkedin from '../../images/icons/icon-linkedin.png';
import iconInstagram from '../../images/icons/icon-instagram.png';
import iconFacebook from '../../images/icons/icon-facebook.png';

Builder.registerComponent(Footer, {
    name: 'co16 Footer',
    inputs: [
        {
            type: 'object',
            name: 'details',
            defaultValue: {
                title: 'Empowering you to be smart with your finances all year-round.',
                disclaimersTitle: 'IMPORTANT DISCLAIMERS',
                disclaimersDescription:
                    'FileSmart.tax is designated as an Authorized IRS e-file Provider. An Authorized IRS e-file Provider (Provider) is a business or organization authorized by the IRS to participate in the IRS e-file program. Our parent company had created accounts for more than 1 million U.S. taxpayers to assist with their tax filings.',
                termsText: 'Terms & Conditions',
                privacyText: 'Privacy Policy',
                refundText: 'Refund Policy',
                contactText: 'Contact Us',
                logo: logoFileSmart,
                isrLogo: logoIrs,
                bbbLogo: logoBbb,
                sslLogo: logoSsl,
                arcTrustLogo: logoTrustArc,
                secureTrustLogo: logoSecureTrust,
                aesLogo: logoAes,
                mailIcon: iconMail,
                linkedinIcon: iconLinkedin,
                instagramIcon: iconInstagram,
                facebookIcon: iconFacebook
            },
            subFields: [
                {
                    name: 'title',
                    type: 'string'
                },
                {
                    name: 'disclaimersTitle',
                    type: 'string'
                },
                {
                    name: 'disclaimersDescription',
                    type: 'string'
                },
                {
                    name: 'termsText',
                    type: 'string'
                },
                {
                    name: 'privacyText',
                    type: 'string'
                },
                {
                    name: 'refundText',
                    type: 'string'
                },
                {
                    name: 'contactText',
                    type: 'string'
                },
                {
                    name: 'logo',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                    defaultValue:
                        'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
                },
                {
                    name: 'isrLogo',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                    defaultValue:
                        'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
                },
                {
                    name: 'bbbLogo',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                    defaultValue:
                        'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
                },
                {
                    name: 'sslLogo',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                    defaultValue:
                        'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
                },
                {
                    name: 'arcTrustLogo',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                    defaultValue:
                        'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
                },
                {
                    name: 'secureTrustLogo',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                    defaultValue:
                        'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
                },
                {
                    name: 'aesLogo',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                    defaultValue:
                        'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
                },
                {
                    name: 'mailIcon',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                    defaultValue:
                        'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
                },
                {
                    name: 'linkedinIcon',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                    defaultValue:
                        'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
                },
                {
                    name: 'instagramIcon',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                    defaultValue:
                        'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
                },
                {
                    name: 'facebookIcon',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                    defaultValue:
                        'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
                }
            ]
        }
    ]
});
