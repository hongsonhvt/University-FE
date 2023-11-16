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
  AuthListData,
  AuthPartialUpdateData,
  LoginCreateData,
  UMApplicationAuthCommandsLoginLoginCommand,
  UMApplicationAuthCommandsUpdateMyInfoUpdateMyInfoCommand,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Auth<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Auth
   * @name AuthList
   * @request GET:/Auth
   * @response `200` `AuthListData` Success
   */
  authList = (params: RequestParams = {}) =>
    this.http.request<AuthListData, any>({
      path: `/Auth`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthPartialUpdate
   * @request PATCH:/Auth
   * @response `200` `AuthPartialUpdateData` Success
   */
  authPartialUpdate = (data: UMApplicationAuthCommandsUpdateMyInfoUpdateMyInfoCommand, params: RequestParams = {}) =>
    this.http.request<AuthPartialUpdateData, any>({
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
   * @name LoginCreate
   * @request POST:/Auth/login
   * @response `200` `LoginCreateData` Success
   */
  loginCreate = (data: UMApplicationAuthCommandsLoginLoginCommand, params: RequestParams = {}) =>
    this.http.request<LoginCreateData, any>({
      path: `/Auth/login`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
