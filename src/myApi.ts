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

/** @format int32 */
export enum SystemDayOfWeek {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
}

/** @format int32 */
export enum SystemNetHttpStatusCode {
  Value100 = 100,
  Value101 = 101,
  Value102 = 102,
  Value103 = 103,
  Value200 = 200,
  Value201 = 201,
  Value202 = 202,
  Value203 = 203,
  Value204 = 204,
  Value205 = 205,
  Value206 = 206,
  Value207 = 207,
  Value208 = 208,
  Value226 = 226,
  Value300 = 300,
  Value301 = 301,
  Value302 = 302,
  Value303 = 303,
  Value304 = 304,
  Value305 = 305,
  Value306 = 306,
  Value307 = 307,
  Value308 = 308,
  Value400 = 400,
  Value401 = 401,
  Value402 = 402,
  Value403 = 403,
  Value404 = 404,
  Value405 = 405,
  Value406 = 406,
  Value407 = 407,
  Value408 = 408,
  Value409 = 409,
  Value410 = 410,
  Value411 = 411,
  Value412 = 412,
  Value413 = 413,
  Value414 = 414,
  Value415 = 415,
  Value416 = 416,
  Value417 = 417,
  Value421 = 421,
  Value422 = 422,
  Value423 = 423,
  Value424 = 424,
  Value426 = 426,
  Value428 = 428,
  Value429 = 429,
  Value431 = 431,
  Value451 = 451,
  Value500 = 500,
  Value501 = 501,
  Value502 = 502,
  Value503 = 503,
  Value504 = 504,
  Value505 = 505,
  Value506 = 506,
  Value507 = 507,
  Value508 = 508,
  Value510 = 510,
  Value511 = 511,
}

export interface UMApplicationAcademicYearCommandsUpdateCurrentUpdateCurrentCommand {
  academicYear?: string | null;
}

export interface UMApplicationAccountQueriesGetByIdGetByIdDto {
  /** @format uuid */
  id?: string;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  isMale?: boolean | null;
  address?: string | null;
  role?: string | null;
  phoneNumber?: string | null;
}

export interface UMApplicationAuthCommandsLoginLoginCommand {
  userName?: string | null;
  password?: string | null;
}

export interface UMApplicationAuthCommandsUpdateMyInfoUpdateMyInfoCommand {
  phoneNumber?: string | null;
  address?: string | null;
}

export interface UMApplicationAuthQueriesMySummaryInfoMySummaryInfoDto {
  /** @format uuid */
  id?: string;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  isMale?: boolean | null;
  address?: string | null;
  role?: string | null;
  phoneNumber?: string | null;
}

export interface UMApplicationChangeSessionRequestCommandsCreateCreateCommandData {
  /** @format date-time */
  date?: string;
  /** @format int32 */
  slot?: number;
}

export interface UMApplicationChangeSessionRequestQueriesGetAllGetAllDto {
  /** @format uuid */
  id?: string;
  /** @format int32 */
  newSlot?: number;
  /** @format date-time */
  newStartAt?: string;
  /** @format date-time */
  newEndAt?: string;
  /** @format int32 */
  oldSlot?: number;
  /** @format date-time */
  oldStartAt?: string;
  /** @format date-time */
  oldEndAt?: string;
  status?: UMDomainEnumsCourseClassEChangeSessionRequestStatus;
  session?: UMApplicationChangeSessionRequestQueriesGetAllGetByIdDtoSession;
}

export interface UMApplicationChangeSessionRequestQueriesGetAllGetByIdDtoCourseClass {
  name?: string | null;
  academicYear?: string | null;
  teacher?: UMApplicationChangeSessionRequestQueriesGetAllGetByIdDtoTeacher;
}

export interface UMApplicationChangeSessionRequestQueriesGetAllGetByIdDtoSession {
  /** @format uuid */
  id?: string;
  courseClass?: UMApplicationChangeSessionRequestQueriesGetAllGetByIdDtoCourseClass;
}

export interface UMApplicationChangeSessionRequestQueriesGetAllGetByIdDtoTeacher {
  /** @format uuid */
  id?: string;
  teacherId?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  isMale?: boolean;
}

export interface UMApplicationChangeSessionRequestQueriesGetByIdGetByIdDto {
  /** @format uuid */
  id?: string;
  /** @format int32 */
  newSlot?: number;
  /** @format date-time */
  newStartAt?: string;
  /** @format date-time */
  newEndAt?: string;
  /** @format int32 */
  oldSlot?: number;
  /** @format date-time */
  oldStartAt?: string;
  /** @format date-time */
  oldEndAt?: string;
  status?: UMDomainEnumsCourseClassEChangeSessionRequestStatus;
  session?: UMApplicationChangeSessionRequestQueriesGetByIdGetByIdDtoSession;
}

export interface UMApplicationChangeSessionRequestQueriesGetByIdGetByIdDtoCourseClass {
  name?: string | null;
  academicYear?: string | null;
  teacher?: UMApplicationChangeSessionRequestQueriesGetByIdGetByIdDtoTeacher;
}

export interface UMApplicationChangeSessionRequestQueriesGetByIdGetByIdDtoSession {
  /** @format uuid */
  id?: string;
  courseClass?: UMApplicationChangeSessionRequestQueriesGetByIdGetByIdDtoCourseClass;
}

export interface UMApplicationChangeSessionRequestQueriesGetByIdGetByIdDtoTeacher {
  /** @format uuid */
  id?: string;
  teacherId?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  isMale?: boolean;
}

export interface UMApplicationCommonModelsError {
  code?: SystemNetHttpStatusCode;
  message?: string | null;
  property?: string | null;
}

export interface UMApplicationCommonModelsResultSystemBoolean {
  data?: boolean;
  success?: boolean;
  errors?: UMApplicationCommonModelsError[] | null;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableSystemString {
  data?: string[] | null;
  success?: boolean;
  errors?: UMApplicationCommonModelsError[] | null;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationChangeSessionRequestQueriesGetAllGetAllDto {
  data?: UMApplicationChangeSessionRequestQueriesGetAllGetAllDto[] | null;
  success?: boolean;
  errors?: UMApplicationCommonModelsError[] | null;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationCourseQueriesGetAllGetAllDto {
  data?: UMApplicationCourseQueriesGetAllGetAllDto[] | null;
  success?: boolean;
  errors?: UMApplicationCommonModelsError[] | null;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationCourseClassQueriesGetScoresGetScoresDto {
  data?: UMApplicationCourseClassQueriesGetScoresGetScoresDto[] | null;
  success?: boolean;
  errors?: UMApplicationCommonModelsError[] | null;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationManagementClassQueriesGetAllGetAllDto {
  data?: UMApplicationManagementClassQueriesGetAllGetAllDto[] | null;
  success?: boolean;
  errors?: UMApplicationCommonModelsError[] | null;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationProgramQueriesGetAllGetAllDto {
  data?: UMApplicationProgramQueriesGetAllGetAllDto[] | null;
  success?: boolean;
  errors?: UMApplicationCommonModelsError[] | null;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationSessionQueriesGetAllGetAllDto {
  data?: UMApplicationSessionQueriesGetAllGetAllDto[] | null;
  success?: boolean;
  errors?: UMApplicationCommonModelsError[] | null;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationStudentQueriesGetScoresGetScoresDto {
  data?: UMApplicationStudentQueriesGetScoresGetScoresDto[] | null;
  success?: boolean;
  errors?: UMApplicationCommonModelsError[] | null;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMDomainDtosCourseClassICourseClass {
  data?: UMDomainDtosCourseClassICourseClass[] | null;
  success?: boolean;
  errors?: UMApplicationCommonModelsError[] | null;
}

export interface UMApplicationCommonModelsResultSystemString {
  data?: string | null;
  success?: boolean;
  errors?: UMApplicationCommonModelsError[] | null;
}

export interface UMApplicationCommonModelsResultUMApplicationAccountQueriesGetByIdGetByIdDto {
  data?: UMApplicationAccountQueriesGetByIdGetByIdDto;
  success?: boolean;
  errors?: UMApplicationCommonModelsError[] | null;
}

export interface UMApplicationCommonModelsResultUMApplicationAuthQueriesMySummaryInfoMySummaryInfoDto {
  data?: UMApplicationAuthQueriesMySummaryInfoMySummaryInfoDto;
  success?: boolean;
  errors?: UMApplicationCommonModelsError[] | null;
}

export interface UMApplicationCommonModelsResultUMApplicationChangeSessionRequestQueriesGetByIdGetByIdDto {
  data?: UMApplicationChangeSessionRequestQueriesGetByIdGetByIdDto;
  success?: boolean;
  errors?: UMApplicationCommonModelsError[] | null;
}

export interface UMApplicationCommonModelsResultUMApplicationCourseQueriesGetByIdGetByIdDto {
  data?: UMApplicationCourseQueriesGetByIdGetByIdDto;
  success?: boolean;
  errors?: UMApplicationCommonModelsError[] | null;
}

export interface UMApplicationCommonModelsResultUMApplicationCourseClassQueriesGetByIdGetByIdDto {
  data?: UMApplicationCourseClassQueriesGetByIdGetByIdDto;
  success?: boolean;
  errors?: UMApplicationCommonModelsError[] | null;
}

export interface UMApplicationCommonModelsResultUMApplicationManagementClassQueriesGetByIdGetByIdDto {
  data?: UMApplicationManagementClassQueriesGetByIdGetByIdDto;
  success?: boolean;
  errors?: UMApplicationCommonModelsError[] | null;
}

export interface UMApplicationCommonModelsResultUMApplicationProgramQueriesGetByIdGetByIdDto {
  data?: UMApplicationProgramQueriesGetByIdGetByIdDto;
  success?: boolean;
  errors?: UMApplicationCommonModelsError[] | null;
}

export interface UMApplicationCommonModelsResultUMDomainDtosGeneratedToken {
  data?: UMDomainDtosGeneratedToken;
  success?: boolean;
  errors?: UMApplicationCommonModelsError[] | null;
}

export interface UMApplicationCourseCommandsCreateCreateCommand {
  name?: string | null;
  courseId?: string | null;
  programs?: string[] | null;
}

export interface UMApplicationCourseCommandsUpdateUpdateCommandData {
  name?: string | null;
  courseId?: string | null;
}

export interface UMApplicationCourseQueriesGetAllGetAllDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
  courseId?: string | null;
}

export interface UMApplicationCourseQueriesGetByIdGetByIdDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
  courseId?: string | null;
  courseClasses?: UMApplicationCourseQueriesGetByIdGetByIdDtoCourseClass[] | null;
}

export interface UMApplicationCourseQueriesGetByIdGetByIdDtoCourseClass {
  /** @format uuid */
  id?: string;
  name?: string | null;
  /** @format date-time */
  startAt?: string;
  /** @format int32 */
  sessionsCount?: number;
  /** @format int32 */
  status?: number;
  academicYear?: string | null;
}

export interface UMApplicationCourseClassCommandsAssignToManagementClassesAssignToManagementClassesCommandData {
  managementClassesId?: string[] | null;
}

export interface UMApplicationCourseClassCommandsAssignToStudentsAssignToStudentsCommandData {
  studentsId?: string[] | null;
}

export interface UMApplicationCourseClassCommandsBulkCreateBulkCreateCommand {
  courseId?: string | null;
  /** @format int32 */
  numberOfClasses?: number;
  /** @format date-time */
  startAt?: string;
  /** @format int32 */
  sessionsCount?: number;
}

export interface UMApplicationCourseClassCommandsUpdateUpdateCommandData {
  name?: string | null;
  /** @format date-time */
  startAt?: string;
  /** @format int32 */
  sessionsCount?: number;
  teacherId?: string | null;
  slots?: string | null;
}

export interface UMApplicationCourseClassCommandsUpdateScoreUpdateScoreCommandData {
  /** @format double */
  score?: number;
}

export interface UMApplicationCourseClassQueriesGetByIdGetByIdDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
  /** @format date-time */
  startAt?: string;
  /** @format int32 */
  sessionsCount?: number;
  /** @format int32 */
  status?: number;
  academicYear?: string | null;
  teacher?: UMApplicationCourseClassQueriesGetByIdGetByIdDtoTeacher;
  courseId?: string | null;
  sessions?: UMApplicationCourseClassQueriesGetByIdGetByIdDtoSession[] | null;
  slots?: UMApplicationCourseClassQueriesGetByIdGetByIdDtoSlot[] | null;
}

export interface UMApplicationCourseClassQueriesGetByIdGetByIdDtoSession {
  /** @format int32 */
  slot?: number;
  /** @format date-time */
  startAt?: string;
  /** @format date-time */
  endAt?: string;
  courseClass?: UMApplicationCourseClassQueriesGetByIdGetByIdDtoSlotCourseClass;
}

export interface UMApplicationCourseClassQueriesGetByIdGetByIdDtoSlot {
  weekDay?: SystemDayOfWeek;
  /** @format int32 */
  daySlot?: number;
}

export interface UMApplicationCourseClassQueriesGetByIdGetByIdDtoSlotCourseClass {
  name?: string | null;
  academicYear?: string | null;
}

export interface UMApplicationCourseClassQueriesGetByIdGetByIdDtoTeacher {
  teacherId?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  isMale?: boolean;
}

export interface UMApplicationCourseClassQueriesGetScoresGetScoresDto {
  student?: UMApplicationCourseClassQueriesGetScoresGetScoresDtoStudent;
  /** @format double */
  score?: number | null;
  letterScore?: string | null;
}

export interface UMApplicationCourseClassQueriesGetScoresGetScoresDtoManagementClass {
  /** @format uuid */
  id?: string;
  name?: string | null;
  academicYear?: string | null;
}

export interface UMApplicationCourseClassQueriesGetScoresGetScoresDtoStudent {
  /** @format uuid */
  id?: string;
  studentId?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  isMale?: boolean;
  managementClass?: UMApplicationCourseClassQueriesGetScoresGetScoresDtoManagementClass;
}

export interface UMApplicationManagementClassCommandsAddStudentsAddStudentsCommandData {
  studentsId?: string[] | null;
}

export interface UMApplicationManagementClassCommandsBulkCreateBulkCreateCommand {
  programId?: string | null;
  /** @format int32 */
  numberOfClasses?: number;
}

export interface UMApplicationManagementClassCommandsUpdateUpdateCommandData {
  name?: string | null;
}

export interface UMApplicationManagementClassQueriesGetAllGetAllDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
}

export interface UMApplicationManagementClassQueriesGetByIdGetByIdDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
  academicYear?: string | null;
  students?: UMApplicationManagementClassQueriesGetByIdGetByIdDtoStudent[] | null;
}

export interface UMApplicationManagementClassQueriesGetByIdGetByIdDtoStudent {
  /** @format uuid */
  id?: string;
  studentId?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  isMale?: boolean;
}

export interface UMApplicationProgramCommandsCreateCreateCommand {
  name?: string | null;
  programId?: string | null;
}

export interface UMApplicationProgramCommandsUpdateUpdateCommandData {
  name?: string | null;
  programId?: string | null;
}

export interface UMApplicationProgramQueriesGetAllGetAllDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
  programId?: string | null;
}

export interface UMApplicationProgramQueriesGetByIdGetByIdDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
  courses?: UMApplicationProgramQueriesGetByIdGetByIdDtoCourse[] | null;
}

export interface UMApplicationProgramQueriesGetByIdGetByIdDtoCourse {
  /** @format uuid */
  id?: string;
  name?: string | null;
  programId?: string | null;
  courseId?: string | null;
}

export interface UMApplicationSessionQueriesGetAllGetAllDto {
  /** @format uuid */
  id?: string;
  /** @format int32 */
  slot?: number;
  /** @format date-time */
  startAt?: string;
  /** @format date-time */
  endAt?: string;
  courseClass?: UMApplicationSessionQueriesGetAllGetAllDtoCourseClass;
}

export interface UMApplicationSessionQueriesGetAllGetAllDtoCourse {
  /** @format uuid */
  id?: string;
  name?: string | null;
  courseId?: string | null;
}

export interface UMApplicationSessionQueriesGetAllGetAllDtoCourseClass {
  /** @format uuid */
  id?: string;
  name?: string | null;
  course?: UMApplicationSessionQueriesGetAllGetAllDtoCourse;
}

export interface UMApplicationStudentQueriesGetScoresGetScoresDto {
  courseClass?: UMApplicationStudentQueriesGetScoresGetScoresDtoCourseClass;
  /** @format double */
  score?: number | null;
  letterScore?: string | null;
}

export interface UMApplicationStudentQueriesGetScoresGetScoresDtoCourse {
  /** @format uuid */
  id?: string;
  name?: string | null;
  courseId?: string | null;
}

export interface UMApplicationStudentQueriesGetScoresGetScoresDtoCourseClass {
  /** @format uuid */
  id?: string;
  name?: string | null;
  /** @format int32 */
  sessionsCount?: number;
  /** @format int32 */
  status?: number;
  teacher?: UMApplicationStudentQueriesGetScoresGetScoresDtoTeacher;
  course?: UMApplicationStudentQueriesGetScoresGetScoresDtoCourse;
}

export interface UMApplicationStudentQueriesGetScoresGetScoresDtoTeacher {
  teacherId?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  isMale?: boolean;
}

export interface UMApplicationTeacherCommandsCreateCreateCommand {
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  userName?: string | null;
  email?: string | null;
  isMale?: boolean;
  address?: string | null;
  teacherId?: string | null;
}

export type UMDomainDtosCourseClassICourseClass = object;

export interface UMDomainDtosGeneratedToken {
  token?: string | null;
  /** @format date-time */
  expiration?: string;
}

/** @format int32 */
export enum UMDomainEnumsCourseClassEChangeSessionRequestStatus {
  Value1 = 1,
  Value2 = 2,
  Value4 = 4,
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title UM.API
 * @version 1.0
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  academicYear = {
    /**
     * No description
     *
     * @tags AcademicYear
     * @name AcademicYearList
     * @request GET:/AcademicYear
     */
    academicYearList: (params: RequestParams = {}) =>
      this.request<UMApplicationCommonModelsResultSystemString, any>({
        path: `/AcademicYear`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AcademicYear
     * @name AcademicYearUpdate
     * @request PUT:/AcademicYear
     */
    academicYearUpdate: (
      data: UMApplicationAcademicYearCommandsUpdateCurrentUpdateCurrentCommand,
      params: RequestParams = {},
    ) =>
      this.request<UMApplicationCommonModelsResultSystemBoolean, any>({
        path: `/AcademicYear`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AcademicYear
     * @name RecommendationsList
     * @request GET:/AcademicYear/recommendations
     */
    recommendationsList: (params: RequestParams = {}) =>
      this.request<UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableSystemString, any>({
        path: `/AcademicYear/recommendations`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  account = {
    /**
     * No description
     *
     * @tags Account
     * @name ScoreList
     * @request GET:/Account/score
     */
    scoreList: (params: RequestParams = {}) =>
      this.request<
        UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationStudentQueriesGetScoresGetScoresDto,
        any
      >({
        path: `/Account/score`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountDetail
     * @request GET:/Account/{userId}
     */
    accountDetail: (userId: string, params: RequestParams = {}) =>
      this.request<UMApplicationCommonModelsResultUMApplicationAccountQueriesGetByIdGetByIdDto, any>({
        path: `/Account/${userId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountPartialUpdate
     * @request PATCH:/Account/{userId}
     */
    accountPartialUpdate: (userId: string, params: RequestParams = {}) =>
      this.request<UMApplicationCommonModelsResultUMApplicationAccountQueriesGetByIdGetByIdDto, any>({
        path: `/Account/${userId}`,
        method: "PATCH",
        format: "json",
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags Auth
     * @name AuthList
     * @request GET:/Auth
     */
    authList: (params: RequestParams = {}) =>
      this.request<UMApplicationCommonModelsResultUMApplicationAuthQueriesMySummaryInfoMySummaryInfoDto, any>({
        path: `/Auth`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthPartialUpdate
     * @request PATCH:/Auth
     */
    authPartialUpdate: (data: UMApplicationAuthCommandsUpdateMyInfoUpdateMyInfoCommand, params: RequestParams = {}) =>
      this.request<UMApplicationCommonModelsResultSystemBoolean, any>({
        path: `/Auth`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name LoginCreate
     * @request POST:/Auth/login
     */
    loginCreate: (data: UMApplicationAuthCommandsLoginLoginCommand, params: RequestParams = {}) =>
      this.request<UMApplicationCommonModelsResultUMDomainDtosGeneratedToken, any>({
        path: `/Auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  course = {
    /**
     * No description
     *
     * @tags Course
     * @name CourseList
     * @request GET:/Course
     */
    courseList: (params: RequestParams = {}) =>
      this.request<
        UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationCourseQueriesGetAllGetAllDto,
        any
      >({
        path: `/Course`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Course
     * @name CourseCreate
     * @request POST:/Course
     */
    courseCreate: (data: UMApplicationCourseCommandsCreateCreateCommand, params: RequestParams = {}) =>
      this.request<UMApplicationCommonModelsResultUMApplicationCourseQueriesGetByIdGetByIdDto, any>({
        path: `/Course`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Course
     * @name CourseDetail
     * @request GET:/Course/{id}
     */
    courseDetail: (id: string, params: RequestParams = {}) =>
      this.request<UMApplicationCommonModelsResultUMApplicationCourseQueriesGetByIdGetByIdDto, any>({
        path: `/Course/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Course
     * @name CourseUpdate
     * @request PUT:/Course/{id}
     */
    courseUpdate: (id: string, data: UMApplicationCourseCommandsUpdateUpdateCommandData, params: RequestParams = {}) =>
      this.request<UMApplicationCommonModelsResultSystemBoolean, any>({
        path: `/Course/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Course
     * @name CourseDelete
     * @request DELETE:/Course/{id}
     */
    courseDelete: (id: string, params: RequestParams = {}) =>
      this.request<UMApplicationCommonModelsResultSystemBoolean, any>({
        path: `/Course/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
  courseClass = {
    /**
     * No description
     *
     * @tags CourseClass
     * @name CourseClassList
     * @request GET:/CourseClass
     */
    courseClassList: (
      query?: {
        AcademicYear?: string;
        /** @format int32 */
        Status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMDomainDtosCourseClassICourseClass,
        any
      >({
        path: `/CourseClass`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CourseClass
     * @name CourseClassCreate
     * @request POST:/CourseClass
     */
    courseClassCreate: (
      data: UMApplicationCourseClassCommandsBulkCreateBulkCreateCommand,
      params: RequestParams = {},
    ) =>
      this.request<UMApplicationCommonModelsResultSystemBoolean, any>({
        path: `/CourseClass`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CourseClass
     * @name CourseClassDetail
     * @request GET:/CourseClass/{id}
     */
    courseClassDetail: (id: string, params: RequestParams = {}) =>
      this.request<UMApplicationCommonModelsResultUMApplicationCourseClassQueriesGetByIdGetByIdDto, any>({
        path: `/CourseClass/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CourseClass
     * @name CourseClassUpdate
     * @request PUT:/CourseClass/{id}
     */
    courseClassUpdate: (
      id: string,
      data: UMApplicationCourseClassCommandsUpdateUpdateCommandData,
      params: RequestParams = {},
    ) =>
      this.request<UMApplicationCommonModelsResultSystemBoolean, any>({
        path: `/CourseClass/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CourseClass
     * @name CourseClassDelete
     * @request DELETE:/CourseClass/{id}
     */
    courseClassDelete: (id: string, params: RequestParams = {}) =>
      this.request<UMApplicationCommonModelsResultSystemBoolean, any>({
        path: `/CourseClass/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CourseClass
     * @name ManagementClassCreate
     * @request POST:/CourseClass/{id}/management-class
     */
    managementClassCreate: (
      id: string,
      data: UMApplicationCourseClassCommandsAssignToManagementClassesAssignToManagementClassesCommandData,
      params: RequestParams = {},
    ) =>
      this.request<UMApplicationCommonModelsResultSystemBoolean, any>({
        path: `/CourseClass/${id}/management-class`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CourseClass
     * @name ScoreDetail
     * @request GET:/CourseClass/{id}/score
     */
    scoreDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationCourseClassQueriesGetScoresGetScoresDto,
        any
      >({
        path: `/CourseClass/${id}/score`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CourseClass
     * @name StudentCreate
     * @request POST:/CourseClass/{id}/student
     */
    studentCreate: (
      id: string,
      data: UMApplicationCourseClassCommandsAssignToStudentsAssignToStudentsCommandData,
      params: RequestParams = {},
    ) =>
      this.request<UMApplicationCommonModelsResultSystemBoolean, any>({
        path: `/CourseClass/${id}/student`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CourseClass
     * @name StudentUpdate
     * @request PUT:/CourseClass/{id}/student/{studentId}
     */
    studentUpdate: (
      id: string,
      studentId: string,
      data: UMApplicationCourseClassCommandsUpdateScoreUpdateScoreCommandData,
      params: RequestParams = {},
    ) =>
      this.request<UMApplicationCommonModelsResultSystemBoolean, any>({
        path: `/CourseClass/${id}/student/${studentId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CourseClass
     * @name TeacherCreate
     * @request POST:/CourseClass/{id}/teacher/{teacherId}
     */
    teacherCreate: (id: string, teacherId: string, params: RequestParams = {}) =>
      this.request<UMApplicationCommonModelsResultSystemBoolean, any>({
        path: `/CourseClass/${id}/teacher/${teacherId}`,
        method: "POST",
        format: "json",
        ...params,
      }),
  };
  managementClass = {
    /**
     * No description
     *
     * @tags ManagementClass
     * @name ManagementClassList
     * @request GET:/ManagementClass
     */
    managementClassList: (
      query?: {
        AcademicYear?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationManagementClassQueriesGetAllGetAllDto,
        any
      >({
        path: `/ManagementClass`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ManagementClass
     * @name ManagementClassCreate
     * @request POST:/ManagementClass
     */
    managementClassCreate: (
      data: UMApplicationManagementClassCommandsBulkCreateBulkCreateCommand,
      params: RequestParams = {},
    ) =>
      this.request<UMApplicationCommonModelsResultSystemBoolean, any>({
        path: `/ManagementClass`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ManagementClass
     * @name ManagementClassDetail
     * @request GET:/ManagementClass/{id}
     */
    managementClassDetail: (id: string, params: RequestParams = {}) =>
      this.request<UMApplicationCommonModelsResultUMApplicationManagementClassQueriesGetByIdGetByIdDto, any>({
        path: `/ManagementClass/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ManagementClass
     * @name ManagementClassUpdate
     * @request PUT:/ManagementClass/{id}
     */
    managementClassUpdate: (
      id: string,
      data: UMApplicationManagementClassCommandsUpdateUpdateCommandData,
      params: RequestParams = {},
    ) =>
      this.request<UMApplicationCommonModelsResultSystemBoolean, any>({
        path: `/ManagementClass/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ManagementClass
     * @name ManagementClassDelete
     * @request DELETE:/ManagementClass/{id}
     */
    managementClassDelete: (id: string, params: RequestParams = {}) =>
      this.request<UMApplicationCommonModelsResultSystemBoolean, any>({
        path: `/ManagementClass/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ManagementClass
     * @name StudentCreate
     * @request POST:/ManagementClass/{id}/student
     */
    studentCreate: (
      id: string,
      data: UMApplicationManagementClassCommandsAddStudentsAddStudentsCommandData,
      params: RequestParams = {},
    ) =>
      this.request<UMApplicationCommonModelsResultSystemBoolean, any>({
        path: `/ManagementClass/${id}/student`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  program = {
    /**
     * No description
     *
     * @tags Program
     * @name ProgramList
     * @request GET:/Program
     */
    programList: (params: RequestParams = {}) =>
      this.request<
        UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationProgramQueriesGetAllGetAllDto,
        any
      >({
        path: `/Program`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Program
     * @name ProgramCreate
     * @request POST:/Program
     */
    programCreate: (data: UMApplicationProgramCommandsCreateCreateCommand, params: RequestParams = {}) =>
      this.request<UMApplicationCommonModelsResultUMApplicationProgramQueriesGetByIdGetByIdDto, any>({
        path: `/Program`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Program
     * @name ProgramDetail
     * @request GET:/Program/{id}
     */
    programDetail: (id: string, params: RequestParams = {}) =>
      this.request<UMApplicationCommonModelsResultUMApplicationProgramQueriesGetByIdGetByIdDto, any>({
        path: `/Program/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Program
     * @name ProgramUpdate
     * @request PUT:/Program/{id}
     */
    programUpdate: (
      id: string,
      data: UMApplicationProgramCommandsUpdateUpdateCommandData,
      params: RequestParams = {},
    ) =>
      this.request<UMApplicationCommonModelsResultSystemBoolean, any>({
        path: `/Program/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Program
     * @name ProgramDelete
     * @request DELETE:/Program/{id}
     */
    programDelete: (id: string, params: RequestParams = {}) =>
      this.request<UMApplicationCommonModelsResultSystemBoolean, any>({
        path: `/Program/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
  session = {
    /**
     * No description
     *
     * @tags Session
     * @name SessionList
     * @request GET:/Session
     */
    sessionList: (
      query?: {
        /** @format date-time */
        MinDate?: string;
        /** @format date-time */
        MaxDate?: string;
        /** @format date-time */
        Date?: string;
        /** @format int32 */
        Slot?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationSessionQueriesGetAllGetAllDto,
        any
      >({
        path: `/Session`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Session
     * @name ChangeList
     * @request GET:/Session/change
     */
    changeList: (
      query?: {
        /** @format int32 */
        Status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationChangeSessionRequestQueriesGetAllGetAllDto,
        any
      >({
        path: `/Session/change`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Session
     * @name ChangeDetail
     * @request GET:/Session/change/{id}
     */
    changeDetail: (id: string, params: RequestParams = {}) =>
      this.request<UMApplicationCommonModelsResultUMApplicationChangeSessionRequestQueriesGetByIdGetByIdDto, any>({
        path: `/Session/change/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Session
     * @name ChangeApproveCreate
     * @request POST:/Session/change/{id}/approve
     */
    changeApproveCreate: (id: string, params: RequestParams = {}) =>
      this.request<UMApplicationCommonModelsResultSystemBoolean, any>({
        path: `/Session/change/${id}/approve`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Session
     * @name ChangeDenyCreate
     * @request POST:/Session/change/{id}/deny
     */
    changeDenyCreate: (id: string, params: RequestParams = {}) =>
      this.request<UMApplicationCommonModelsResultSystemBoolean, any>({
        path: `/Session/change/${id}/deny`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Session
     * @name ChangeCreate
     * @request POST:/Session/{id}/change
     */
    changeCreate: (
      id: string,
      data: UMApplicationChangeSessionRequestCommandsCreateCreateCommandData,
      params: RequestParams = {},
    ) =>
      this.request<UMApplicationCommonModelsResultUMApplicationChangeSessionRequestQueriesGetByIdGetByIdDto, any>({
        path: `/Session/${id}/change`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  student = {
    /**
     * No description
     *
     * @tags Student
     * @name ScoreDetail
     * @request GET:/Student/{id}/score
     */
    scoreDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationStudentQueriesGetScoresGetScoresDto,
        any
      >({
        path: `/Student/${id}/score`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Student
     * @name ImportCreate
     * @request POST:/Student/import
     */
    importCreate: (params: RequestParams = {}) =>
      this.request<UMApplicationCommonModelsResultSystemBoolean, any>({
        path: `/Student/import`,
        method: "POST",
        format: "json",
        ...params,
      }),
  };
  teacher = {
    /**
     * No description
     *
     * @tags Teacher
     * @name TeacherCreate
     * @request POST:/Teacher
     */
    teacherCreate: (data: UMApplicationTeacherCommandsCreateCreateCommand, params: RequestParams = {}) =>
      this.request<UMApplicationCommonModelsResultUMApplicationAccountQueriesGetByIdGetByIdDto, any>({
        path: `/Teacher`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
