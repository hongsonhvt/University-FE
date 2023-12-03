import { UMDomainEnumsCourseClassECourseClassStatus } from '@api';
import { Badge, ThemeTypings } from '@chakra-ui/react';

export const StatusBadge = ({ status }: { status: number }) => {
  const statusString = UMDomainEnumsCourseClassECourseClassStatus[
    status
  ] as keyof typeof UMDomainEnumsCourseClassECourseClassStatus;
  const statusBadgeMap: Record<
    typeof statusString,
    ThemeTypings['colorSchemes']
  > = {
    Active: 'green',
    Draft: 'gray',
    Finished: 'blackAlpha',
  };

  return (
    <Badge colorScheme={statusBadgeMap[statusString]}>{statusString}</Badge>
  );
};
