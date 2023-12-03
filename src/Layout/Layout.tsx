import { Grid, GridItem } from '@chakra-ui/react';
import { Header, SideBar } from '@components';
import { LocalStorageConstant } from '@constants';
import { RootState, getUser, updateToken } from '@redux';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((store: RootState) => store.auth.token);

  const getDataUser = async () => {
    if (!localStorage.getItem(LocalStorageConstant.token)) {
      dispatch(updateToken(null));
      navigate('/login');
      return;
    }

    if (!token) {
      return;
    }

    dispatch(getUser());
  };

  useEffect(() => {
    getDataUser();
  }, [token]);

  return (
    <Grid gridTemplateRows='60px 1fr' gridTemplateColumns='250px 1fr' h='100vh'>
      <GridItem colSpan={2}>
        <Header />
      </GridItem>
      <GridItem>
        <SideBar />
      </GridItem>
      <GridItem overflow='auto' p='2'>
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export { Layout };
