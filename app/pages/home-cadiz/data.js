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

export const categoriesBlock = [
    {
        title: 'Tapas',
        href: '/{activeLocale}/category/tapas',
        imgSrc: 'static/img/home/tapa_pisto.jpg',
        imgAlt: 'Tapas'
    },
    {
        title: 'Montaos',
        href: '/{activeLocale}/category/montaos',
        imgSrc: 'static/img/home/montao_salmon.jpg',
        imgAlt: 'Montaos'
    },
    {
        title: 'Bebidas',
        href: '/{activeLocale}/category/bebidas',
        imgSrc: 'static/img/home/bebida_cerveza.jpg',
        imgAlt: 'Bebidas' 
    },
    {
        title: 'Postres',
        href: '/{activeLocale}/category/postres',
        imgSrc: 'static/img/home/postre_cafe.jpg',
        imgAlt: 'Postres'
    }
]

export const categories = [
    {
        message: defineMessages({
            title: {defaultMessage: 'Tapas'},
            href: {defaultMessage: '/{activeLocale}/category/tapas'},
            imgSrc: {defaultMessage: 'static/img/home/tapa_pisto.jpg'},
            imgAlt: {defaultMessage: 'Tapas'},
            description: {defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        })
    },
    {
        message: defineMessages({
            title: {defaultMessage: 'Montaos'},
            href: {defaultMessage: '/{activeLocale}/category/montaos'},
            imgSrc: {defaultMessage: 'static/img/home/montao_salmon.jpg'},
            imgAlt: {defaultMessage: 'Montaos'},
            description: {defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        })
    },
    {
        message: defineMessages({
            title: {defaultMessage: 'Bebidas'},
            href: {defaultMessage: '/{activeLocale}/category/bebidas'},
            imgSrc: {defaultMessage: 'static/img/home/bebida_cerveza.jpg'},
            imgAlt: {defaultMessage: 'Bebidas'},
            description: {defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        })
    },
    {
        message: defineMessages({
            title: {defaultMessage: 'Postres'},
            href: {defaultMessage: '/{activeLocale}/category/postres'},
            imgSrc: {defaultMessage: 'static/img/home/postre_cafe.jpg'},
            imgAlt: {defaultMessage: 'Postres'},
            description: {defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        })
    }
]

export const productsTop10 = [
    {
        productName: 'Mojama',
        href: '/{activeLocale}/product/20',
        imgSrc: 'static/img/home/montao_marinera.jpg',
        imgAlt: 'Mojama',
        description: 'El montao que no debes dejar escapar.'
    },
    {
        productName: 'Atún en tomate',
        href: '/{activeLocale}/product/162',
        imgSrc: 'static/img/home/montao_magra.jpg',
        imgAlt: 'Atún en tomate',
        description: 'La mejor magra con tomate se hace en Murcia.'
    },
    {
        productName: 'Pollo a la canilla',
        href: '/{activeLocale}/product/182',
        imgSrc: 'static/img/home/montao_salmon.jpg',
        imgAlt: 'Pollo a la canilla',
        description: 'El clásico entre los clásicos.'
    },
    {
        productName: 'Chicharrones de Cádiz',
        href: '/{activeLocale}/product/5',
        imgSrc: 'static/img/home/tapa_pisto.jpg',
        imgAlt: 'Chicharrones de Cádiz',
        description: 'Un pisto muy murciano.'
    }
]