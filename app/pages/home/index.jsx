/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import PropTypes from 'prop-types'
import {useIntl, FormattedMessage} from 'react-intl'
import {Box, Button, Grid, GridItem, Image, Flex, Text} from '@chakra-ui/react'
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'
import {Link} from 'react-router-dom'
import Seo from '../../components/seo'
import Section from '../../components/section'
import CategoriesBlock from '../../components/custom-categories-block'
import Carousel from '../../components/custom-carousel'
import CategoryTile from '../../components/custom-category-tile'
//import Hero from '../../components/hero'
//import RecommendedProducts from '../../components/recommended-products'
import {categoriesBlock, categories, productsTop10} from './data'
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
        <Box data-testid='home-page' layerStyle='page'>
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
                        cat1={{
                            title: categoriesBlock[0].title,
                            href: categoriesBlock[0].href,
                            src: getAssetUrl(categoriesBlock[0].imgSrc),
                            alt: categoriesBlock[0].imgAlt
                        }}
                        cat2={{
                            title: categoriesBlock[1].title,
                            href: categoriesBlock[1].href,
                            src: getAssetUrl(categoriesBlock[1].imgSrc),
                            alt: categoriesBlock[1].imgAlt
                        }}
                        cat3={{
                            title: categoriesBlock[2].title,
                            href: categoriesBlock[2].href,
                            src: getAssetUrl(categoriesBlock[2].imgSrc),
                            alt: categoriesBlock[2].imgAlt
                        }}
                        cat4={{
                            title: categoriesBlock[3].title,
                            href: categoriesBlock[3].href,
                            src: getAssetUrl(categoriesBlock[3].imgSrc),
                            alt: categoriesBlock[3].imgAlt
                        }}
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
                position='relative'
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
                                        
                                        <Text
                                            as="span"
                                            letterSpacing='1px'
                                            fontSize='13px'
                                            display='block'
                                            marginLeft='75px'
                                            >
                                            {product.description}
                                        </Text>
                                    </Text>
                                </Box>
                            </Flex>
                        )
                    })}
                </Carousel>
                <Flex justifyContent='center'>
                    <Button
                        as={Link}
                        to={`/${intl.locale}/category/montaos`}
                        variant='outline'
                    >
                        Todos los montaos
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
