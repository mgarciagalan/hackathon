/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is the data used in by the Retail React App home page.
 * The example static data is created for demonstration purposes.
 * Typically you'd get this information from the API or possibly
 * from content slots.
 */

import {defineMessages} from 'react-intl'

export const categories = [
    {
        message: defineMessages({
            title: {defaultMessage: 'Tapas'},
            href: {defaultMessage: '/{activeLocale}/category/1'},
            imgSrc: {defaultMessage: 'static/img/home/cat_1.jpg'},
            imgAlt: {defaultMessage: 'Tapas'},
            description: {defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        })
    },
    {
        message: defineMessages({
            title: {defaultMessage: 'Montaos'},
            href: {defaultMessage: '/{activeLocale}/category/2'},
            imgSrc: {defaultMessage: 'static/img/home/cat_2.jpg'},
            imgAlt: {defaultMessage: 'Montaos'},
            description: {defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        })
    },
    {
        message: defineMessages({
            title: {defaultMessage: 'Bebidas'},
            href: {defaultMessage: '/{activeLocale}/category/3'},
            imgSrc: {defaultMessage: 'static/img/home/cat_3.jpg'},
            imgAlt: {defaultMessage: 'Bebidas'},
            description: {defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        })
    },
    {
        message: defineMessages({
            title: {defaultMessage: 'Postres'},
            href: {defaultMessage: '/{activeLocale}/category/4'},
            imgSrc: {defaultMessage: 'static/img/home/cat_4.jpg'},
            imgAlt: {defaultMessage: 'Postres'},
            description: {defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        })
    }
]

export const productsTop10 = [
    {
        productName: 'Marinera',
        href: '/{activeLocale}/product/20',
        imgSrc: 'static/img/home/cat_4.jpg',
        imgAlt: 'Marinera'
    },
    {
        productName: 'Magra con tomate',
        href: '/{activeLocale}/product/162',
        imgSrc: 'static/img/home/cat_4.jpg',
        imgAlt: 'Magra con tomate'
    },
    {
        productName: 'Montadito de salmón',
        href: '/{activeLocale}/product/182',
        imgSrc: 'static/img/home/cat_4.jpg',
        imgAlt: 'Montadito de salmón'
    },
    {
        productName: 'Pisto murciano',
        href: '/{activeLocale}/product/5',
        imgSrc: 'static/img/home/cat_4.jpg',
        imgAlt: 'Pisto murciano'
    },
    {
        productName: 'Pulpo al horno',
        href: '/{activeLocale}/product/12',
        imgSrc: 'static/img/home/cat_4.jpg',
        imgAlt: 'Pulpo al horno'
    }
]