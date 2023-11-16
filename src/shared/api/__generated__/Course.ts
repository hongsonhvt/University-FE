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
  CourseCreateData,
  CourseDeleteData,
  CourseDetailData,
  CourseListData,
  CourseUpdateData,
  UMApplicationCourseCommandsCreateCreateCommand,
  UMApplicationCourseCommandsUpdateUpdateCommandData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Course<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Course
   * @name CourseList
   * @request GET:/Course
   * @response `200` `CourseListData` Success
   */
  courseList = (params: RequestParams = {}) =>
    this.http.request<CourseListData, any>({
      path: `/Course`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Course
   * @name CourseCreate
   * @request POST:/Course
   * @response `200` `CourseCreateData` Success
   */
  courseCreate = (data: UMApplicationCourseCommandsCreateCreateCommand, params: RequestParams = {}) =>
    this.http.request<CourseCreateData, any>({
      path: `/Course`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Course
   * @name CourseDetail
   * @request GET:/Course/{id}
   * @response `200` `CourseDetailData` Success
   */
  courseDetail = (id: string, params: RequestParams = {}) =>
    this.http.request<CourseDetailData, any>({
      path: `/Course/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Course
   * @name CourseUpdate
   * @request PUT:/Course/{id}
   * @response `200` `CourseUpdateData` Success
   */
  courseUpdate = (id: string, data: UMApplicationCourseCommandsUpdateUpdateCommandData, params: RequestParams = {}) =>
    this.http.request<CourseUpdateData, any>({
      path: `/Course/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Course
   * @name CourseDelete
   * @request DELETE:/Course/{id}
   * @response `200` `CourseDeleteData` Success
   */
  courseDelete = (id: string, params: RequestParams = {}) =>
    this.http.request<CourseDeleteData, any>({
      path: `/Course/${id}`,
      method: "DELETE",
      ...params,
    });
}
