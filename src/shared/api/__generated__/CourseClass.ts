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
  CourseClassCreateData,
  CourseClassDeleteData,
  CourseClassDetailData,
  CourseClassListData,
  CourseClassListParams,
  CourseClassUpdateData,
  ManagementClassCreateData,
  ScoreDetailData,
  StudentCreateData,
  StudentUpdateData,
  TeacherCreateData,
  UMApplicationCourseClassCommandsAssignToManagementClassesAssignToManagementClassesCommandData,
  UMApplicationCourseClassCommandsAssignToStudentsAssignToStudentsCommandData,
  UMApplicationCourseClassCommandsBulkCreateBulkCreateCommand,
  UMApplicationCourseClassCommandsUpdateScoreUpdateScoreCommandData,
  UMApplicationCourseClassCommandsUpdateUpdateCommandData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class CourseClass<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags CourseClass
   * @name CourseClassList
   * @request GET:/CourseClass
   * @response `200` `CourseClassListData` Success
   */
  courseClassList = (query: CourseClassListParams, params: RequestParams = {}) =>
    this.http.request<CourseClassListData, any>({
      path: `/CourseClass`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags CourseClass
   * @name CourseClassCreate
   * @request POST:/CourseClass
   * @response `200` `CourseClassCreateData` Success
   */
  courseClassCreate = (data: UMApplicationCourseClassCommandsBulkCreateBulkCreateCommand, params: RequestParams = {}) =>
    this.http.request<CourseClassCreateData, any>({
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
   * @name CourseClassDetail
   * @request GET:/CourseClass/{id}
   * @response `200` `CourseClassDetailData` Success
   */
  courseClassDetail = (id: string, params: RequestParams = {}) =>
    this.http.request<CourseClassDetailData, any>({
      path: `/CourseClass/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags CourseClass
   * @name CourseClassUpdate
   * @request PUT:/CourseClass/{id}
   * @response `200` `CourseClassUpdateData` Success
   */
  courseClassUpdate = (
    id: string,
    data: UMApplicationCourseClassCommandsUpdateUpdateCommandData,
    params: RequestParams = {},
  ) =>
    this.http.request<CourseClassUpdateData, any>({
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
   * @name CourseClassDelete
   * @request DELETE:/CourseClass/{id}
   * @response `200` `CourseClassDeleteData` Success
   */
  courseClassDelete = (id: string, params: RequestParams = {}) =>
    this.http.request<CourseClassDeleteData, any>({
      path: `/CourseClass/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags CourseClass
   * @name ManagementClassCreate
   * @request POST:/CourseClass/{id}/management-class
   * @response `200` `ManagementClassCreateData` Success
   */
  managementClassCreate = (
    id: string,
    data: UMApplicationCourseClassCommandsAssignToManagementClassesAssignToManagementClassesCommandData,
    params: RequestParams = {},
  ) =>
    this.http.request<ManagementClassCreateData, any>({
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
   * @name ScoreDetail
   * @request GET:/CourseClass/{id}/score
   * @response `200` `ScoreDetailData` Success
   */
  scoreDetail = (id: string, params: RequestParams = {}) =>
    this.http.request<ScoreDetailData, any>({
      path: `/CourseClass/${id}/score`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags CourseClass
   * @name StudentCreate
   * @request POST:/CourseClass/{id}/student
   * @response `200` `StudentCreateData` Success
   */
  studentCreate = (
    id: string,
    data: UMApplicationCourseClassCommandsAssignToStudentsAssignToStudentsCommandData,
    params: RequestParams = {},
  ) =>
    this.http.request<StudentCreateData, any>({
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
   * @name StudentUpdate
   * @request PUT:/CourseClass/{id}/student/{studentId}
   * @response `200` `StudentUpdateData` Success
   */
  studentUpdate = (
    id: string,
    studentId: string,
    data: UMApplicationCourseClassCommandsUpdateScoreUpdateScoreCommandData,
    params: RequestParams = {},
  ) =>
    this.http.request<StudentUpdateData, any>({
      path: `/CourseClass/${id}/student/${studentId}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CourseClass
   * @name TeacherCreate
   * @request POST:/CourseClass/{id}/teacher/{teacherId}
   * @response `200` `TeacherCreateData` Success
   */
  teacherCreate = (id: string, teacherId: string, params: RequestParams = {}) =>
    this.http.request<TeacherCreateData, any>({
      path: `/CourseClass/${id}/teacher/${teacherId}`,
      method: "POST",
      ...params,
    });
}
