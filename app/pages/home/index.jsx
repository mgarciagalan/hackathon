/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { capsFirst } from "../../utils";
import {useIntl, FormattedMessage} from 'react-intl'
import {Box, Button, Grid, GridItem, Stack, Image, Flex, Tag, Text, HStack, VStack, Heading} from '@chakra-ui/react'
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'
import {Link} from 'react-router-dom'
import CategoriesBlock from '../../components/custom-categories-block'
import Carousel from "../../components/custom-carousel";
//import Hero from '../../components/hero'
import Seo from '../../components/seo'
import Section from '../../components/section'
import BasicTile from '../../components/basic-tile'
import {categoriesThreeColumns, categoriesTwoColumns} from './data'
import RecommendedProducts from '../../components/recommended-products'
import {HideOnDesktop, HideOnMobile} from '../../components/responsive'

/**
 * This is the home page for Retail React App.
 * The page is created for demonstration purposes.
 * The page renders SEO metadata and a few promotion
 * categories and products, data is from local file.
 */
const Home = () => {
    const intl = useIntl()

    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts/")
        .then((res) => res.json())
        .then((res) => setData(res));
    }, []);

    return (
        <Box data-testid="home-page" layerStyle="page" 
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
                title="El Montao"
                description="Tapas, etc."
                keywords="el montao, bar, tapas, murcia, kilómetro 0"
            />

            <Grid templateColumns={{base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)'}} gap={{base: 8, xl: 16}} marginBottom="16">
                <HideOnDesktop>
                    <GridItem display="flex" alignItems="center" justifyContent="center">
                        <Image
                            width="100%"
                            maxWidth="400px"
                            objectFit="contain"
                            src={getAssetUrl('static/img/logo-el-montao-horizontal.png')}
                            alt="Logo El Montao" />
                    </GridItem>
                </HideOnDesktop>
                <GridItem display="flex" alignItems="center">
                    <CategoriesBlock
                        spacing={4}
                        category_1={{
                            src_1: getAssetUrl('static/img/home/cat_1.jpg'),
                            alt_1: intl.formatMessage({
                                defaultMessage: 'Montaditos'
                            })
                        }}
                        category_2={{
                            src_2: getAssetUrl('static/img/home/cat_2.jpg'),
                            alt_2: intl.formatMessage({
                                defaultMessage: 'Tapas'
                            })
                        }}
                        category_3={{
                            src_3: getAssetUrl('static/img/home/cat_3.jpg'),
                            alt_3: intl.formatMessage({
                                defaultMessage: 'Raciones'
                            })
                        }}
                        category_4={{
                            src_4: getAssetUrl('static/img/home/cat_4.jpg'),
                            alt_4: intl.formatMessage({
                                defaultMessage: 'Bebidas'
                            })
                        }}
                        cta_1={
                            <Button
                                as={Link}
                                to={`/${intl.locale}/category/newarrivals`}
                                fontSize={{base: 'sm', md: 'md', lg: 'lg'}}
                                letterSpacing='2.5px'
                                padding={{base: '0 10px', md: '10px 15px', lg: '20px 25px'}}
                                className="button"
                            >
                                <FormattedMessage defaultMessage="Montaditos" />
                            </Button>
                        }
                        cta_2={
                            <Button
                                as={Link}
                                to={`/${intl.locale}/category/newarrivals`}
                                fontSize={{base: 'sm', md: 'md', lg: 'lg'}} 
                                letterSpacing='2.5px'
                                padding={{base: '0 10px', md: '10px 15px', lg: '20px 25px'}}
                                className="button"
                            >
                                <FormattedMessage defaultMessage="Tapas" />
                            </Button>
                        }
                        cta_3={
                            <Button
                                as={Link}
                                to={`/${intl.locale}/category/newarrivals`}
                                fontSize={{base: 'sm', md: 'md', lg: 'lg'}} 
                                letterSpacing='2.5px'
                                padding={{base: '0 10px', md: '10px 15px', lg: '20px 25px'}}
                                className="button"
                            >
                                <FormattedMessage defaultMessage="Raciones" />
                            </Button>
                        }
                        cta_4={
                            <Button
                                as={Link}
                                to={`/${intl.locale}/category/newarrivals`}
                                fontSize={{base: 'sm', md: 'md', lg: 'lg'}} 
                                letterSpacing='2.5px'
                                padding={{base: '0 10px', md: '10px 15px', lg: '20px 25px'}}
                                className="button"
                            >
                                <FormattedMessage defaultMessage="Bebidas" />
                            </Button>
                        }
                    />
                </GridItem>
                <HideOnMobile>
                    <GridItem display="flex" alignItems="center">
                        <Image
                            width="100%"
                            maxHeight="500px"
                            objectFit="contain"
                            src={getAssetUrl('static/img/logo-el-montao-full.png')}
                            alt="Logo El Montao" />
                    </GridItem>
                </HideOnMobile>
            </Grid>

            <Section
                title={intl.formatMessage({
                    defaultMessage: 'Montaditos'
                })}
                subtitle={intl.formatMessage({
                    defaultMessage: 'Top 10'
                })}
            >
                <Carousel gap={32}>
                {data.slice(5, 15).map((post, index) => (
                    <Flex
                    key={index}
                    boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                    justifyContent="space-between"
                    flexDirection="column"
                    overflow="hidden"
                    //color="gray.300"
                    //bg="base.d100"
                    rounded={5}
                    flex={1}
                    p={5}
                    >
                    <VStack mb={6}>
                        <Heading
                        fontSize={{ base: "xl", md: "2xl" }}
                        textAlign="left"
                        w="full"
                        mb={2}
                        >
                        {capsFirst(post.title)}
                        </Heading>
                        <Text w="full">{capsFirst(post.body)}</Text>
                    </VStack>

                    <Flex justifyContent="space-between">
                        <HStack spacing={2}>
                        <Tag size="sm" variant="outline" colorScheme="green">
                            User: {post.userId}
                        </Tag>
                        <Tag size="sm" variant="outline" colorScheme="cyan">
                            Post: {post.id - 5}
                        </Tag>
                        </HStack>
                        <Button
                        onClick={() => alert(`Post ${post.id - 5} clicked`)}
                        colorScheme="green"
                        fontWeight="bold"
                        color="gray.900"
                        size="sm"
                        >
                        More
                        </Button>
                    </Flex>
                    </Flex>
                ))}
                </Carousel>
            </Section>

            <Section
                title={intl.formatMessage({
                    defaultMessage: 'Shop by Category'
                })}
            >
                <Grid
                    templateRows={{base: 'repeat(1, 1fr)', md: 'repeat(auto, 1fr)'}}
                    templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(6, 1fr)'}}
                    columnGap={6}
                    rowGap={8}
                >
                    {categoriesThreeColumns.map((item, index) => {
                        const category = item.message
                        return (
                            <GridItem key={index} rowSpan={1} colSpan={{base: 1, md: 2}}>
                                <BasicTile
                                    title={intl.formatMessage(category.title)}
                                    href={intl.formatMessage(category.href, {
                                        activeLocale: intl.locale
                                    })}
                                    img={{
                                        src: getAssetUrl(intl.formatMessage(category.imgSrc)),
                                        alt: intl.formatMessage(category.imgAlt)
                                    }}
                                />
                            </GridItem>
                        )
                    })}

                    {categoriesTwoColumns.map((item, index) => {
                        const category = item.message
                        return (
                            <GridItem key={index} rowSpan={1} colSpan={{base: 1, md: 3}}>
                                <BasicTile
                                    title={intl.formatMessage(category.title)}
                                    href={intl.formatMessage(category.href, {
                                        activeLocale: intl.locale
                                    })}
                                    img={{
                                        src: getAssetUrl(intl.formatMessage(category.imgSrc)),
                                        alt: intl.formatMessage(category.imgAlt)
                                    }}
                                />
                            </GridItem>
                        )
                    })}
                </Grid>
            </Section>

            <Stack spacing={16}>
                <RecommendedProducts
                    title={<FormattedMessage defaultMessage="Top Sellers" />}
                    recommender={'home-top-revenue-for-category'}
                    mx={{base: -4, md: -8, lg: 0}}
                />

                <RecommendedProducts
                    title={<FormattedMessage defaultMessage="Most Viewed" />}
                    recommender={'products-in-all-categories'}
                    mx={{base: -4, md: -8, lg: 0}}
                />
            </Stack>
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
