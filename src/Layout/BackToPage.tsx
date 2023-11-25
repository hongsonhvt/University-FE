import { Box, Button, Flex } from '@chakra-ui/react';
import { AiOutlineLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

type BackToPageProps = {
  url: string;
  text?: string;
  rightContent?: JSX.Element;
  children: JSX.Element;
};

const BackToPage = ({ url, text, rightContent, children }: BackToPageProps) => {
  return (
    <Box>
      <Flex justify='space-between'>
        <Button as={Link} leftIcon={<AiOutlineLeft />} to={url}>
          {text ?? 'Back'}
        </Button>
        {rightContent}
      </Flex>
      <Box mt='2'>{children}</Box>
    </Box>
  );
};

export { BackToPage };
