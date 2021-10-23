/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('pwa-kit-react-sdk/webpack/config')

/**
 *  Import required CSS Extract Plugin. For each configuration, ad the specifics.
 *
 * 1. Add plugin to list of plugins
 * 2. Add extension to process
 * 3. Add rule
 */
const devMode = process.env.NODE_ENV !== 'production'
// Only used in prod
const miniCssPlugin = new MiniCssExtractPlugin({
    filename: devMode ? '[name].css' : '[name].[hash].css',
    chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
})
const ruleCss = {
    test: /\.css$/i,
    use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
}

// PWA Main - inject CSS config
const pwaMain = config.find((n) => n.name === 'pwa-main')
pwaMain.plugins.push(miniCssPlugin)
pwaMain.resolve.extensions.push('.scss')
pwaMain.module.rules.push(ruleCss)

// SSR Configuration - inject CSS config
const ssrConfig = config.find((n) => n.name === 'ssr-server')
ssrConfig.plugins.push(miniCssPlugin)
ssrConfig.resolve.extensions.push('.scss')
ssrConfig.module.rules.push(ruleCss)

module.exports = config
