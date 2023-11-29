import { GetProgramByIdData } from '@api';
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
import { RetrieveData } from '@types';

const InfoCard = ({
  program,
}: {
  program: RetrieveData<GetProgramByIdData>;
}) => {
  return (
    <Card>
      <CardHeader>
        <Heading>
          {program.name} ({program.programId})
        </Heading>
      </CardHeader>

      {/* <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Program ID
            </Heading>
            <Text>
              {program.name} ({program.programId})
            </Text>
          </Box>
        </Stack>
      </CardBody> */}
    </Card>
  );
};

export { InfoCard };
