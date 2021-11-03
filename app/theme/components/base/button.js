/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    baseStyle: {
        borderRadius: '0'
    },
    variants: {
        // El Montao solid green (default)
        solid: (props) =>
            props.colorScheme === 'elMontaoGreen'
                ? {
                    border: 'none',
                    textTransform: 'uppercase',
                    letterSpacing: '2.5px',
                    background: '#07AF4F',
                    color: '#fff',
                    fontSize: { base: 'sm', md: 'md' },
                    padding: { base: '10px 15px 7px', lg: '10px 25px 7px' },
                    _hover: {
                        border: 'none',
                        background: '#A67B5B',
                        color: '#fff'
                    },
                    _active: {bg: 'gray.800'},
                    _disabled: {bg: 'gray.300'}
                }
                : {},
        // El Montao outline black & white
        outline: {
            textTransform: 'uppercase',
            letterSpacing: '2.5px',
            border: 'solid 2px #000000',
            background: '#fffff',
            color: '#000000',
            _hover: {
                border: 'solid 2px #000000',
                background: '#000000',
                color: '#ffffff'
            }
        },
        footer: {
            borderRadius: '0',
            fontSize: 'sm',
            background: 'gray.100',
            color: 'black',
            _hover: {bg: 'gray.200'},
            _active: {bg: 'gray.300'},
            paddingLeft: 3,
            paddingRight: 3
        },
        link: (props) => ({
            color: props.colorScheme === 'red' ? 'red.500' : 'yellow.600',
            fontWeight: 'normal',
            minWidth: '1em',
            lineHeight: 4
        }),
        'menu-link': {
            color: 'black',
            justifyContent: 'flex-start',
            fontSize: 'sm',
            _hover: {bg: 'gray.50', textDecoration: 'none'},
            _activeLink: {
                bg: 'gray.50',
                textDecoration: 'none'
            }
        },
        'menu-link-mobile': {
            color: 'black',
            justifyContent: 'flex-start',
            fontSize: 'sm',
            _hover: {bg: 'gray.50', textDecoration: 'none'},
            _activeLink: {
                bg: 'gray.100',
                textDecoration: 'none'
            }
        },
        'search-link': {
            color: 'black',
            justifyContent: 'flex-start',
            fontSize: 'sm',
            _hover: {textDecoration: 'none'}
        }
    },
    sizes: {
        md: {
            height: 11,
            minWidth: 11
        }
    },
    defaultProps: {
        colorScheme: 'elMontaoGreen'
    }
}
