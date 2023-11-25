import { Grid, GridItem } from '@chakra-ui/react';
import { useWaitUserInfo } from '@hooks';
import { BackToPage, MainData } from '@layout';
import { ProgramDetails_Get, ProgramDetails_Reset, RootState } from '@redux';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Actions } from './Actions';
import { InfoCard } from './InfoCard';

const ProgramDetails = () => {
  const program = useSelector((s: RootState) => s.programDetails.program);

  const params = useParams();
  const user = useWaitUserInfo();
  const dispatch = useDispatch();

  const programId = params.programId;

  useEffect(() => {
    return () => {
      dispatch(ProgramDetails_Reset());
    };
  }, []);

  useEffect(() => {
    if (user && programId) {
      dispatch(ProgramDetails_Get(programId));
    }
  }, [user, programId]);

  return (
    <MainData data={program}>
      <BackToPage
        url='/program'
        text='Back to program list'
        rightContent={<Actions program={program!} />}
      >
        <Grid rowGap={3}>
          <GridItem>
            <InfoCard program={program!} />
          </GridItem>
        </Grid>
      </BackToPage>
    </MainData>
  );
};

export { ProgramDetails };
