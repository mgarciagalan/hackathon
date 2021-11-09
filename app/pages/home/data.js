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
        imgSrc: 'static/img/home/tapa_pulpo.jpg',
        imgAlt: 'Tapas'
    },
    {
        title: 'Montaos',
        href: '/{activeLocale}/category/montaos',
        imgSrc: 'static/img/home/montao_marinera.jpg',
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
        imgSrc: 'static/img/home/postre_pan.jpg',
        imgAlt: 'Postres'
    }
]

export const categories = [
    {
        message: defineMessages({
            title: {defaultMessage: 'Tapas'},
            href: {defaultMessage: '/{activeLocale}/category/tapas'},
            imgSrc: {defaultMessage: 'static/img/home/tapa_pastel.jpg'},
            imgAlt: {defaultMessage: 'Tapas'},
            description: {defaultMessage: 'La mejor selección de tapas de la región: pulpo al horno de mazarrón, pastelico de carne, morcilla y muchos más.'}
        })
    },
    {
        message: defineMessages({
            title: {defaultMessage: 'Montaos'},
            href: {defaultMessage: '/{activeLocale}/category/montaos'},
            imgSrc: {defaultMessage: 'static/img/home/montao_queso.jpg'},
            imgAlt: {defaultMessage: 'Montaos'},
            description: {defaultMessage: 'Grandísimos platos que pueden ir sobre una tosta o pan de pueblo: la clásica marinera en rosquilla, magra con tomate en pan de pueblo, salmón en tosta, etc.'}
        })
    },
    {
        message: defineMessages({
            title: {defaultMessage: 'Bebidas'},
            href: {defaultMessage: '/{activeLocale}/category/bebidas'},
            imgSrc: {defaultMessage: 'static/img/home/bebida_cerveza2.jpg'},
            imgAlt: {defaultMessage: 'Bebidas'},
            description: {defaultMessage: 'Queremos impulsar lo local, por lo que solo servimos como cerveza Estrella Levante con un alto porcentaje de productos producidos en la región.'}
        })
    },
    {
        message: defineMessages({
            title: {defaultMessage: 'Postres'},
            href: {defaultMessage: '/{activeLocale}/category/postres'},
            imgSrc: {defaultMessage: 'static/img/home/postre_cafe.jpg'},
            imgAlt: {defaultMessage: 'Postres'},
            description: {defaultMessage: 'Clásicos murcianos de siempre: paparajotes y pan de calatrava, acompañados de café local.'}
        })
    }
]

export const productsTop10 = [
    {
        productName: 'Marinera',
        href: '/{activeLocale}/product/20',
        imgSrc: 'static/img/home/montao_marinera.jpg',
        imgAlt: 'Marinera',
        description: 'La mejor ensaladilla murciana.'
    },
    {
        productName: 'Sobrasada con queso brie',
        href: '/{activeLocale}/product/172',
        imgSrc: 'static/img/home/montao_sobrasada.jpg',
        imgAlt: 'Sobrasada con queso brie',
        description: 'Con riquísima sobrasada local.'
    },
    {
        productName: 'Salmón ahumado',
        href: '/{activeLocale}/product/181',
        imgSrc: 'static/img/home/salmon_brie.jpg',
        imgAlt: 'Salmón ahumado',
        description: 'El clásico entre los clásicos.'
    },
    {
        productName: 'Anchoa con tomate',
        href: '/{activeLocale}/product/19',
        imgSrc: 'static/img/home/anchoa_tomate.jpg',
        imgAlt: 'Anchoa con tomate',
        description: 'Tomaticos de la huerta y ese gran toque salado de anchoa.'
    },
    {
        productName: 'Queso fresco con tomate',
        href: '/{activeLocale}/product/22',
        imgSrc: 'static/img/home/montao_queso.jpg',
        imgAlt: 'Queso fresco con tomate',
        description: 'Una combinación suave y ligera.'
    }
]