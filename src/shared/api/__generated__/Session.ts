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
  ApproveData,
  CreateChangeRequestData,
  DenyData,
  GetAllChangeRequestData,
  GetAllChangeRequestParams,
  GetChangeRequestByIdData,
  GetSessionData,
  GetSessionParams,
  UMApplicationChangeSessionRequestCommandsCreateCreateCommandData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Session<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Session
   * @name GetSession
   * @request GET:/Session
   * @response `200` `GetSessionData` Success
   */
  getSession = (query: GetSessionParams, params: RequestParams = {}) =>
    this.request<GetSessionData>({
      path: `/Session`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags Session
   * @name GetAllChangeRequest
   * @request GET:/Session/change
   * @response `200` `GetAllChangeRequestData` Success
   */
  getAllChangeRequest = (query: GetAllChangeRequestParams, params: RequestParams = {}) =>
    this.request<GetAllChangeRequestData>({
      path: `/Session/change`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags Session
   * @name GetChangeRequestById
   * @request GET:/Session/change/{id}
   * @response `200` `GetChangeRequestByIdData` Success
   */
  getChangeRequestById = (id: string, params: RequestParams = {}) =>
    this.request<GetChangeRequestByIdData>({
      path: `/Session/change/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Session
   * @name Approve
   * @request POST:/Session/change/{id}/approve
   * @response `200` `ApproveData` Success
   */
  approve = (id: string, params: RequestParams = {}) =>
    this.request<ApproveData>({
      path: `/Session/change/${id}/approve`,
      method: "POST",
      ...params,
    });
  /**
   * No description
   *
   * @tags Session
   * @name Deny
   * @request POST:/Session/change/{id}/deny
   * @response `200` `DenyData` Success
   */
  deny = (id: string, params: RequestParams = {}) =>
    this.request<DenyData>({
      path: `/Session/change/${id}/deny`,
      method: "POST",
      ...params,
    });
  /**
   * No description
   *
   * @tags Session
   * @name CreateChangeRequest
   * @request POST:/Session/{id}/change
   * @response `200` `CreateChangeRequestData` Success
   */
  createChangeRequest = (
    id: string,
    data: UMApplicationChangeSessionRequestCommandsCreateCreateCommandData,
    params: RequestParams = {},
  ) =>
    this.request<CreateChangeRequestData>({
      path: `/Session/${id}/change`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
