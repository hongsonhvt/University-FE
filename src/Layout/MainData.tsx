import { Flex, Spinner } from '@chakra-ui/react';

type MainDataProps<T> = {
  data?: T | T[] | null;
  children: JSX.Element | null;
  showSpinner?: boolean;
};

const MainData = <T,>({ data, children, showSpinner }: MainDataProps<T>) => {
  if (data === undefined || showSpinner) {
    return (
      <Flex justify='center'>
        <Spinner />
      </Flex>
    );
  }

  if (data === null || (Array.isArray(data) && data.length === 0)) {
    return <>No data</>;
  }

  return children;
};

export { MainData };
