import {
    Button,
    Checkbox,
    Flex,
    Text,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
  } from '@chakra-ui/react'
import axios from 'axios';
  import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
  import { useNavigate } from 'react-router-dom'
import { updateToken } from '../../redux/feature/tokenSlice';
  
  export default function SplitScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async () => {
      console.log('Login with your email:', username, 'and Password:', password);

      const res = await axios.post("http://localhost:5123/auth/login"  , {
        username:username,
        password:password
      })
      console.log('res',res.data.data.token);
      dispatch(updateToken( res.data.data.token))

     
      navigate('/education')
    }

  
   

    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Sign in to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={username}
          onChange={(e) => setUsername(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password}
          onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
              </Stack>
              <Button colorScheme={'blue'} variant={'solid'} onClick={handleLogin}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            }
          />
        </Flex>
      </Stack>
    )
  }