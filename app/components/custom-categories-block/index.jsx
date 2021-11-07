/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import PropTypes from 'prop-types'
import {Flex, VStack, Grid, GridItem, Image, Button} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

const CategoriesBlock = ({cat1, cat2, cat3, cat4}) => {
    return (
        <Grid templateColumns={{base: 'repeat(2, 2fr)'}} gap={0}>
            <GridItem position={{base: 'relative'}} marginLeft={{base: '5px', md: '15px'}} marginRight={{base: '5px', md: '15px'}} 
                    _hover={{
                        '.block-image': {
                            transition:'transform .3s',
                            transform: 'scale(1.05)'
                        }
                    }}>
                <Flex
                    justifyContent={{base: 'flex-end'}}
                    height="full"
                >
                    <Image
                        width="90%"
                        objectFit="contain"
                        alt={cat1.alt}
                        src={cat1.src}
                        className='block-image' />
                </Flex>
                <VStack
                    alignItems="flex-start"
                    position={{base: 'absolute'}}
                    top={{base: '93%'}}
                    transform={{base: 'translateY(-93%)'}}
                >
                    <Button
                        as={Link}
                        to={cat1.href}
                        fontSize={{base: 'sm', md: 'md', lg: 'lg'}}
                        letterSpacing='2.5px'
                        padding={{base: '10px 15px 7px', lg: '10px 25px 7px'}}
                        className='button'
                    >
                        {cat1.title}
                    </Button>
                </VStack>
            </GridItem>
            <GridItem position={{base: 'relative'}} marginLeft={{base: '5px', md: '15px'}} marginRight={{base: '5px', md: '15px'}} marginTop="20%" 
                    _hover={{
                        '.block-image': {
                            transition:'transform .3s',
                            transform: 'scale(1.05)'
                        }
                    }}>
                <Flex
                    justifyContent={{base: 'flex-start'}}
                    height="full"
                >
                    <Image
                        width="90%"
                        objectFit="contain"
                        alt={cat2.alt}
                        src={cat2.src} 
                        className='block-image'/>
                </Flex>
                <VStack
                    alignItems="flex-end"
                    position={{base: 'absolute'}}
                    top={{base: '108%'}}
                    right={0}
                    transform={{base: 'translateY(-108%)'}}
                >
                    <Button
                        as={Link}
                        to={cat2.href}
                        fontSize={{base: 'sm', md: 'md', lg: 'lg'}}
                        letterSpacing='2.5px'
                        padding={{base: '10px 15px 7px', lg: '10px 25px 7px'}}
                        className='button'
                    >
                        {cat2.title}
                    </Button>
                </VStack>
            </GridItem>
            <GridItem position={{base: 'relative'}} marginLeft={{base: '5px', md: '15px'}} marginRight={{base: '5px', md: '15px'}}
                    _hover={{
                        '.block-image': {
                            transition:'transform .3s',
                            transform: 'scale(1.05)'
                        }
                    }}>
                <Flex
                    justifyContent={{base: 'flex-end'}}
                    height="full"
                >
                    <Image
                        width="90%"
                        objectFit="contain"
                        alt={cat3.alt}
                        src={cat3.src}
                        className='block-image' />
                </Flex>
                <VStack
                    alignItems="flex-start"
                    position={{base: 'absolute'}}
                    top={{base: '93%'}}
                    transform={{base: 'translateY(-93%)'}}
                >
                    <Button
                        as={Link}
                        to={cat3.href}
                        fontSize={{base: 'sm', md: 'md', lg: 'lg'}}
                        letterSpacing='2.5px'
                        padding={{base: '10px 15px 7px', lg: '10px 25px 7px'}}
                        className='button'
                    >
                        {cat3.title}
                    </Button>
                </VStack>
            </GridItem>
            <GridItem position={{base: 'relative'}} marginLeft={{base: '5px', md: '15px'}} marginRight={{base: '5px', md: '15px'}} marginTop="20%" 
                    _hover={{
                        '.block-image': {
                            transition:'transform .3s',
                            transform: 'scale(1.05)'
                        }
                    }}>
                <Flex
                    justifyContent={{base: 'flex-start'}}
                    height="full"
                >
                    <Image
                        width="90%"
                        objectFit="contain"
                        alt={cat4.alt}
                        src={cat4.src}
                        className='block-image' />
                </Flex>
                <VStack
                    alignItems="flex-end"
                    position={{base: 'absolute'}}
                    top={{base: '108%'}}
                    right={0}
                    transform={{base: 'translateY(-108%)'}}
                >
                    <Button
                        as={Link}
                        to={cat4.href}
                        fontSize={{base: 'sm', md: 'md', lg: 'lg'}}
                        letterSpacing='2.5px'
                        padding={{base: '10px 15px 7px', lg: '10px 25px 7px'}}
                        className='button'
                    >
                        {cat4.title}
                    </Button>
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
