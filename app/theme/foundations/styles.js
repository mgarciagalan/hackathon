/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    global: {
        'html, body': {
            backgroundColor: 'white',
            color: 'gray.900',
            fontFamily: 'Agrandir-Regular',
        },
        body: {
            minHeight: '100vh',
        },
        '.react-target': {
            display: 'flex',
            minHeight: '100vh',
        },
        '.mvc-shipping-address': {
            '> div[role=group]': {
                display: 'none',
            },
        },
        '.billing-payment-checkout, .mvc-stack-address': {
            display: 'none !important',
        },
        '*': {
            fontFamily: 'Agrandir-Regular',
        },
        '.chakra-heading p, .chakra-heading span': {
            fontFamily: 'Agrandir-GrandHeavy'
        },
        'button.plp__add-cart-btn:disabled': {
            backgroundColor: '#A67B5B',
        },
        'button.plp__add-cart-btn:not(:disabled):hover': {
            backgroundColor: 'green',
        }
    }
}
