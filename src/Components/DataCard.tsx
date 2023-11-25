import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';

export type DataCardProps = {
  heading: string;
  data: { header: string; label?: string | number | null }[];
};

const DataCard = ({ heading, data }: DataCardProps) => {
  return (
    <Card>
      <CardHeader>
        <Heading size='md'>{heading}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          {data.map((row, idx) => (
            <Box key={idx}>
              <Heading size='xs' textTransform='uppercase'>
                {row.header}
              </Heading>
              <Text mt='2' fontSize='sm'>
                {row.label}
              </Text>
            </Box>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};

export { DataCard };
