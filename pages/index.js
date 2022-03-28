import { useAuth } from '../lib/auth'
import { Button, Text, Heading, Code } from '@chakra-ui/react'

export default function Index() {
  const auth = useAuth()

  return (
    <div>
      <main>
        <Heading>Fast Feedback</Heading>
        <Text>
          Current user: <Code>{auth.user ? auth.user.email : 'None'}</Code>
        </Text>

        {auth.user ? (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={(e) => auth.signinWithGitHub()}>Sign In</Button>
        )}
      </main>
    </div>
  )
}