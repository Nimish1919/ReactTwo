import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      variant="ghost"
      bgColor={'whiteAlpha.500'}
      borderRadius={'full'}
      color="current"
      pos={'fixed'}
      top={4}
      right={4}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      zIndex={'1'}
      {...props}
    />
  );
};

export default ColorModeSwitcher;
