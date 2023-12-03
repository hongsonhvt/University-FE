import { Box, Flex, Heading, Link } from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Flex h='full' justify='center' align='center' color='#152a68'>
      <Box textAlign='center'>
        <Heading
          as='h1'
          m='2.5'
          borderBottom='1px dashed #152a68'
          fontSize='8em'
        >
          <Box as='span'>4</Box>
          <Box as='span'>0</Box>
          <Box as='span'>4</Box>
        </Heading>
        <Heading as='h1' m='2.5' textTransform='uppercase'>
          Page not found
        </Heading>
        <Link
          href='/'
          my='5'
          px='5'
          py='2.5'
          border='1px solid #152a68'
          bg='transparent'
          display='block'
          fontSize='1.1rem'
          fontWeight='bold'
          color='#152a68'
          textTransform='uppercase'
          transition='all 200ms ease-in'
          _hover={{
            background: '#152a68',
            color: 'white',
          }}
        >
          Return To Home
        </Link>
      </Box>
    </Flex>
  );
};

export { NotFound };
