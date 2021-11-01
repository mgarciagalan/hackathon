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

    async createPayment() {

        const url = 'https://randomuser.me/api/?results=10';

        var test1 = await fetch(url)
        .then((resp) => resp.json())
        .catch(function(error) {
            console.log(error);
        });
 
        const host = 'http://anypoint.mulesoft.com/mocking/api/v1/links/a0946d8c-6004-477b-88f1-05f86cc7db33/add-payment'
        const resource = '/add-payment'
        const method = 'POST'
        const  headers = {
            'Content-Type': 'application/json'
        }

        const paymentTransaction = {
            "orderId": "000001",
            "typeCard": "VISA",
            "numberCard": "41111111111111111",
            "customerId": "00001"
        }

        const response = await fetch( host, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                'Access-Control-Allow-Headers': 'X-PINGOTHER',
                'Access-Control-Max-Age': '1728000',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paymentTransaction) // body data type must match "Content-Type" header
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