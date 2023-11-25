import { GetCourseByIdData } from '@api';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RetrieveData } from '@types';
import { CourseDetailsState } from '../states';

const initialState: CourseDetailsState = {
  course: null,
  status: 'idle',
};

export const courseDetailsSlice = createSlice({
  name: 'courseDetails',
  initialState,
  reducers: {
    CourseDetails_Reset: (state) => {
      state.course = null;
      state.status = 'idle';
    },
    CourseDetails_Get: (state, _: PayloadAction<string>) => {
      state.status = 'loading';
    },
    CourseDetails_Reload: (state) => {
      state.status = 'loading';
    },
    // Private
    CourseDetails_Set: (
      state,
      actions: PayloadAction<RetrieveData<GetCourseByIdData> | null>
    ) => {
      state.course = actions.payload ?? null;
      state.status = 'succeed';
    },
  },
});

export const {
  CourseDetails_Reset,
  CourseDetails_Get,
  CourseDetails_Reload,
  CourseDetails_Set,
} = courseDetailsSlice.actions;

export default courseDetailsSlice.reducer;
