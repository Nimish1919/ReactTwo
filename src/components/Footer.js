import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  AiOutlineSend,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from 'react-icons/ai';
import React from 'react';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} p={'2'}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'}>
            <Input
              placeholder={'Enter your email id..'}
              border={'none'}
              borderRadius={'0px'}
              outline={'none'}
              focusBorderColor="transparent"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0px 20px 20px 0px'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>
        <VStack w={'full'} borderLeft={['none', '2px solid white']}>
          <Heading textTransform={'uppercase'}>Videos Hub</Heading>
          <Text>All rights reserved</Text>
        </VStack>
        <VStack w={'full'} borderLeft={['none', '2px solid white']} p={'2'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <HStack>
            <Button p={'0px'} colorScheme="white">
              <a target="blank" href="https://www.linkedin.com/in/nimisht19/">
                <AiFillLinkedin size={'30'} />
              </a>
            </Button>
            <Button p={'0px'} colorScheme="white">
              <a target="blank" href="https://github.com/Nimish1919">
                <AiFillGithub size={'30'} />
              </a>
            </Button>
            <Button p={'0px'} colorScheme="white">
              <a target="blank" href="https://instagram.com/its.me.nimeee">
                <AiFillInstagram size={'30'} />
              </a>
            </Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
