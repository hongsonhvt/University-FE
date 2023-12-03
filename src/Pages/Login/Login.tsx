import { Auth } from '@api';
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
} from '@chakra-ui/react';
import { RootState, updateToken } from '@redux';
import { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const token = useSelector((store: RootState) => store.auth.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleTokenExist = () => {
    if (token) {
      dispatch(updateToken(token));
      navigate('/home');
    }
  };

  const handleLogin = async (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    const res = await new Auth().login({
      userName: username,
      password: password,
    });

    const token = res.data.data?.token;
    if (token) {
      dispatch(updateToken(token));
      navigate('/home');
    }
  };

  useEffect(() => handleTokenExist(), [token]);

  return (
    <Stack minH='100vh' direction={{ base: 'column', md: 'row' }}>
      <Flex p='8' flex='1' align='center' justify='center'>
        <Stack as='form' spacing={4} w='full' maxW='md' onSubmit={handleLogin}>
          <Heading fontSize='2xl'>Sign in to your account</Heading>
          <FormControl id='email'>
            <FormLabel>Email address</FormLabel>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete='username'
            />
          </FormControl>
          <FormControl id='password'>
            <FormLabel>Password</FormLabel>
            <Input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete='current-password'
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align='start'
              justify='space-between'
            >
              <Checkbox>Remember me</Checkbox>
            </Stack>
            <Button colorScheme='blue' variant='solid' type='submit'>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt='Login Image'
          objectFit='cover'
          src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
        />
      </Flex>
    </Stack>
  );
};

export { Login };
