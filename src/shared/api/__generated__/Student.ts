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

import { GetScoreData, GetStudentData, GetStudentParams, ImportData } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Student<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Student
   * @name GetStudent
   * @request GET:/Student
   * @response `200` `GetStudentData` Success
   */
  getStudent = (query: GetStudentParams, params: RequestParams = {}) =>
    this.request<GetStudentData>({
      path: `/Student`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags Student
   * @name GetScore
   * @request GET:/Student/{id}/score
   * @response `200` `GetScoreData` Success
   */
  getScore = (id: string, params: RequestParams = {}) =>
    this.request<GetScoreData>({
      path: `/Student/${id}/score`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Student
   * @name Import
   * @request POST:/Student/import
   * @response `200` `ImportData` Success
   */
  import = (params: RequestParams = {}) =>
    this.request<ImportData>({
      path: `/Student/import`,
      method: "POST",
      ...params,
    });
}
