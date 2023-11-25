import { UMDomainEnumsCourseClassECourseClassStatus } from '@api';
import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  StackDivider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  ThemeTypings,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import { StringHelper } from '@helpers';
import { RootState } from '@redux';
import moment from 'moment';
import { useSelector } from 'react-redux';

const InfoCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const courseClass = useSelector(
    (store: RootState) => store.courseClassDetails.courseClass
  );

  if (!courseClass) {
    return <></>;
  }

  const course = courseClass.course!;
  const status = UMDomainEnumsCourseClassECourseClassStatus[
    courseClass.status!
  ] as keyof typeof UMDomainEnumsCourseClassECourseClassStatus;
  const statusBadgeMap: Record<typeof status, ThemeTypings['colorSchemes']> = {
    Active: 'green',
    Draft: 'gray',
    Finished: 'blackAlpha',
  };

  const info: { header: string; label?: string | JSX.Element }[] = [
    {
      header: 'Course',
      label: `${course.name} (${course.courseId})`,
    },
    {
      header: 'Status',
      label: <Badge colorScheme={statusBadgeMap[status]}>{status}</Badge>,
    },
    {
      header: 'Academic year',
      label: courseClass.academicYear,
    },
    {
      header: 'Teacher',
      label: courseClass.teacher
        ? StringHelper.shortNameWithMiddle(courseClass.teacher)
        : 'Not assigned',
    },
  ];

  return (
    <Card>
      <CardHeader>
        <Heading size='md'>Class {courseClass.name}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          {info.map((row, idx) => (
            <Box key={idx}>
              <Heading size='xs' textTransform='uppercase'>
                {row.header}
              </Heading>
              {typeof row.label === 'string' ? (
                <Text mt='2' fontSize='sm'>
                  {row.label}
                </Text>
              ) : (
                row.label
              )}
            </Box>
          ))}

          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Sessions
            </Heading>
            <Flex mt='2' fontSize='sm' align='center'>
              <Text>{courseClass.sessions?.length}</Text>

              {courseClass.sessions?.length ? (
                <>
                  <Button size='xs' colorScheme='teal' ml='3' onClick={onOpen}>
                    Show all
                  </Button>

                  <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    size='3xl'
                    scrollBehavior='inside'
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Assign course class</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <TableContainer>
                          <Table variant='striped' size='sm'>
                            <Thead>
                              <Tr>
                                <Th>#</Th>
                                <Th>Date</Th>
                                <Th textAlign='center'>Slot</Th>
                                <Th textAlign='center'>Start</Th>
                                <Th textAlign='center'>End</Th>
                              </Tr>
                            </Thead>

                            <Tbody>
                              {courseClass.sessions.map((session, idx) => {
                                return (
                                  <Tr key={idx}>
                                    <Td>{idx + 1}</Td>
                                    <Td>
                                      {moment(session.startAt).format(
                                        'DD-MM-YYYY'
                                      )}
                                    </Td>
                                    <Td textAlign='center'>{session?.slot}</Td>
                                    <Td textAlign='center'>
                                      {moment(session.startAt).format('HH:mm')}
                                    </Td>
                                    <Td textAlign='center'>
                                      {moment(session.endAt).format('HH:mm')}
                                    </Td>
                                  </Tr>
                                );
                              })}
                            </Tbody>
                          </Table>
                        </TableContainer>
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </>
              ) : (
                <></>
              )}
            </Flex>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export { InfoCard };

