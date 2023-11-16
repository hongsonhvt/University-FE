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

import { ImportCreateData, ScoreDetailResult } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Student<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Student
   * @name ScoreDetail
   * @request GET:/Student/{id}/score
   * @response `200` `ScoreDetailResult` Success
   */
  scoreDetail = (id: string, params: RequestParams = {}) =>
    this.http.request<ScoreDetailResult, any>({
      path: `/Student/${id}/score`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Student
   * @name ImportCreate
   * @request POST:/Student/import
   * @response `200` `ImportCreateData` Success
   */
  importCreate = (params: RequestParams = {}) =>
    this.http.request<ImportCreateData, any>({
      path: `/Student/import`,
      method: "POST",
      ...params,
    });
}
