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
  ManagementClassCreateResult,
  ManagementClassDeleteData,
  ManagementClassDetailData,
  ManagementClassListData,
  ManagementClassListParams,
  ManagementClassUpdateData,
  StudentCreateResult,
  UMApplicationManagementClassCommandsAddStudentsAddStudentsCommandData,
  UMApplicationManagementClassCommandsBulkCreateBulkCreateCommand,
  UMApplicationManagementClassCommandsUpdateUpdateCommandData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ManagementClass<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ManagementClass
   * @name ManagementClassList
   * @request GET:/ManagementClass
   * @response `200` `ManagementClassListData` Success
   */
  managementClassList = (query: ManagementClassListParams, params: RequestParams = {}) =>
    this.http.request<ManagementClassListData, any>({
      path: `/ManagementClass`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags ManagementClass
   * @name ManagementClassCreate
   * @request POST:/ManagementClass
   * @response `200` `ManagementClassCreateResult` Success
   */
  managementClassCreate = (
    data: UMApplicationManagementClassCommandsBulkCreateBulkCreateCommand,
    params: RequestParams = {},
  ) =>
    this.http.request<ManagementClassCreateResult, any>({
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
   * @name ManagementClassDetail
   * @request GET:/ManagementClass/{id}
   * @response `200` `ManagementClassDetailData` Success
   */
  managementClassDetail = (id: string, params: RequestParams = {}) =>
    this.http.request<ManagementClassDetailData, any>({
      path: `/ManagementClass/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags ManagementClass
   * @name ManagementClassUpdate
   * @request PUT:/ManagementClass/{id}
   * @response `200` `ManagementClassUpdateData` Success
   */
  managementClassUpdate = (
    id: string,
    data: UMApplicationManagementClassCommandsUpdateUpdateCommandData,
    params: RequestParams = {},
  ) =>
    this.http.request<ManagementClassUpdateData, any>({
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
   * @name ManagementClassDelete
   * @request DELETE:/ManagementClass/{id}
   * @response `200` `ManagementClassDeleteData` Success
   */
  managementClassDelete = (id: string, params: RequestParams = {}) =>
    this.http.request<ManagementClassDeleteData, any>({
      path: `/ManagementClass/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags ManagementClass
   * @name StudentCreate
   * @request POST:/ManagementClass/{id}/student
   * @response `200` `StudentCreateResult` Success
   */
  studentCreate = (
    id: string,
    data: UMApplicationManagementClassCommandsAddStudentsAddStudentsCommandData,
    params: RequestParams = {},
  ) =>
    this.http.request<StudentCreateResult, any>({
      path: `/ManagementClass/${id}/student`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
