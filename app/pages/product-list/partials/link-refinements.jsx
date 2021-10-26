/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, {useContext} from 'react'
import {Stack, Text} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import Link from '../../../components/link'
import {useParams} from 'react-router-dom'

import {Box} from '@chakra-ui/react'

import {CategoriesContext} from '../../../contexts'

const LinkRefinements = ({filter}) => {
    const {categories} = useContext(CategoriesContext)

    const params = useParams()

    // let category = categories[params.categoryId]

    return (
        <Stack spacing={1}>
            <Box>
                {categories.root.categories.map((categoryRoot) => {
                    return (
                        <Link
                            display="flex"
                            alignItems="center"
                            lineHeight={{base: '44px', lg: '40px'}}
                            key={categoryRoot.id}
                            href={`/category/${categoryRoot.id}`}
                            useNavLink
                            paddingLeft={
                                categoryRoot.id === params.categoryId ||
                                categoryRoot.parentCategoryTree.includes(params.categoryId)
                                    ? '13px'
                                    : '20px'
                            }
                            borderLeftWidth={'6px'}
                            borderColor="#07AF4F"
                            backgroundColor={'#FBFBFC'}
                            borderStyle={
                                categoryRoot.id === params.categoryId ||
                                categoryRoot.parentCategoryTree.includes(params.categoryId)
                                    ? 'solid'
                                    : 'none'
                            }
                        >
                            <Text
                                fontWeight={
                                    categoryRoot.id === params.categoryId ||
                                    categoryRoot.parentCategoryTree.includes(params.categoryId)
                                        ? 'bold'
                                        : 'inherit'
                                }
                                fontSize="sm"
                            >
                                {categoryRoot.name}
                            </Text>
                        </Link>
                    )
                })}
            </Box>
        </Stack>
    )
}

LinkRefinements.propTypes = {
    filter: PropTypes.object
}

export default LinkRefinements
