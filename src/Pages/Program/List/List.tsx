import { Grid, GridItem } from '@chakra-ui/react';
import { useWaitUserInfo } from '@hooks';
import { MainData, ProtectedComponent } from '@layout';
import { ProgramList_Get, ProgramList_Reset, RootState } from '@redux';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from './Actions';
import { ListTable } from './Table';

function ProgramList() {
  const dispatch = useDispatch();
  const programs = useSelector(
    (state: RootState) => state.programList.programs
  );
  const status = useSelector(
    (state: RootState) => state.programList.status
  );

  useWaitUserInfo(() => {
    dispatch(ProgramList_Get({}));
  });

  useEffect(() => {
    return () => {
      dispatch(ProgramList_Reset());
    };
  }, []);

  return (
    <Grid rowGap={3}>
      <GridItem>
        <ProtectedComponent role='Admin' hideFallback>
          <Actions />
        </ProtectedComponent>
      </GridItem>
      <GridItem>
        <MainData data={programs} showSpinner={status === 'loading'}>
          {programs && <ListTable programs={programs} />}
        </MainData>
      </GridItem>
    </Grid>
  );
}

export { ProgramList };
