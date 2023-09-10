import {
  Button,
  Container,
  HStack,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          margin={'auto'}
          w={['100%', '96']}
        >
          <Heading>Welcome</Heading>

          <Input
            type="email"
            placeholder="Email"
            required
            focusBorderColor="purple.500"
          />
          <Input
            type="password"
            placeholder="Password"
            required
            focusBorderColor="purple.500"
          />
          <HStack justifyContent={'space-between'} px={'1'}>
            <Button variant={'link'}>
              <Link to={'/signup'}>New User?</Link>
            </Button>
            <Button variant={'link'}>
              <Link to={'/forget'}>Forget Password?</Link>
            </Button>
          </HStack>
          <Button colorScheme="purple" type="submit">
            Log In
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
