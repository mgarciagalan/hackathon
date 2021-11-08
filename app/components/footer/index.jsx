/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'
import {
    Box,
    Text,
    Divider,
    SimpleGrid,
    useMultiStyleConfig,
    StylesProvider,
    Select,
    useStyles,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    Image
} from '@chakra-ui/react'
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'
import {useIntl} from 'react-intl'

import LinksList from '../links-list'
import SocialIcons from '../social-icons'
import {HideOnDesktop, HideOnMobile} from '../responsive'
import {defaultLocaleMessages} from '../_app'
import {SUPPORTED_LOCALES} from '../../constants'
import {buildUrlLocale} from '../../utils/url'

const Footer = ({...otherProps}) => {
    const styles = useMultiStyleConfig('Footer')
    const intl = useIntl()

    return (
        <Box as="footer" {...styles.container} {...otherProps}>
            <Box {...styles.content}>
                <StylesProvider value={styles}>
                    <HideOnMobile>
                        <SimpleGrid columns={4} spacing={3}>
                            <Box>
                                <Image
                                width='100%'
                                maxWidth='400px'
                                objectFit='contain'
                                paddingRight='20px'
                                src={getAssetUrl('static/img/logo-el-montao-horizontal.png')}
                                alt='Logo El Montao' />
                            </Box>
                            <LinksList
                                heading={intl.formatMessage({
                                    id: 'footer.column.customer_support',
                                    defaultMessage: 'Customer Support'
                                })}
                                links={[
                                    {
                                        href: '/',
                                        text: intl.formatMessage({
                                            id: 'footer.link.contact_us',
                                            defaultMessage: 'Contact Us'
                                        })
                                    },
                                    {
                                        href: '/',
                                        text: intl.formatMessage({
                                            id: 'footer.link.shipping',
                                            defaultMessage: 'Shipping'
                                        })
                                    }
                                ]}
                            />
                            <LinksList
                                heading={intl.formatMessage({
                                    id: 'footer.column.our_company',
                                    defaultMessage: 'Our Company'
                                })}
                                links={[
                                    {
                                        href: '/',
                                        text: intl.formatMessage({
                                            id: 'footer.link.store_locator',
                                            defaultMessage: 'Store Locator'
                                        })
                                    },
                                    {
                                        href: '/',
                                        text: intl.formatMessage({
                                            id: 'footer.link.about_us',
                                            defaultMessage: 'About Us'
                                        })
                                    }
                                ]}
                            />
                            <Box>
                                <Subscribe />
                            </Box>
                        </SimpleGrid>
                    </HideOnMobile>

                    <HideOnDesktop>
                        <Subscribe />
                    </HideOnDesktop>
                     
                    {/*<Box {...styles.localeSelector}>
                        <FormControl
                            data-testid="sf-footer-locale-selector"
                            id="locale_selector"
                            width="auto"
                            {...otherProps}
                        >
                            <Select
                                value={intl.locale}
                                onChange={({target}) => {
                                    // Update the `locale` in the URL.
                                    const newUrl = buildUrlLocale(intl.locale, target.value)
                                    window.location = newUrl
                                }}
                                variant="filled"
                                {...styles.localeDropdown}
                            >
                                {SUPPORTED_LOCALES.map((locale) => (
                                    <option key={locale} value={locale}>
                                        {intl.formatMessage(defaultLocaleMessages[locale])}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>*/}

                    <Divider {...styles.horizontalRule} />

                    <Box {...styles.bottomHalf}>
                        <Text {...styles.copyright}>
                            &copy;{' '}
                            {intl.formatMessage({
                                id: 'footer.message.copyright',
                                defaultMessage:
                                    '2021 El Montao. Tapas, etc. Todos los derechos reservados.'
                            })}
                        </Text>

                        <HideOnDesktop>
                            <LegalLinks variant="vertical" />
                        </HideOnDesktop>
                        <HideOnMobile>
                            <LegalLinks variant="horizontal" />
                        </HideOnMobile>
                    </Box>
                </StylesProvider>
            </Box>
        </Box>
    )
}

export default Footer

const Subscribe = ({...otherProps}) => {
    const styles = useStyles()
    const intl = useIntl()

    return (
        <Box {...styles.subscribe} {...otherProps}>
            <Heading {...styles.subscribeHeading}>
                {intl.formatMessage({
                    id: 'footer.subscribe.heading.first_to_know',
                    defaultMessage: 'La newsletter de El montao'
                })}
            </Heading>
            <Text {...styles.subscribeMessage}>
                {intl.formatMessage({
                    id: 'footer.subscribe.description.sign_up',
                    defaultMessage: 'Las últimas novedades sobre consumo responsable y km 0 en tu correo.'
                })}
            </Text>

            <Box>
                <InputGroup>
                    <Input type="email" placeholder="Introduce tu email" {...styles.subscribeField} />
                    <InputRightElement {...styles.subscribeButtonContainer}>
                        <Button variant="footer">
                            {intl.formatMessage({
                                id: 'footer.subscribe.button.sign_up',
                                defaultMessage: '¡Me suscribo!'
                            })}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Box>

            <SocialIcons variant="flex-start" pinterestInnerColor="black" {...styles.socialIcons} />
        </Box>
    )
}

const LegalLinks = ({variant}) => {
    const intl = useIntl()
    return (
        <LinksList
            links={[
                {
                    href: '/',
                    text: intl.formatMessage({
                        id: 'footer.link.terms_conditions',
                        defaultMessage: 'Términos & Condiciones'
                    })
                },
                {
                    href: '/',
                    text: intl.formatMessage({
                        id: 'footer.link.privacy_policy',
                        defaultMessage: 'Política de Privacidad'
                    })
                },
                {
                    href: '/',
                    text: intl.formatMessage({
                        id: 'footer.link.site_map',
                        defaultMessage: 'Mapa del sitio'
                    })
                }
            ]}
            color="gray.200"
            variant={variant}
        />
    )
}
LegalLinks.propTypes = {
    variant: PropTypes.oneOf(['vertical', 'horizontal'])
}
