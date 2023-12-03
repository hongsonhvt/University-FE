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
  DeleteProgramData,
  GetProgramByIdData,
  GetProgramData,
  GetProgramParams,
  PostProgramData,
  PutProgramData,
  UMApplicationProgramCommandsCreateCreateCommand,
  UMApplicationProgramCommandsUpdateUpdateCommandData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Program<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Program
   * @name GetProgram
   * @request GET:/Program
   * @response `200` `GetProgramData` Success
   */
  getProgram = (query: GetProgramParams, params: RequestParams = {}) =>
    this.request<GetProgramData>({
      path: `/Program`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags Program
   * @name PostProgram
   * @request POST:/Program
   * @response `200` `PostProgramData` Success
   */
  postProgram = (data: UMApplicationProgramCommandsCreateCreateCommand, params: RequestParams = {}) =>
    this.request<PostProgramData>({
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
   * @name GetProgramById
   * @request GET:/Program/{id}
   * @response `200` `GetProgramByIdData` Success
   */
  getProgramById = (id: string, params: RequestParams = {}) =>
    this.request<GetProgramByIdData>({
      path: `/Program/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Program
   * @name PutProgram
   * @request PUT:/Program/{id}
   * @response `200` `PutProgramData` Success
   */
  putProgram = (id: string, data: UMApplicationProgramCommandsUpdateUpdateCommandData, params: RequestParams = {}) =>
    this.request<PutProgramData>({
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
   * @name DeleteProgram
   * @request DELETE:/Program/{id}
   * @response `200` `DeleteProgramData` Success
   */
  deleteProgram = (id: string, params: RequestParams = {}) =>
    this.request<DeleteProgramData>({
      path: `/Program/${id}`,
      method: "DELETE",
      ...params,
    });
}
