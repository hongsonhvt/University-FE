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
  ChangeApproveCreateData,
  ChangeCreateData,
  ChangeDenyCreateData,
  ChangeDetailData,
  ChangeListData,
  ChangeListParams,
  SessionListData,
  SessionListParams,
  UMApplicationChangeSessionRequestCommandsCreateCreateCommandData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Session<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Session
   * @name SessionList
   * @request GET:/Session
   * @response `200` `SessionListData` Success
   */
  sessionList = (query: SessionListParams, params: RequestParams = {}) =>
    this.http.request<SessionListData, any>({
      path: `/Session`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags Session
   * @name ChangeList
   * @request GET:/Session/change
   * @response `200` `ChangeListData` Success
   */
  changeList = (query: ChangeListParams, params: RequestParams = {}) =>
    this.http.request<ChangeListData, any>({
      path: `/Session/change`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags Session
   * @name ChangeDetail
   * @request GET:/Session/change/{id}
   * @response `200` `ChangeDetailData` Success
   */
  changeDetail = (id: string, params: RequestParams = {}) =>
    this.http.request<ChangeDetailData, any>({
      path: `/Session/change/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Session
   * @name ChangeApproveCreate
   * @request POST:/Session/change/{id}/approve
   * @response `200` `ChangeApproveCreateData` Success
   */
  changeApproveCreate = (id: string, params: RequestParams = {}) =>
    this.http.request<ChangeApproveCreateData, any>({
      path: `/Session/change/${id}/approve`,
      method: "POST",
      ...params,
    });
  /**
   * No description
   *
   * @tags Session
   * @name ChangeDenyCreate
   * @request POST:/Session/change/{id}/deny
   * @response `200` `ChangeDenyCreateData` Success
   */
  changeDenyCreate = (id: string, params: RequestParams = {}) =>
    this.http.request<ChangeDenyCreateData, any>({
      path: `/Session/change/${id}/deny`,
      method: "POST",
      ...params,
    });
  /**
   * No description
   *
   * @tags Session
   * @name ChangeCreate
   * @request POST:/Session/{id}/change
   * @response `200` `ChangeCreateData` Success
   */
  changeCreate = (
    id: string,
    data: UMApplicationChangeSessionRequestCommandsCreateCreateCommandData,
    params: RequestParams = {},
  ) =>
    this.http.request<ChangeCreateData, any>({
      path: `/Session/${id}/change`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
