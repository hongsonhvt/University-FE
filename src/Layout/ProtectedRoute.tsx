import { Spinner } from '@chakra-ui/react';
import { NotFound } from '@components';
import { RoleConstantValue } from '@constants';
import { RootState } from '@redux';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

type ProtectedComponentProps =
  | {
      role: RoleConstantValue;
      fallback?: JSX.Element;
      hideFallback?: boolean;
      children?: JSX.Element;
    }
  | {
      roles: RoleConstantValue[];
      fallback?: JSX.Element;
      hideFallback?: boolean;
      children?: JSX.Element;
    };

const ProtectedComponent = ({
  fallback,
  hideFallback,
  children,
  ...props
}: ProtectedComponentProps) => {
  const role = useSelector((store: RootState) => store.auth.user?.role);

  if (!role) {
    return <Spinner />;
  }

  if (
    ('role' in props && props.role === role) ||
    ('roles' in props && props.roles.includes(role))
  ) {
    return children ?? <Outlet />;
  }

  if (hideFallback) {
    return <></>;
  }

  return fallback ?? <NotFound />;
};

export { ProtectedComponent };
