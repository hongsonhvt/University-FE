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
  GetMySummaryInfoData,
  LoginData,
  UMApplicationAuthCommandsLoginLoginCommand,
  UMApplicationAuthCommandsUpdateMyInfoUpdateMyInfoCommand,
  UpdateInformationData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Auth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Auth
   * @name GetMySummaryInfo
   * @request GET:/Auth
   * @response `200` `GetMySummaryInfoData` Success
   */
  getMySummaryInfo = (params: RequestParams = {}) =>
    this.request<GetMySummaryInfoData>({
      path: `/Auth`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name UpdateInformation
   * @request PATCH:/Auth
   * @response `200` `UpdateInformationData` Success
   */
  updateInformation = (data: UMApplicationAuthCommandsUpdateMyInfoUpdateMyInfoCommand, params: RequestParams = {}) =>
    this.request<UpdateInformationData>({
      path: `/Auth`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name Login
   * @request POST:/Auth/login
   * @response `200` `LoginData` Success
   */
  login = (data: UMApplicationAuthCommandsLoginLoginCommand, params: RequestParams = {}) =>
    this.request<LoginData>({
      path: `/Auth/login`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
