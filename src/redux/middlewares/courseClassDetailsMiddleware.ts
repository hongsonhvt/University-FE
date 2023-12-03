import { CourseClass, ManagementClass, Teacher } from '@api';
import { StringHelper } from '@helpers';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import {
  courseClassDetailsGetScores,
  courseClassDetailsUpdateCourseClass,
  courseClassDetailsUpdateManagementClassOptions,
  courseClassDetailsUpdateScores,
  courseClassDetailsUpdateStudentOptions,
  courseClassDetailsUpdateTeacherOptions,
} from '../feature/courseClassDetailsSlice';
import { RootState } from '../store';

export const courseClassDetailsMiddleware =
  createListenerMiddleware<RootState>();

courseClassDetailsMiddleware.startListening({
  actionCreator: courseClassDetailsUpdateCourseClass,
  effect: async (_, listenerApi) => {
    listenerApi.cancelActiveListeners();

    const prev = listenerApi.getOriginalState().courseClassDetails.courseClass;
    const curr = listenerApi.getState().courseClassDetails.courseClass;
    const role = listenerApi.getState().auth.user?.role;
    const isAdmin = role === 'Admin';

    if (prev?.id !== curr?.id) {
      if (isAdmin) {
        new ManagementClass()
          .getManagementClass({})
          .then((res) => {
            listenerApi.dispatch(
              courseClassDetailsUpdateManagementClassOptions(
                (res.data.data ?? []).map((t) => ({
                  value: t.id!,
                  label: t.name!,
                }))
              )
            );
          })
          .catch(() => {
            listenerApi.dispatch(
              courseClassDetailsUpdateManagementClassOptions([])
            );
          });

        new Teacher()
          .getTeacher({})
          .then((res) => {
            listenerApi.dispatch(
              courseClassDetailsUpdateTeacherOptions(
                (res.data.data ?? []).map((t) => ({
                  value: t.id!,
                  label: StringHelper.shortName(t),
                }))
              )
            );
          })
          .catch(() => {
            listenerApi.dispatch(courseClassDetailsUpdateTeacherOptions([]));
          });
      }

      if (role === 'Admin' || role === 'Teacher') {
        listenerApi.dispatch(courseClassDetailsGetScores());
      }
    }

    if (prev !== curr && isAdmin) {
      new CourseClass()
        .getCourseRecommendationStudents(curr?.id!)
        .then((res) => {
          listenerApi.dispatch(
            courseClassDetailsUpdateStudentOptions(
              (res.data.data ?? []).map((t) => ({
                value: t.id!,
                label: StringHelper.shortName(t),
              }))
            )
          );
        })
        .catch(() => {
          listenerApi.dispatch(courseClassDetailsUpdateStudentOptions([]));
        });
    }
  },
});

courseClassDetailsMiddleware.startListening({
  actionCreator: courseClassDetailsGetScores,
  effect: async (_, listenerApi) => {
    listenerApi.cancelActiveListeners();

    const curr = listenerApi.getState().courseClassDetails.courseClass;

    new CourseClass()
      .getScores(curr?.id!)
      .then((res) => {
        listenerApi.dispatch(
          courseClassDetailsUpdateScores(res.data.data ?? [])
        );
      })
      .catch(() => {
        listenerApi.dispatch(courseClassDetailsUpdateTeacherOptions([]));
      });
  },
});
