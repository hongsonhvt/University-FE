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

import { TeacherCreateResult, UMApplicationTeacherCommandsCreateCreateCommand } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Teacher<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Teacher
   * @name TeacherCreate
   * @request POST:/Teacher
   * @response `200` `TeacherCreateResult` Success
   */
  teacherCreate = (data: UMApplicationTeacherCommandsCreateCreateCommand, params: RequestParams = {}) =>
    this.http.request<TeacherCreateResult, any>({
      path: `/Teacher`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
