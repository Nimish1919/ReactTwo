import React from 'react';

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';

import { HiMenuAlt1 } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme={'purple'}
        paddingX={'3'}
        borderRadius={'full'}
        zIndex={'1'}
      >
        <HiMenuAlt1 size={'20'} onClick={onOpen} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Video Hub</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} color={'purple'} variant={'ghost'}>
                <Link to={'/'}>Home</Link>
              </Button>

              <Button onClick={onClose} color={'purple'} variant={'ghost'}>
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button onClick={onClose} color={'purple'} variant={'ghost'}>
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>

              <Button onClick={onClose} color={'purple'} variant={'ghost'}>
                <Link to={'/upload'}>Upload Videos</Link>
              </Button>
            </VStack>
            <HStack position={'absolute'} bottom={4}>
              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'solid'}
              >
                <Link to={'/login'}>Log In</Link>
              </Button>

              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'outline'}
              >
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
