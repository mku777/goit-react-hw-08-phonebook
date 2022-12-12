import React from 'react';

import { useSelector } from 'react-redux';
import { getUserName } from 'redux/slice/AuthSlise';
import { useUserLogoutMutation } from 'redux/api/AuthApi';

import { Box, Flex, Text, Button } from '@chakra-ui/react';

const UserMenu = () => {
  const name = useSelector(getUserName);
  const [userLogout] = useUserLogoutMutation();

  return (
    <Box>
      <Flex h={16} alignItems={'center'} 
      marginRight={'250px'}>
        <Text fontSize="23px" color="#80b438"  mr={50}>
        hi! {name} 
        </Text>
        <Button
          type="button"
          bg={'burlywood'}
          width={'100px'}
          borderRadius={'3px'}
          padding={'23px'}
          color={'white'}
          _hover={{ bg: '#ff2400' }}
        
          onClick={() => {
            userLogout();
          }}
        >
          Log Out
        </Button>
      </Flex>
    </Box>
  );
};

export default UserMenu;
