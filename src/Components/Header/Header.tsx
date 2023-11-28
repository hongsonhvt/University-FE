import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
  Stack,
} from '@chakra-ui/react';
import { RootState, logOut } from '@redux';
import { useDispatch, useSelector } from 'react-redux';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store: RootState) => store.auth.user);

  const onClickLogOut = () => {
    dispatch(logOut());
    navigate('/login');
  };

  return (
    <Flex
      className='header'
      h='full'
      align={'center'}
      justify={'space-between'}
      px={4}
      bg='gray.100'
    >
      <Box h='full' py={1}>
        <Link as={ReactRouterLink} to='/home'>
          <Image
            src='https://cdn.haitrieu.com/wp-content/uploads/2022/12/Logo-Truong-Dai-hoc-Greenwich-Viet-Nam.png'
            h='full'
          />
        </Link>
      </Box>

      <Flex align={'center'}>
        <Stack direction={'row'} spacing={7}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              cursor={'pointer'}
              minW={0}
            >
              <Flex align='center' gap='2'>
                {user ? (
                  <>
                    {user.firstName} {user.lastName}
                    <Avatar
                      size='sm'
                      name={`${user.firstName} ${user.lastName}`}
                    />
                  </>
                ) : (
                  <Spinner></Spinner>
                )}
              </Flex>
            </MenuButton>

            <MenuList alignItems={'center'}>
              {user && (
                <>
                  <Center>
                    <Avatar
                      size='2xl'
                      name={`${user.firstName} ${user.lastName}`}
                    />
                  </Center>

                  <Center>
                    <p>
                      {user.firstName} {user.lastName}
                    </p>
                  </Center>
                </>
              )}

              <MenuDivider />
              <MenuItem as={ReactRouterLink} to='/me'>
                My information
              </MenuItem>
              <MenuItem onClick={onClickLogOut}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </Flex>
    </Flex>
  );
};

export { Header };
