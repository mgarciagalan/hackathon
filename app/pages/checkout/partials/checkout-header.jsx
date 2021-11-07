/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {FormattedMessage, FormattedNumber} from 'react-intl'
import {useIntl} from 'react-intl'
import {Badge, Box, Button, Flex, Center, IconButton, useMultiStyleConfig} from '@chakra-ui/react'
import useBasket from '../../../commerce-api/hooks/useBasket'
import Link from '../../../components/link'
import {BasketIcon, BrandLogo} from '../../../components/icons'
import {LogoElMontaoMin} from '../../../components/custom-icons'


const CheckoutHeader = () => {
    const basket = useBasket()
    const intl = useIntl()
    const styles = useMultiStyleConfig('Header')

    return (
        <Box px={[4, 4, 8]} bg="white" borderBottom="1px" borderColor="gray.100">
            <Box maxWidth="container.xxxl" marginLeft="auto" marginRight="auto">
                <Flex h={{base: '52px', md: '80px'}} align="center" justify="space-between">
                    <Link href="/" title="Back to homepage">
                        <IconButton
                        aria-label={intl.formatMessage({
                            id: 'header.button.assistive_msg.logo',
                            defaultMessage: 'Logo',
                        })}
                        icon={<LogoElMontaoMin {...styles.logo} />}
                        {...styles.logoBtn}
                        variant="unstyled"
                        />
                    </Link>

                    <Button
                        as={Link}
                        href="/cart"
                        display="inline-flex"
                        variant="unstyled"
                        color="gray.900"
                        rightIcon={
                            <Center position="relative" width={11} height={11}>
                                <BasketIcon position="absolute" left="0px" />
                                <Badge variant="notification">{basket.itemAccumulatedCount}</Badge>
                            </Center>
                        }
                    >
                        <FormattedMessage defaultMessage="Back to cart" />
                    </Button>
                </Flex>
            </Box>
        </Box>
    )
}

export default CheckoutHeader
