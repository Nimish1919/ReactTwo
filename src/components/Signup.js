import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          margin={'auto'}
          w={['100%', '96']}
        >
          <Heading textTransform={'uppercase'} alignSelf={'center'}>
            Video Hub
          </Heading>

          <Input
            type="text"
            placeholder="Name"
            required
            focusBorderColor="purple.500"
          />
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
          <Button colorScheme="purple" type="submit">
            Log In
          </Button>
          <Text alignSelf={'flex-end'}>
            Already Signed Up?
            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={'/login'}>LogIn</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
