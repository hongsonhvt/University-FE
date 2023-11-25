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
  AddStudentsData,
  DeleteManagementClassData,
  GetManagementClassByIdData,
  GetManagementClassData,
  GetManagementClassParams,
  PostManagementClassData,
  PutManagementClassData,
  UMApplicationManagementClassCommandsAddStudentsAddStudentsCommandData,
  UMApplicationManagementClassCommandsBulkCreateBulkCreateCommand,
  UMApplicationManagementClassCommandsUpdateUpdateCommandData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ManagementClass<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags ManagementClass
   * @name GetManagementClass
   * @request GET:/ManagementClass
   * @response `200` `GetManagementClassData` Success
   */
  getManagementClass = (query: GetManagementClassParams, params: RequestParams = {}) =>
    this.request<GetManagementClassData>({
      path: `/ManagementClass`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags ManagementClass
   * @name PostManagementClass
   * @request POST:/ManagementClass
   * @response `200` `PostManagementClassData` Success
   */
  postManagementClass = (
    data: UMApplicationManagementClassCommandsBulkCreateBulkCreateCommand,
    params: RequestParams = {},
  ) =>
    this.request<PostManagementClassData>({
      path: `/ManagementClass`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags ManagementClass
   * @name GetManagementClassById
   * @request GET:/ManagementClass/{id}
   * @response `200` `GetManagementClassByIdData` Success
   */
  getManagementClassById = (id: string, params: RequestParams = {}) =>
    this.request<GetManagementClassByIdData>({
      path: `/ManagementClass/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags ManagementClass
   * @name PutManagementClass
   * @request PUT:/ManagementClass/{id}
   * @response `200` `PutManagementClassData` Success
   */
  putManagementClass = (
    id: string,
    data: UMApplicationManagementClassCommandsUpdateUpdateCommandData,
    params: RequestParams = {},
  ) =>
    this.request<PutManagementClassData>({
      path: `/ManagementClass/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags ManagementClass
   * @name DeleteManagementClass
   * @request DELETE:/ManagementClass/{id}
   * @response `200` `DeleteManagementClassData` Success
   */
  deleteManagementClass = (id: string, params: RequestParams = {}) =>
    this.request<DeleteManagementClassData>({
      path: `/ManagementClass/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags ManagementClass
   * @name AddStudents
   * @request POST:/ManagementClass/{id}/student
   * @response `200` `AddStudentsData` Success
   */
  addStudents = (
    id: string,
    data: UMApplicationManagementClassCommandsAddStudentsAddStudentsCommandData,
    params: RequestParams = {},
  ) =>
    this.request<AddStudentsData>({
      path: `/ManagementClass/${id}/student`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
