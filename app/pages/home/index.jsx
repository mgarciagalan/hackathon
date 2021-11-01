/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {useIntl, FormattedMessage} from 'react-intl'
import {Box, Button, Grid, GridItem, Stack, Image, Flex, Tag, Text, HStack, VStack, Heading} from '@chakra-ui/react'
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'
import {Link} from 'react-router-dom'
import Seo from '../../components/seo'
import Section from '../../components/section'
import CategoriesBlock from '../../components/custom-categories-block'
import Carousel from '../../components/custom-carousel'
import CategoryTile from '../../components/custom-category-tile'
//import Hero from '../../components/hero'
//import RecommendedProducts from '../../components/recommended-products'
import {categories} from './data'
import {productsTop10} from './data'
import {HideOnDesktop, HideOnMobile} from '../../components/responsive'
import {IconoElMontao} from '../../components/custom-icons'

/**
 * This is the home page for Retail React App.
 * The page is created for demonstration purposes.
 * The page renders SEO metadata and a few promotion
 * categories and products, data is from local file.
 */
const Home = () => {
    const intl = useIntl()

    return (
        <Box data-testid='home-page' layerStyle='page' 
        sx={{ '.button': {
                border: 'none',
                backgroundColor: '#07AF4F',
                color: '#fff'},
            '.button:hover': {
                border: 'none',
                backgroundColor: '#A67B5B',
                color: '#fff'}
        }} >
            <Seo
                title='El Montao'
                description='Tapas, etc.'
                keywords='el montao, bar, tapas, murcia, kilómetro 0'
            />

            <Grid templateColumns={{base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)'}} gap={{base: 8, xl: 16}} marginBottom='16'>
                <HideOnDesktop>
                    <GridItem display='flex' alignItems='center' justifyContent='center'>
                        <Image
                            width='100%'
                            maxWidth='400px'
                            objectFit='contain'
                            src={getAssetUrl('static/img/logo-el-montao-horizontal.png')}
                            alt='Logo El Montao' />
                    </GridItem>
                </HideOnDesktop>
                <GridItem display='flex' alignItems='center'>
                    <CategoriesBlock
                        spacing={4}
                        category_1={{
                            src_1: getAssetUrl('static/img/home/cat_1.jpg'),
                            alt_1: intl.formatMessage({
                                defaultMessage: 'Tapas'
                            })
                        }}
                        category_2={{
                            src_2: getAssetUrl('static/img/home/cat_2.jpg'),
                            alt_2: intl.formatMessage({
                                defaultMessage: 'Montaos'
                            })
                        }}
                        category_3={{
                            src_3: getAssetUrl('static/img/home/cat_3.jpg'),
                            alt_3: intl.formatMessage({
                                defaultMessage: 'Bebidas'
                            })
                        }}
                        category_4={{
                            src_4: getAssetUrl('static/img/home/cat_4.jpg'),
                            alt_4: intl.formatMessage({
                                defaultMessage: 'Postres'
                            })
                        }}
                        cta_1={
                            <Button
                                as={Link}
                                to={`/${intl.locale}/category/tapas`}
                                fontSize={{base: 'sm', md: 'md', lg: 'lg'}}
                                letterSpacing='2.5px'
                                padding={{base: '10px 15px 7px', lg: '10px 25px 7px'}}
                                className='button'
                            >
                                <FormattedMessage defaultMessage='Tapas' />
                            </Button>
                        }
                        cta_2={
                            <Button
                                as={Link}
                                to={`/${intl.locale}/category/montaos`}
                                fontSize={{base: 'sm', md: 'md', lg: 'lg'}} 
                                letterSpacing='2.5px'
                                padding={{base: '10px 15px 7px', lg: '10px 25px 7px'}}
                                className='button'
                            >
                                <FormattedMessage defaultMessage='Montaos' />
                            </Button>
                        }
                        cta_3={
                            <Button
                                as={Link}
                                to={`/${intl.locale}/category/bebidas`}
                                fontSize={{base: 'sm', md: 'md', lg: 'lg'}} 
                                letterSpacing='2.5px'
                                padding={{base: '10px 15px 7px', lg: '10px 25px 7px'}}
                                className='button'
                            >
                                <FormattedMessage defaultMessage='Bebidas' />
                            </Button>
                        }
                        cta_4={
                            <Button
                                as={Link}
                                to={`/${intl.locale}/category/postres`}
                                fontSize={{base: 'sm', md: 'md', lg: 'lg'}} 
                                letterSpacing='2.5px'
                                padding={{base: '10px 15px 7px', lg: '10px 25px 7px'}}
                                className='button'
                            >
                                <FormattedMessage defaultMessage='Postres' />
                            </Button>
                        }
                    />
                </GridItem>
                <HideOnMobile>
                    <GridItem display='flex' alignItems='center'>
                        <Image
                            width='100%'
                            maxHeight='500px'
                            objectFit='contain'
                            src={getAssetUrl('static/img/logo-el-montao-full.png')}
                            alt='Logo El Montao' />
                    </GridItem>
                </HideOnMobile>
            </Grid>

            <Section
                title={intl.formatMessage({
                    defaultMessage: 'Montaos'
                })}
                subtitle={intl.formatMessage({
                    defaultMessage: 'Top 10'
                })}
            >
                <Carousel gap={32}>
                    {productsTop10.map((product, index) => {
                        return (
                            <Flex
                                key={index}
                                justifyContent='space-between'
                                flexDirection='column'
                                overflow='hidden'
                                flex={1}
                                p={5}
                                >
                                <Box paddingBottom='1'>
                                    <Link to={product.href}>
                                        <Image
                                            alt={product.imgAlt}
                                            src={getAssetUrl(product.imgSrc)}
                                        />
                                    </Link>
                                </Box>
                                <Box>
                                    <IconoElMontao
                                        display='inline'
                                        position='relative'
                                        marginLeft='-25px'
                                        marginTop='-85px'
                                        width='auto'
                                        height='100px'
                                    />
                                    <Text
                                        letterSpacing='1px'
                                        fontFamily='Agrandir-GrandHeavy'
                                        fontSize='14px'
                                        display='inline'
                                        >
                                        {product.productName}
                                    </Text>
                                </Box>
                            </Flex>
                        )
                    })}
                </Carousel>
                <Flex>
                    <Button
                        as={Link}
                        to={`/${intl.locale}/category/2`}
                        fontSize={{base: 'sm', md: 'md', lg: 'lg'}}
                        letterSpacing='2.5px'
                        padding={{base: '10px 15px 7px', lg: '10px 25px 7px'}}
                        className='button button-outline'
                    >
                        Ver montaditos
                    </Button>
                </Flex>
            </Section>

            <Section
                title={intl.formatMessage({
                    defaultMessage: 'Carta'
                })}
                subtitle={intl.formatMessage({
                    defaultMessage: 'Murcia Km 0'
                })}
            >
                <Grid
                    templateColumns={{base: 'repeat(1, 4fr)', md: 'repeat(2, 2fr)', xl: 'repeat(4, 1fr)'}}
                    columnGap={6}
                    rowGap={8}
                >
                    {categories.map((item, index) => {
                        const category = item.message
                        return (
                            <GridItem key={index}>
                                <CategoryTile
                                    title={intl.formatMessage(category.title)}
                                    href={intl.formatMessage(category.href, {
                                        activeLocale: intl.locale
                                    })}
                                    img={{
                                        src: getAssetUrl(intl.formatMessage(category.imgSrc)),
                                        alt: intl.formatMessage(category.imgAlt)
                                    }}
                                    description={intl.formatMessage(category.description)}
                                />
                            </GridItem>
                        )
                    })}
                </Grid>
            </Section>

            {/*<Stack spacing={16}>
                <RecommendedProducts
                    title={<FormattedMessage defaultMessage='Top Sellers' />}
                    recommender={'home-top-revenue-for-category'}
                    mx={{base: -4, md: -8, lg: 0}}
                />

                <RecommendedProducts
                    title={<FormattedMessage defaultMessage='Most Viewed' />}
                    recommender={'products-in-all-categories'}
                    mx={{base: -4, md: -8, lg: 0}}
                />
                </Stack>*/}
        </Box>
    )
}

Home.getTemplateName = () => 'home'
Home.propTypes = {
    recommendations: PropTypes.array,
    isLoading: PropTypes.bool
}

Home.getProps = async ({res}) => {
    // Since the home page is static, it is safe to set max age to a high value
    // we set it to a year here, but you can set the value that is suitable for your project
    if (res) {
        res.set('Cache-Control', 'max-age=31536000')
    }
}

export default Home
