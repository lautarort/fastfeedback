import { useAuth } from '../lib/auth'
import { Button, Text, Heading, Code, Flex } from '@chakra-ui/react'

export default function Index() {
  const auth = useAuth()

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <main>
        {/* <Heading>Fast Feedback</Heading> */}

        {auth.user ? (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button mt={4} size="sm" onClick={(e) => auth.signinWithGitHub()}>Sign In</Button>
        )}
      </main>
    </Flex>
  )
}