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

import { AccountDetailData, AccountPartialUpdateData, ScoreListData } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Account<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Account
   * @name ScoreList
   * @request GET:/Account/score
   * @response `200` `ScoreListData` Success
   */
  scoreList = (params: RequestParams = {}) =>
    this.http.request<ScoreListData, any>({
      path: `/Account/score`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Account
   * @name AccountDetail
   * @request GET:/Account/{userId}
   * @response `200` `AccountDetailData` Success
   */
  accountDetail = (userId: string, params: RequestParams = {}) =>
    this.http.request<AccountDetailData, any>({
      path: `/Account/${userId}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Account
   * @name AccountPartialUpdate
   * @request PATCH:/Account/{userId}
   * @response `200` `AccountPartialUpdateData` Success
   */
  accountPartialUpdate = (userId: string, params: RequestParams = {}) =>
    this.http.request<AccountPartialUpdateData, any>({
      path: `/Account/${userId}`,
      method: "PATCH",
      ...params,
    });
}
