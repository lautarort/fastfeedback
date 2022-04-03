import React from 'react'
import { Box, Skeleton, Link } from '@chakra-ui/react'
import { Table, Tr, Th, Td } from './Table'



const SiteTable = ({ sites }) => {
    return (
        <Table>
            <thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Site Link</Th>
                    <Th>Feedback Link</Th>
                    <Th>Date Added</Th>
                    <Th>{''}</Th>
                </Tr>
            </thead>
            <tbody>
                {sites.map((site) => (
                    // eslint-disable-next-line react/jsx-key
                    <Box as="tr">
                        <Td>{site.name}</Td>
                        <Td>{site.url}</Td>
                        <Td>
                            <Link>View Feedback</Link>
                        </Td>
                        <Td>{site.createdAt}</Td>
                    </Box>
                ))}
            </tbody>
        </Table>
    )
}

export default SiteTable