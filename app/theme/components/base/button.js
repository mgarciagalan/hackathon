/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    baseStyle: {
        borderRadius: 'base'
    },
    variants: {
        solid: (props) =>
            props.colorScheme === 'black'
                ? {
                      backgroundColor: 'white',
                      color: 'black',
                      textTransform: 'uppercase',
                      border: '4px solid black',
                      borderRadius: '0',
                      _hover: {
                          backgroundColor:'black',
                          color:'white', 
                          bg: 'black', 
                          _disabled: {
                              bg: 'black.100'
                            }
                        },
                      _active: {bg: 'yellow.800'},
                      _disabled: {bg: 'yellow.300'}
                  }
                : {},
        outline: (props) =>
            props.colorScheme === 'black'
                ? {
                    color: 'black.900', 
                    _hover: {bg: 'black.50'}, 
                    textTransform: 'uppercase',
                    border: '1px solid black',
                    borderRadius: '0',
                    borderColor: 'black.200'
                }
                : {color: 'black.600', _hover: {bg: 'black.50'}},
        footer: {
            fontSize: 'sm',
            backgroundColor: 'gray.100',
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
        colorScheme: 'black'
    }
}
