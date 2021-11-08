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

class HerokuMule {
    constructor() {
    }

    async sendOrder(order) {
        const host = 'https://anypoint.mulesoft.com/mocking/api/v1/links/01c55346-5538-49a4-99d3-27ef7d845aac/order'
        const method = 'POST'
        const  headers = {
            'Content-Type': 'application/json'
        }
        const body = order;
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

export default HerokuMule