/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
//import fetch from 'cross-fetch'
import {getAppOrigin} from 'pwa-kit-react-sdk/utils/url'
import {keysToCamel} from './utils'

import {camelCaseKeysToUnderscore, checkRequiredParameters, createOcapiFetch} from './utils'

class PaymentMule {
    constructor() {
    }

    async createPayment(paymentTransaction) {
        const host = 'http://mvc.us-e2.cloudhub.io/api/add-payment'
        const resource = '/add-payment'
        const method = 'POST'
        const  headers = {
            'Content-Type': 'application/json'
        }
        const body = paymentTransaction;
        const response = await fetch( host, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body) // body data type must match "Content-Type" header
        })
        .then((resp) => {
            return resp
        })
        .catch(function(error) {
            return error;
        })
    }
}

export default PaymentMule