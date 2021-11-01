/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import PropTypes from 'prop-types'
import {Box, Heading, Text} from '@chakra-ui/react'

/**
 * Section component used on content pages like home page.
 * This component helps with creating a consistent layout and
 * consistent typography styles for section headings.
 */
const Section = ({title, subtitle, children, ...props}) => {
    return (
        <Box paddingBottom="16" paddingTop="16" {...props}>
            <Heading as="h2" fontSize={{base: 'lg', md: 'xl'}} textAlign={{base: 'center', lg: 'left'}} marginBottom="8" textTransform='uppercase' fontWeight='400' letterSpacing='1.2px'>
                <Text as="span" backgroundColor='#07AF4F' padding='10px 10px 7px'>{title}</Text>
                <Text as="span" padding='10px 10px 7px'>{subtitle}</Text>
            </Heading>
            {children}
        </Box>
    )
}

Section.displayName = 'Section'

Section.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.node
}

export default Section
