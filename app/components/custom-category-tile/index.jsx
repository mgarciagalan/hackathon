/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import PropTypes from 'prop-types'
import {Box, Img, Text, Button, useTheme, Flex} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

/**
 * CategoryTile component is used on content pages like home page.
 * This component is used to promote categories, it consistents
 * of an image and a category title link.
 */
const CategoryTile = ({img, href, title, description, ...props}) => {
    const {src, alt} = img
    const theme = useTheme()
    return (
        <Box {...props}
            _hover={{
                '.cat-image': {
                    transition:'transform .2s',
                    transform: 'scale(1.02)'
                }
            }}
        >
            <Box paddingBottom="4">
                <Link to={href}>
                    <Img
                        alt={alt}
                        src={src}
                        className='cat-image'
                    />
                </Link>
            </Box>
            <Box>
                <Text>
                    {description}
                </Text>
            </Box>
            <Flex paddingTop="2">
                <Button
                    as={Link}
                    to={href}
                    fontSize={{base: 'sm', lg: 'md'}}
                >
                    Ver {title}
                </Button>
            </Flex>
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
