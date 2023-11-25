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
  GetAcademicYearData,
  GetRecommendationsData,
  PutAcademicYearData,
  UMApplicationAcademicYearCommandsUpdateCurrentUpdateCurrentCommand,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class AcademicYear<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags AcademicYear
   * @name GetAcademicYear
   * @request GET:/AcademicYear
   * @response `200` `GetAcademicYearData` Success
   */
  getAcademicYear = (params: RequestParams = {}) =>
    this.request<GetAcademicYearData>({
      path: `/AcademicYear`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags AcademicYear
   * @name PutAcademicYear
   * @request PUT:/AcademicYear
   * @response `200` `PutAcademicYearData` Success
   */
  putAcademicYear = (
    data: UMApplicationAcademicYearCommandsUpdateCurrentUpdateCurrentCommand,
    params: RequestParams = {},
  ) =>
    this.request<PutAcademicYearData>({
      path: `/AcademicYear`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags AcademicYear
   * @name GetRecommendations
   * @request GET:/AcademicYear/recommendations
   * @response `200` `GetRecommendationsData` Success
   */
  getRecommendations = (params: RequestParams = {}) =>
    this.request<GetRecommendationsData>({
      path: `/AcademicYear/recommendations`,
      method: "GET",
      ...params,
    });
}
