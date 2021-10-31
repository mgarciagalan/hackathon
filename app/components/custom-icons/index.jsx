/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React, {forwardRef} from 'react'
import {Icon, useTheme} from '@chakra-ui/react'

import LogoMin from '../../assets/custom-svg/logo-el-montao-min.svg'
import LogoHorizontal from '../../assets/custom-svg/logo-el-montao-horizontal.svg'
import LogoTexto from '../../assets/custom-svg/logo-el-montao-texto.svg'
import IconoInclinado from '../../assets/custom-svg/icono-el-montao.svg'

// TODO: We're hardcoding the `viewBox` for these imported SVGs temporarily as the
// SVG loader plugin is not properly providing us the symbol data on the client side.
LogoMin.viewBox = LogoMin.viewBox || '0 0 46 46'
LogoHorizontal.viewBox = LogoHorizontal.viewBox || '0 0 48 32'
LogoTexto.viewBox = LogoTexto.viewBox || '0 0 46 32'
IconoInclinado.viewBox = IconoInclinado.viewBox || '0 0 100 100'

/**
 * A helper for creating a Chakra-wrapped icon from our own SVG imports via sprite sheet.
 * @param {string} name - the filename of the imported svg (does not include extension)
 */
/* istanbul ignore next */
const icon = (name, passProps) => {
    const displayName = name
        .toLowerCase()
        .replace(/(?:^|[\s-/])\w/g, (match) => match.toUpperCase())
        .replace(/-/g, '')
    const component = forwardRef((props, ref) => {
        const theme = useTheme()
        const {baseStyle} = theme.components.Icon
        return (
            <Icon ref={ref} {...baseStyle} {...passProps} {...props}>
                <use role="presentation" xlinkHref={`#${name}`} />
            </Icon>
        )
    })
    component.displayName = `${displayName}Icon`
    return component
}

// Export Chakra icon components that use our SVG sprite symbol internally
// For non-square SVGs, we can use the symbol data from the import to set the
// proper viewBox attribute on the Icon wrapper.
export const LogoElMontaoMin = icon('logo-el-montao-min', {viewBox: LogoMin.viewBox})
export const LogoElMontaoHorizontal = icon('logo-el-montao-horizontal', {
    viewBox: LogoHorizontal.viewBox
})
export const LogoElMontaoTexto = icon('logo-el-montao-texto', {viewBox: LogoTexto.viewBox})
export const IconoElMontao = icon('icono-el-montao', {viewBox: IconoInclinado.viewBox})
