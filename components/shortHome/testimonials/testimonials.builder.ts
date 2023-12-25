import { Builder } from '@builder.io/react';
import { Testimonials } from './Testimonials';
import avatarDaniel from '../../../images/assets/avatar-daniel-t.png';
import avatarKaren from '../../../images/assets/avatar-karen-s.png';
import avatarTodd from '../../../images/assets/avatar-todd.png';
import iconStar from '../../../images/icons/icon-star-full.png';

Builder.registerComponent(Testimonials, {
    name: 'co68 Testimonials Section',
    inputs: [
        {
            type: 'richText',
            name: 'title',
            defaultValue: 'What people are saying about FileSmart<sup>TM</sup>'
        },
        {
            type: 'list',
            name: 'testimonialList',
            defaultValue: [
                {
                    avatar: avatarDaniel,
                    author: 'Daniel T',
                    title: 'Amazing',
                    desc: 'The software and customer support are the best. I had a number of different forms to fill out and they walked me through all of them. Would recommend.'
                },
                {
                    avatar: avatarKaren,
                    author: 'Karen S',
                    title: 'Very happy customer! 👍',
                    desc: 'Very impressed with this co. It was easy to file an extension and the professionalism is outstanding. Response to my questions were very quick. I highly recommend! Good job!'
                },
                {
                    avatar: avatarTodd,
                    author: 'Todd',
                    title: 'The real deal',
                    desc: 'These guys do a great job we had a problem with the extension and it was resolved asap, very organized site. I was a super concerned, but they do a great job.'
                }
            ],
            subFields: [
                {
                    name: 'avatar',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                    defaultValue:
                        'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
                },
                {
                    name: 'author',
                    type: 'string'
                },
                {
                    name: 'title',
                    type: 'string'
                },
                {
                    name: 'desc',
                    type: 'string'
                }
            ]
        }
    ]
});
