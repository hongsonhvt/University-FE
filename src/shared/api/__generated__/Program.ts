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
  ProgramCreateData,
  ProgramDeleteData,
  ProgramDetailData,
  ProgramListData,
  ProgramUpdateData,
  UMApplicationProgramCommandsCreateCreateCommand,
  UMApplicationProgramCommandsUpdateUpdateCommandData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Program<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Program
   * @name ProgramList
   * @request GET:/Program
   * @response `200` `ProgramListData` Success
   */
  programList = (params: RequestParams = {}) =>
    this.http.request<ProgramListData, any>({
      path: `/Program`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Program
   * @name ProgramCreate
   * @request POST:/Program
   * @response `200` `ProgramCreateData` Success
   */
  programCreate = (data: UMApplicationProgramCommandsCreateCreateCommand, params: RequestParams = {}) =>
    this.http.request<ProgramCreateData, any>({
      path: `/Program`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Program
   * @name ProgramDetail
   * @request GET:/Program/{id}
   * @response `200` `ProgramDetailData` Success
   */
  programDetail = (id: string, params: RequestParams = {}) =>
    this.http.request<ProgramDetailData, any>({
      path: `/Program/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Program
   * @name ProgramUpdate
   * @request PUT:/Program/{id}
   * @response `200` `ProgramUpdateData` Success
   */
  programUpdate = (id: string, data: UMApplicationProgramCommandsUpdateUpdateCommandData, params: RequestParams = {}) =>
    this.http.request<ProgramUpdateData, any>({
      path: `/Program/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Program
   * @name ProgramDelete
   * @request DELETE:/Program/{id}
   * @response `200` `ProgramDeleteData` Success
   */
  programDelete = (id: string, params: RequestParams = {}) =>
    this.http.request<ProgramDeleteData, any>({
      path: `/Program/${id}`,
      method: "DELETE",
      ...params,
    });
}
