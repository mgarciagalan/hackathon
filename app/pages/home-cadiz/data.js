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
        imgSrc: 'static/img/home-cadiz/tortilla_camarones.jpg',
        imgAlt: 'Tapas'
    },
    {
        title: 'Montaos',
        href: '/{activeLocale}/category/montaos',
        imgSrc: 'static/img/home-cadiz/pollo.jpg',
        imgAlt: 'Montaos'
    },
    {
        title: 'Bebidas',
        href: '/{activeLocale}/category/bebidas',
        imgSrc: 'static/img/home-cadiz/vino.jpg',
        imgAlt: 'Bebidas' 
    },
    {
        title: 'Postres',
        href: '/{activeLocale}/category/postres',
        imgSrc: 'static/img/home-cadiz/pestinos.jpg',
        imgAlt: 'Postres'
    }
]

export const categories = [
    {
        message: defineMessages({
            title: {defaultMessage: 'Tapas'},
            href: {defaultMessage: '/{activeLocale}/category/tapas'},
            imgSrc: {defaultMessage: 'static/img/home-cadiz/cazon.jpg'},
            imgAlt: {defaultMessage: 'Tapas'},
            description: {defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        })
    },
    {
        message: defineMessages({
            title: {defaultMessage: 'Montaos'},
            href: {defaultMessage: '/{activeLocale}/category/montaos'},
            imgSrc: {defaultMessage: 'static/img/home-cadiz/chicharrones.jpg'},
            imgAlt: {defaultMessage: 'Montaos'},
            description: {defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        })
    },
    {
        message: defineMessages({
            title: {defaultMessage: 'Bebidas'},
            href: {defaultMessage: '/{activeLocale}/category/bebidas'},
            imgSrc: {defaultMessage: 'static/img/home-cadiz/cerveza.jpg'},
            imgAlt: {defaultMessage: 'Bebidas'},
            description: {defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        })
    },
    {
        message: defineMessages({
            title: {defaultMessage: 'Postres'},
            href: {defaultMessage: '/{activeLocale}/category/postres'},
            imgSrc: {defaultMessage: 'static/img/home-cadiz/pan_cadiz.jpg'},
            imgAlt: {defaultMessage: 'Postres'},
            description: {defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        })
    }
]

export const productsTop10 = [
    {
        productName: 'Mojama',
        href: '/{activeLocale}/product/43',
        imgSrc: 'static/img/home-cadiz/mojama.jpg',
        imgAlt: 'Mojama',
        description: '¡Querrás repetir!'
    },
    {
        productName: 'Atún en tomate',
        href: '/{activeLocale}/product/44',
        imgSrc: 'static/img/home-cadiz/atun_tomate.jpg',
        imgAlt: 'Atún en tomate',
        description: 'Atún pescado en las costas de Cádiz. Con todos los protocolos de calidad y bienestar animal.'
    },
    {
        productName: 'Pollo a la canilla',
        href: '/{activeLocale}/product/45',
        imgSrc: 'static/img/home-cadiz/pollo.jpg',
        imgAlt: 'Pollo a la canilla',
        description: 'Auténtica tradición gaditana de kilómetro 0.'
    },
    {
        productName: 'Chicharrones de Cádiz',
        href: '/{activeLocale}/product/46',
        imgSrc: 'static/img/home-cadiz/chicharrones.jpg',
        imgAlt: 'Chicharrones de Cádiz',
        description: '¡Un capricho de cuando en cuando no hace daño!'
    }
]