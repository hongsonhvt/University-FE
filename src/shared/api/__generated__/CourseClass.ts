/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  AssignToManagementClassesData,
  AssignToStudentsData,
  AssignToTeacherData,
  DeleteCourseClassData,
  GetCourseClassByIdData,
  GetCourseClassData,
  GetCourseClassParams,
  GetCourseRecommendationStudentsData,
  GetScoresData,
  PostCourseClassData,
  PutCourseClassData,
  UMApplicationCourseClassCommandsAssignToManagementClassesAssignToManagementClassesCommandData,
  UMApplicationCourseClassCommandsAssignToStudentsAssignToStudentsCommandData,
  UMApplicationCourseClassCommandsBulkCreateBulkCreateCommand,
  UMApplicationCourseClassCommandsUpdateUpdateCommandData,
  UpdateScoreData,
  UpdateScorePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class CourseClass<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags CourseClass
   * @name GetCourseClass
   * @request GET:/CourseClass
   * @response `200` `GetCourseClassData` Success
   */
  getCourseClass = (query: GetCourseClassParams, params: RequestParams = {}) =>
    this.request<GetCourseClassData>({
      path: `/CourseClass`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags CourseClass
   * @name PostCourseClass
   * @request POST:/CourseClass
   * @response `200` `PostCourseClassData` Success
   */
  postCourseClass = (data: UMApplicationCourseClassCommandsBulkCreateBulkCreateCommand, params: RequestParams = {}) =>
    this.request<PostCourseClassData>({
      path: `/CourseClass`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CourseClass
   * @name GetCourseClassById
   * @request GET:/CourseClass/{id}
   * @response `200` `GetCourseClassByIdData` Success
   */
  getCourseClassById = (id: string, params: RequestParams = {}) =>
    this.request<GetCourseClassByIdData>({
      path: `/CourseClass/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags CourseClass
   * @name PutCourseClass
   * @request PUT:/CourseClass/{id}
   * @response `200` `PutCourseClassData` Success
   */
  putCourseClass = (
    id: string,
    data: UMApplicationCourseClassCommandsUpdateUpdateCommandData,
    params: RequestParams = {},
  ) =>
    this.request<PutCourseClassData>({
      path: `/CourseClass/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CourseClass
   * @name DeleteCourseClass
   * @request DELETE:/CourseClass/{id}
   * @response `200` `DeleteCourseClassData` Success
   */
  deleteCourseClass = (id: string, params: RequestParams = {}) =>
    this.request<DeleteCourseClassData>({
      path: `/CourseClass/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags CourseClass
   * @name AssignToManagementClasses
   * @request POST:/CourseClass/{id}/management-class
   * @response `200` `AssignToManagementClassesData` Success
   */
  assignToManagementClasses = (
    id: string,
    data: UMApplicationCourseClassCommandsAssignToManagementClassesAssignToManagementClassesCommandData,
    params: RequestParams = {},
  ) =>
    this.request<AssignToManagementClassesData>({
      path: `/CourseClass/${id}/management-class`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CourseClass
   * @name GetCourseRecommendationStudents
   * @request GET:/CourseClass/{id}/recommendations/student
   * @response `200` `GetCourseRecommendationStudentsData` Success
   */
  getCourseRecommendationStudents = (id: string, params: RequestParams = {}) =>
    this.request<GetCourseRecommendationStudentsData>({
      path: `/CourseClass/${id}/recommendations/student`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags CourseClass
   * @name GetScores
   * @request GET:/CourseClass/{id}/score
   * @response `200` `GetScoresData` Success
   */
  getScores = (id: string, params: RequestParams = {}) =>
    this.request<GetScoresData>({
      path: `/CourseClass/${id}/score`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags CourseClass
   * @name UpdateScore
   * @request PUT:/CourseClass/{id}/score
   * @response `200` `UpdateScoreData` Success
   */
  updateScore = (id: string, data: UpdateScorePayload, params: RequestParams = {}) =>
    this.request<UpdateScoreData>({
      path: `/CourseClass/${id}/score`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CourseClass
   * @name AssignToStudents
   * @request POST:/CourseClass/{id}/student
   * @response `200` `AssignToStudentsData` Success
   */
  assignToStudents = (
    id: string,
    data: UMApplicationCourseClassCommandsAssignToStudentsAssignToStudentsCommandData,
    params: RequestParams = {},
  ) =>
    this.request<AssignToStudentsData>({
      path: `/CourseClass/${id}/student`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CourseClass
   * @name AssignToTeacher
   * @request POST:/CourseClass/{id}/teacher/{teacherId}
   * @response `200` `AssignToTeacherData` Success
   */
  assignToTeacher = (id: string, teacherId: string, params: RequestParams = {}) =>
    this.request<AssignToTeacherData>({
      path: `/CourseClass/${id}/teacher/${teacherId}`,
      method: "POST",
      ...params,
    });
}
