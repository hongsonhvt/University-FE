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
  AcademicYearListData,
  AcademicYearUpdateData,
  RecommendationsListData,
  UMApplicationAcademicYearCommandsUpdateCurrentUpdateCurrentCommand,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class AcademicYear<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags AcademicYear
   * @name AcademicYearList
   * @request GET:/AcademicYear
   * @response `200` `AcademicYearListData` Success
   */
  academicYearList = (params: RequestParams = {}) =>
    this.http.request<AcademicYearListData, any>({
      path: `/AcademicYear`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags AcademicYear
   * @name AcademicYearUpdate
   * @request PUT:/AcademicYear
   * @response `200` `AcademicYearUpdateData` Success
   */
  academicYearUpdate = (
    data: UMApplicationAcademicYearCommandsUpdateCurrentUpdateCurrentCommand,
    params: RequestParams = {},
  ) =>
    this.http.request<AcademicYearUpdateData, any>({
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
   * @name RecommendationsList
   * @request GET:/AcademicYear/recommendations
   * @response `200` `RecommendationsListData` Success
   */
  recommendationsList = (params: RequestParams = {}) =>
    this.http.request<RecommendationsListData, any>({
      path: `/AcademicYear/recommendations`,
      method: "GET",
      ...params,
    });
}
