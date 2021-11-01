/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import PropTypes from 'prop-types'
import {Box, Img, Text, Button, useTheme} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

import {ChevronRightIcon} from '../icons'

/**
 * CategoryTile component is used on content pages like home page.
 * This component is used to promote categories, it consistents
 * of an image and a category title link.
 */
const CategoryTile = ({img, href, title, description, ...props}) => {
    const {src, alt} = img
    const theme = useTheme()
    return (
        <Box {...props}>
            <Box paddingBottom="4">
                <Link to={href}>
                    <Img
                        alt={alt}
                        src={src}
                    />
                </Link>
            </Box>
            <Box>
                <Text
                    fontWeight="bold"
                     _hover={{
                        textDecoration: 'underline'
                    }}
                    >
                    {title}
                </Text>
            </Box>
            <Box>
                <Text>
                    {description}
                </Text>
            </Box>
            <Box paddingTop="2">
                <Button
                    as={Link}
                    to={href}
                    fontSize={{base: 'sm', md: 'md', lg: 'lg'}}
                    letterSpacing='2.5px'
                    padding={{base: '10px 15px 7px', lg: '10px 25px 7px'}}
                    className="button"
                >
                    Ver {title}
                </Button>
            </Box>
        </Box>
    )
}

CategoryTile.displayName = 'CategoryTile'

CategoryTile.propTypes = {
    href: PropTypes.string.isRequired,
    img: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
    }).isRequired,
    title: PropTypes.string.isRequired
}

export default CategoryTile
