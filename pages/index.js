import Head from 'next/head'
import { useAuth } from '../lib/auth'
import { Button, Text, Heading, Code, Icon, Flex } from '@chakra-ui/react'

export default function Index() {
  const auth = useAuth()

  return (

    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh">

      <Heading>
        <title>Fast Feedback</title>
      </Heading>
      <Icon color="black" name="logo" size="32px" />

      {auth.user ? (
        <Button onClick={(e) => auth.signout()}>Sign Out</Button>
      ) : (
        <Button mt={4} variant="link" size="sm" onClick={(e) => auth.signinWithGitHub()}>Sign In</Button>
      )}
    </Flex>

  )
}