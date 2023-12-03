import { AcademicYear } from '@api';
import { Card, Flex, FormControl, FormLabel } from '@chakra-ui/react';
import { useWaitUserInfo } from '@hooks';
import { SelectItemType } from '@models';
import { Select } from 'chakra-react-select';
import { useState } from 'react';

const Settings = () => {
  const [academicYear, setAcademicYear] = useState<SelectItemType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [academicYearOptions, setAcademicYearOptions] = useState<
    SelectItemType[]
  >([]);

  useWaitUserInfo(() => {
    new AcademicYear()
      .getAcademicYear()
      .then(({ data }) =>
        setAcademicYear({ value: data.data!, label: data.data! })
      );

    new AcademicYear()
      .getRecommendations()
      .then(({ data }) =>
        setAcademicYearOptions(
          data.data?.map((y) => ({ value: y, label: y })) ?? []
        )
      )
      .catch(() => setAcademicYearOptions([]));
  });

  const updateAcademicYear = async (academicYear?: string) => {
    if (!academicYear) return;

    setIsLoading(true);

    await new AcademicYear().putAcademicYear({ academicYear }).then(() => {
      setAcademicYear({ value: academicYear, label: academicYear });
      setIsLoading(false);
    });
  };

  return (
    <Card>
      <Flex direction='column' rowGap='3'>
        <FormControl>
          <FormLabel>Program ID:</FormLabel>
          <Select
            options={academicYearOptions}
            value={academicYear}
            onChange={(opt) => updateAcademicYear(opt?.value)}
            isLoading={isLoading}
          />
        </FormControl>
      </Flex>
    </Card>
  );
};

export { Settings };
