import { GetCourseByIdData } from '@api';
import { Card, CardHeader, Heading } from '@chakra-ui/react';
import { RetrieveData } from '@types';

const InfoCard = ({ course }: { course: RetrieveData<GetCourseByIdData> }) => {
  return (
    <Card>
      <CardHeader>
        <Heading>
          {course.name} ({course.courseId})
        </Heading>
      </CardHeader>

      {/* <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Program
            </Heading>
            <Text>
              {course?.name} ({course.courseId})
            </Text>
          </Box>
        </Stack>
      </CardBody> */}
    </Card>
  );
};

export { InfoCard };
