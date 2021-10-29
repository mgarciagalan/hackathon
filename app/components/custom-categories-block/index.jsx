/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import PropTypes from 'prop-types'
import {Box, Flex, VStack, Grid, GridItem, Image} from '@chakra-ui/react'

const CategoriesBlock = ({category_1, category_2, category_3, category_4, cta_1, cta_2, cta_3, cta_4, ...props}) => {
    const {src_1, alt_1} = category_1
    const {src_2, alt_2} = category_2
    const {src_3, alt_3} = category_3
    const {src_4, alt_4} = category_4

    return (
        <Grid templateColumns={{base: 'repeat(2, 2fr)'}} gap={0}>
            <GridItem position={{base: 'relative'}} marginLeft={{base: '5px', md: '15px'}} marginRight={{base: '5px', md: '15px'}}>
                <Flex
                    justifyContent={{base: 'flex-end'}}
                    height="full"
                >
                    <Image
                        width="90%"
                        objectFit="contain"
                        alt={alt_1}
                        src={src_1} />
                </Flex>
                <VStack
                    alignItems="flex-start"
                    position={{base: 'absolute'}}
                    top={{base: '93%'}}
                    transform={{base: 'translateY(-93%)'}}
                >
                    {cta_1 && (
                        <Box paddingTop="2">
                            {cta_1}
                        </Box>
                    )}
                </VStack>
            </GridItem>
            <GridItem position={{base: 'relative'}} marginLeft="15px" marginRight="15px" marginTop="20%">
                <Flex
                    justifyContent={{base: 'flex-start'}}
                    height="full"
                >
                    <Image
                        width="90%"
                        objectFit="contain"
                        alt={alt_2}
                        src={src_2} />
                </Flex>
                <VStack
                    alignItems="flex-end"
                    position={{base: 'absolute'}}
                    top={{base: '108%'}}
                    right={0}
                    transform={{base: 'translateY(-108%)'}}
                >
                    {cta_2 && (
                        <Box paddingTop="2">
                            {cta_2}
                        </Box>
                    )}
                </VStack>
            </GridItem>
            <GridItem position={{base: 'relative'}} marginLeft="15px" marginRight="15px">
                <Flex
                    justifyContent={{base: 'flex-end'}}
                    height="full"
                >
                    <Image
                        width="90%"
                        objectFit="contain"
                        alt={alt_3}
                        src={src_3} />
                </Flex>
                <VStack
                    alignItems="flex-start"
                    position={{base: 'absolute'}}
                    top={{base: '93%'}}
                    transform={{base: 'translateY(-93%)'}}
                >
                    {cta_3 && (
                        <Box paddingTop="2">
                            {cta_3}
                        </Box>
                    )}
                </VStack>
            </GridItem>
            <GridItem position={{base: 'relative'}} marginLeft="15px" marginRight="15px" marginTop="20%">
                <Flex
                    justifyContent={{base: 'flex-start'}}
                    height="full"
                >
                    <Image
                        width="90%"
                        objectFit="contain"
                        alt={alt_4}
                        src={src_4} />
                </Flex>
                <VStack
                    alignItems="flex-end"
                    position={{base: 'absolute'}}
                    top={{base: '108%'}}
                    right={0}
                    transform={{base: 'translateY(-108%)'}}
                >
                    {cta_4 && (
                        <Box paddingTop="2">
                            {cta_4}
                        </Box>
                    )}
                </VStack>
            </GridItem>
        </Grid>
    )
}

CategoriesBlock.displayName = 'CategoriesBlock'

CategoriesBlock.propTypes = {
    /**
     * Promotion label
     */
    label: PropTypes.string,
    /**
     * CategoriesBlock component image
     */
    img: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
    }),
    /**
     * CategoriesBlock component main title
     */
    title: PropTypes.string,
    /**
     * Call to action component(s)
     */
    actions: PropTypes.element
}

export default CategoriesBlock
