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

export type AddStudentsData = UMApplicationCommonModelsResultSystemBoolean;

export type ApproveData = UMApplicationCommonModelsResultSystemBoolean;

export type AssignToManagementClassesData = UMApplicationCommonModelsResultSystemBoolean;

export type AssignToStudentsData = UMApplicationCommonModelsResultSystemBoolean;

export type AssignToTeacherData = UMApplicationCommonModelsResultSystemBoolean;

export type CreateChangeRequestData =
  UMApplicationCommonModelsResultUMApplicationChangeSessionRequestQueriesGetByIdGetByIdDto;

export type DeleteCourseClassData = UMApplicationCommonModelsResultSystemBoolean;

export type DeleteCourseData = UMApplicationCommonModelsResultSystemBoolean;

export type DeleteManagementClassData = UMApplicationCommonModelsResultSystemBoolean;

export type DeleteProgramData = UMApplicationCommonModelsResultSystemBoolean;

export type DenyData = UMApplicationCommonModelsResultSystemBoolean;

export type GetAcademicYearData = UMApplicationCommonModelsResultSystemString;

export type GetAccountByIdData = UMApplicationCommonModelsResultUMApplicationAccountQueriesGetByIdGetByIdDto;

export type GetAllChangeRequestData =
  UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationChangeSessionRequestQueriesGetAllGetAllDto;

export interface GetAllChangeRequestParams {
  /** @format int32 */
  Status?: number;
}

export type GetChangeRequestByIdData =
  UMApplicationCommonModelsResultUMApplicationChangeSessionRequestQueriesGetByIdGetByIdDto;

export type GetCourseByIdData = UMApplicationCommonModelsResultUMApplicationCourseQueriesGetByIdGetByIdDto;

export type GetCourseClassByIdData = UMApplicationCommonModelsResultUMApplicationCourseClassQueriesGetByIdGetByIdDto;

export type GetCourseClassData =
  UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMDomainDtosCourseClassICourseClass;

export interface GetCourseClassParams {
  academicYear?: string;
  q?: string;
  /** @format int32 */
  status?: number;
}

export type GetCourseData =
  UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationCourseQueriesGetAllGetAllDto;

export interface GetCourseParams {
  q?: string;
}

export type GetCourseRecommendationStudentsData =
  UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationCourseClassQueriesGetRecommendationStudentsGetRecommendationStudentsDto;

export type GetManagementClassByIdData =
  UMApplicationCommonModelsResultUMApplicationManagementClassQueriesGetByIdGetByIdDto;

export type GetManagementClassData =
  UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationManagementClassQueriesGetAllGetAllDto;

export interface GetManagementClassParams {
  academicYear?: string;
  q?: string;
}

export type GetMyScoresData =
  UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationStudentQueriesGetScoresGetScoresDto;

export type GetMySummaryInfoData = UMApplicationCommonModelsResultUMApplicationAuthQueriesMySummaryInfoMySummaryInfoDto;

export type GetProgramByIdData = UMApplicationCommonModelsResultUMApplicationProgramQueriesGetByIdGetByIdDto;

export type GetProgramData =
  UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationProgramQueriesGetAllGetAllDto;

export interface GetProgramParams {
  q?: string;
}

export type GetRecommendationsData = UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableSystemString;

export type GetScoreData =
  UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationStudentQueriesGetScoresGetScoresDto;

export type GetScoresData =
  UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationCourseClassQueriesGetScoresGetScoresDto;

export type GetSessionData =
  UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationSessionQueriesGetAllGetAllDto;

export interface GetSessionParams {
  /** @format date-time */
  Date?: string;
  /** @format date-time */
  MaxDate?: string;
  /** @format date-time */
  MinDate?: string;
  /** @format int32 */
  Slot?: number;
}

export type GetStudentData =
  UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationStudentQueriesGetAllGetAllDto;

export interface GetStudentParams {
  Query?: string;
}

export type GetTeacherData =
  UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationTeacherQueriesGetAllGetAllDto;

export interface GetTeacherParams {
  Query?: string;
}

export type ImportData = UMApplicationCommonModelsResultSystemBoolean;

export interface ImportPayload {
  /** @format binary */
  File?: File;
}

export type LoginData = UMApplicationCommonModelsResultUMDomainDtosGeneratedToken;

export type PatchAccountData = UMApplicationCommonModelsResultUMApplicationAccountQueriesGetByIdGetByIdDto;

export type PostCourseClassData = UMApplicationCommonModelsResultSystemBoolean;

export type PostCourseData = UMApplicationCommonModelsResultUMApplicationCourseQueriesGetByIdGetByIdDto;

export type PostManagementClassData = UMApplicationCommonModelsResultSystemBoolean;

export type PostProgramData = UMApplicationCommonModelsResultUMApplicationProgramQueriesGetByIdGetByIdDto;

export type PostTeacherData = UMApplicationCommonModelsResultUMApplicationAccountQueriesGetByIdGetByIdDto;

export type PutAcademicYearData = UMApplicationCommonModelsResultSystemBoolean;

export type PutCourseClassData = UMApplicationCommonModelsResultSystemBoolean;

export type PutCourseData = UMApplicationCommonModelsResultSystemBoolean;

export type PutManagementClassData = UMApplicationCommonModelsResultSystemBoolean;

export type PutProgramData = UMApplicationCommonModelsResultSystemBoolean;

/**
 *
 *
 * 0 = Sunday
 *
 * 1 = Monday
 *
 * 2 = Tuesday
 *
 * 3 = Wednesday
 *
 * 4 = Thursday
 *
 * 5 = Friday
 *
 * 6 = Saturday
 * @format int32
 */
export enum SystemDayOfWeek {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

/**
 *
 *
 * 100 = Continue
 *
 * 101 = SwitchingProtocols
 *
 * 102 = Processing
 *
 * 103 = EarlyHints
 *
 * 200 = OK
 *
 * 201 = Created
 *
 * 202 = Accepted
 *
 * 203 = NonAuthoritativeInformation
 *
 * 204 = NoContent
 *
 * 205 = ResetContent
 *
 * 206 = PartialContent
 *
 * 207 = MultiStatus
 *
 * 208 = AlreadyReported
 *
 * 226 = IMUsed
 *
 * 300 = Ambiguous
 *
 * 301 = Moved
 *
 * 302 = Redirect
 *
 * 303 = RedirectMethod
 *
 * 304 = NotModified
 *
 * 305 = UseProxy
 *
 * 306 = Unused
 *
 * 307 = RedirectKeepVerb
 *
 * 308 = PermanentRedirect
 *
 * 400 = BadRequest
 *
 * 401 = Unauthorized
 *
 * 402 = PaymentRequired
 *
 * 403 = Forbidden
 *
 * 404 = NotFound
 *
 * 405 = MethodNotAllowed
 *
 * 406 = NotAcceptable
 *
 * 407 = ProxyAuthenticationRequired
 *
 * 408 = RequestTimeout
 *
 * 409 = Conflict
 *
 * 410 = Gone
 *
 * 411 = LengthRequired
 *
 * 412 = PreconditionFailed
 *
 * 413 = RequestEntityTooLarge
 *
 * 414 = RequestUriTooLong
 *
 * 415 = UnsupportedMediaType
 *
 * 416 = RequestedRangeNotSatisfiable
 *
 * 417 = ExpectationFailed
 *
 * 421 = MisdirectedRequest
 *
 * 422 = UnprocessableEntity
 *
 * 423 = Locked
 *
 * 424 = FailedDependency
 *
 * 426 = UpgradeRequired
 *
 * 428 = PreconditionRequired
 *
 * 429 = TooManyRequests
 *
 * 431 = RequestHeaderFieldsTooLarge
 *
 * 451 = UnavailableForLegalReasons
 *
 * 500 = InternalServerError
 *
 * 501 = NotImplemented
 *
 * 502 = BadGateway
 *
 * 503 = ServiceUnavailable
 *
 * 504 = GatewayTimeout
 *
 * 505 = HttpVersionNotSupported
 *
 * 506 = VariantAlsoNegotiates
 *
 * 507 = InsufficientStorage
 *
 * 508 = LoopDetected
 *
 * 510 = NotExtended
 *
 * 511 = NetworkAuthenticationRequired
 * @format int32
 */
export enum SystemNetHttpStatusCode {
  Continue = 100,
  SwitchingProtocols = 101,
  Processing = 102,
  EarlyHints = 103,
  OK = 200,
  Created = 201,
  Accepted = 202,
  NonAuthoritativeInformation = 203,
  NoContent = 204,
  ResetContent = 205,
  PartialContent = 206,
  MultiStatus = 207,
  AlreadyReported = 208,
  IMUsed = 226,
  Ambiguous = 300,
  Moved = 301,
  Redirect = 302,
  RedirectMethod = 303,
  NotModified = 304,
  UseProxy = 305,
  Unused = 306,
  RedirectKeepVerb = 307,
  PermanentRedirect = 308,
  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  ProxyAuthenticationRequired = 407,
  RequestTimeout = 408,
  Conflict = 409,
  Gone = 410,
  LengthRequired = 411,
  PreconditionFailed = 412,
  RequestEntityTooLarge = 413,
  RequestUriTooLong = 414,
  UnsupportedMediaType = 415,
  RequestedRangeNotSatisfiable = 416,
  ExpectationFailed = 417,
  MisdirectedRequest = 421,
  UnprocessableEntity = 422,
  Locked = 423,
  FailedDependency = 424,
  UpgradeRequired = 426,
  PreconditionRequired = 428,
  TooManyRequests = 429,
  RequestHeaderFieldsTooLarge = 431,
  UnavailableForLegalReasons = 451,
  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
  HttpVersionNotSupported = 505,
  VariantAlsoNegotiates = 506,
  InsufficientStorage = 507,
  LoopDetected = 508,
  NotExtended = 510,
  NetworkAuthenticationRequired = 511,
}

export interface UMApplicationAcademicYearCommandsUpdateCurrentUpdateCurrentCommand {
  academicYear?: string;
}

export interface UMApplicationAccountQueriesGetByIdGetByIdDto {
  address?: string | null;
  firstName?: string;
  /** @format uuid */
  id?: string;
  isMale?: boolean | null;
  lastName?: string;
  middleName?: string;
  phoneNumber?: string | null;
  role?: string;
}

export interface UMApplicationAuthCommandsLoginLoginCommand {
  password?: string;
  userName?: string;
}

export interface UMApplicationAuthCommandsUpdateMyInfoUpdateMyInfoCommand {
  address?: string;
  phoneNumber?: string;
}

export interface UMApplicationAuthQueriesMySummaryInfoMySummaryInfoDto {
  address?: string | null;
  firstName?: string;
  /** @format uuid */
  id?: string;
  isMale?: boolean | null;
  lastName?: string;
  middleName?: string;
  phoneNumber?: string | null;
  role?: string;
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
  /** @format date-time */
  newEndAt?: string;
  /** @format int32 */
  newSlot?: number;
  /** @format date-time */
  newStartAt?: string;
  /** @format date-time */
  oldEndAt?: string;
  /** @format int32 */
  oldSlot?: number;
  /** @format date-time */
  oldStartAt?: string;
  session?: UMApplicationChangeSessionRequestQueriesGetAllGetByIdDtoSession;
  /**
   *
   *
   * 1 = Active
   *
   * 2 = Approved
   *
   * 4 = Denied
   */
  status?: UMDomainEnumsChangeSessionRequestEChangeSessionRequestStatus;
}

export interface UMApplicationChangeSessionRequestQueriesGetAllGetByIdDtoCourseClass {
  academicYear?: string;
  name?: string;
  teacher?: UMApplicationChangeSessionRequestQueriesGetAllGetByIdDtoTeacher;
}

export interface UMApplicationChangeSessionRequestQueriesGetAllGetByIdDtoSession {
  courseClass?: UMApplicationChangeSessionRequestQueriesGetAllGetByIdDtoCourseClass;
  /** @format uuid */
  id?: string;
}

export interface UMApplicationChangeSessionRequestQueriesGetAllGetByIdDtoTeacher {
  firstName?: string;
  /** @format uuid */
  id?: string;
  isMale?: boolean;
  lastName?: string;
  middleName?: string;
  teacherId?: string;
}

export interface UMApplicationChangeSessionRequestQueriesGetByIdGetByIdDto {
  /** @format uuid */
  id?: string;
  /** @format date-time */
  newEndAt?: string;
  /** @format int32 */
  newSlot?: number;
  /** @format date-time */
  newStartAt?: string;
  /** @format date-time */
  oldEndAt?: string;
  /** @format int32 */
  oldSlot?: number;
  /** @format date-time */
  oldStartAt?: string;
  session?: UMApplicationChangeSessionRequestQueriesGetByIdGetByIdDtoSession;
  /**
   *
   *
   * 1 = Active
   *
   * 2 = Approved
   *
   * 4 = Denied
   */
  status?: UMDomainEnumsChangeSessionRequestEChangeSessionRequestStatus;
}

export interface UMApplicationChangeSessionRequestQueriesGetByIdGetByIdDtoCourseClass {
  academicYear?: string;
  name?: string;
  teacher?: UMApplicationChangeSessionRequestQueriesGetByIdGetByIdDtoTeacher;
}

export interface UMApplicationChangeSessionRequestQueriesGetByIdGetByIdDtoSession {
  courseClass?: UMApplicationChangeSessionRequestQueriesGetByIdGetByIdDtoCourseClass;
  /** @format uuid */
  id?: string;
}

export interface UMApplicationChangeSessionRequestQueriesGetByIdGetByIdDtoTeacher {
  firstName?: string;
  /** @format uuid */
  id?: string;
  isMale?: boolean;
  lastName?: string;
  middleName?: string;
  teacherId?: string;
}

export interface UMApplicationCommonModelsError {
  /**
   *
   *
   * 100 = Continue
   *
   * 101 = SwitchingProtocols
   *
   * 102 = Processing
   *
   * 103 = EarlyHints
   *
   * 200 = OK
   *
   * 201 = Created
   *
   * 202 = Accepted
   *
   * 203 = NonAuthoritativeInformation
   *
   * 204 = NoContent
   *
   * 205 = ResetContent
   *
   * 206 = PartialContent
   *
   * 207 = MultiStatus
   *
   * 208 = AlreadyReported
   *
   * 226 = IMUsed
   *
   * 300 = Ambiguous
   *
   * 301 = Moved
   *
   * 302 = Redirect
   *
   * 303 = RedirectMethod
   *
   * 304 = NotModified
   *
   * 305 = UseProxy
   *
   * 306 = Unused
   *
   * 307 = RedirectKeepVerb
   *
   * 308 = PermanentRedirect
   *
   * 400 = BadRequest
   *
   * 401 = Unauthorized
   *
   * 402 = PaymentRequired
   *
   * 403 = Forbidden
   *
   * 404 = NotFound
   *
   * 405 = MethodNotAllowed
   *
   * 406 = NotAcceptable
   *
   * 407 = ProxyAuthenticationRequired
   *
   * 408 = RequestTimeout
   *
   * 409 = Conflict
   *
   * 410 = Gone
   *
   * 411 = LengthRequired
   *
   * 412 = PreconditionFailed
   *
   * 413 = RequestEntityTooLarge
   *
   * 414 = RequestUriTooLong
   *
   * 415 = UnsupportedMediaType
   *
   * 416 = RequestedRangeNotSatisfiable
   *
   * 417 = ExpectationFailed
   *
   * 421 = MisdirectedRequest
   *
   * 422 = UnprocessableEntity
   *
   * 423 = Locked
   *
   * 424 = FailedDependency
   *
   * 426 = UpgradeRequired
   *
   * 428 = PreconditionRequired
   *
   * 429 = TooManyRequests
   *
   * 431 = RequestHeaderFieldsTooLarge
   *
   * 451 = UnavailableForLegalReasons
   *
   * 500 = InternalServerError
   *
   * 501 = NotImplemented
   *
   * 502 = BadGateway
   *
   * 503 = ServiceUnavailable
   *
   * 504 = GatewayTimeout
   *
   * 505 = HttpVersionNotSupported
   *
   * 506 = VariantAlsoNegotiates
   *
   * 507 = InsufficientStorage
   *
   * 508 = LoopDetected
   *
   * 510 = NotExtended
   *
   * 511 = NetworkAuthenticationRequired
   */
  code?: SystemNetHttpStatusCode;
  message?: string;
  property?: string | null;
}

export interface UMApplicationCommonModelsResultSystemBoolean {
  data?: boolean;
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableSystemString {
  data?: string[];
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationChangeSessionRequestQueriesGetAllGetAllDto {
  data?: UMApplicationChangeSessionRequestQueriesGetAllGetAllDto[];
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationCourseClassQueriesGetRecommendationStudentsGetRecommendationStudentsDto {
  data?: UMApplicationCourseClassQueriesGetRecommendationStudentsGetRecommendationStudentsDto[];
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationCourseClassQueriesGetScoresGetScoresDto {
  data?: UMApplicationCourseClassQueriesGetScoresGetScoresDto[];
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationCourseQueriesGetAllGetAllDto {
  data?: UMApplicationCourseQueriesGetAllGetAllDto[];
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationManagementClassQueriesGetAllGetAllDto {
  data?: UMApplicationManagementClassQueriesGetAllGetAllDto[];
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationProgramQueriesGetAllGetAllDto {
  data?: UMApplicationProgramQueriesGetAllGetAllDto[];
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationSessionQueriesGetAllGetAllDto {
  data?: UMApplicationSessionQueriesGetAllGetAllDto[];
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationStudentQueriesGetAllGetAllDto {
  data?: UMApplicationStudentQueriesGetAllGetAllDto[];
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationStudentQueriesGetScoresGetScoresDto {
  data?: UMApplicationStudentQueriesGetScoresGetScoresDto[];
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationTeacherQueriesGetAllGetAllDto {
  data?: UMApplicationTeacherQueriesGetAllGetAllDto[];
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMDomainDtosCourseClassICourseClass {
  data?: UMDomainDtosCourseClassICourseClass[];
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultSystemString {
  data?: string;
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultUMApplicationAccountQueriesGetByIdGetByIdDto {
  data?: UMApplicationAccountQueriesGetByIdGetByIdDto;
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultUMApplicationAuthQueriesMySummaryInfoMySummaryInfoDto {
  data?: UMApplicationAuthQueriesMySummaryInfoMySummaryInfoDto;
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultUMApplicationChangeSessionRequestQueriesGetByIdGetByIdDto {
  data?: UMApplicationChangeSessionRequestQueriesGetByIdGetByIdDto;
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultUMApplicationCourseClassQueriesGetByIdGetByIdDto {
  data?: UMApplicationCourseClassQueriesGetByIdGetByIdDto;
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultUMApplicationCourseQueriesGetByIdGetByIdDto {
  data?: UMApplicationCourseQueriesGetByIdGetByIdDto;
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultUMApplicationManagementClassQueriesGetByIdGetByIdDto {
  data?: UMApplicationManagementClassQueriesGetByIdGetByIdDto;
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultUMApplicationProgramQueriesGetByIdGetByIdDto {
  data?: UMApplicationProgramQueriesGetByIdGetByIdDto;
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultUMDomainDtosGeneratedToken {
  data?: UMDomainDtosGeneratedToken;
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCourseClassCommandsAssignToManagementClassesAssignToManagementClassesCommandData {
  managementClassesId?: string[];
}

export interface UMApplicationCourseClassCommandsAssignToStudentsAssignToStudentsCommandData {
  studentsId?: string[];
}

export interface UMApplicationCourseClassCommandsBulkCreateBulkCreateCommand {
  courseId?: string;
  /** @format int32 */
  numberOfClasses?: number;
  /** @format int32 */
  sessionsCount?: number;
  /** @format date-time */
  startAt?: string;
}

export interface UMApplicationCourseClassCommandsUpdateUpdateCommandData {
  name?: string;
  /** @format int32 */
  sessionsCount?: number;
  slots?: string;
  /** @format date-time */
  startAt?: string;
}

export interface UMApplicationCourseClassQueriesGetByIdGetByIdDto {
  academicYear?: string;
  course?: UMApplicationCourseClassQueriesGetByIdGetByIdDtoCourse;
  /** @format uuid */
  id?: string;
  name?: string;
  sessions?: UMApplicationCourseClassQueriesGetByIdGetByIdDtoSession[];
  /** @format int32 */
  sessionsCount?: number;
  slots?: UMApplicationCourseClassQueriesGetByIdGetByIdDtoSlot[];
  /** @format date-time */
  startAt?: string;
  /** @format int32 */
  status?: number;
  teacher?: UMApplicationCourseClassQueriesGetByIdGetByIdDtoTeacher;
}

export interface UMApplicationCourseClassQueriesGetByIdGetByIdDtoCourse {
  courseId?: string;
  /** @format uuid */
  id?: string;
  name?: string;
}

export interface UMApplicationCourseClassQueriesGetByIdGetByIdDtoSession {
  courseClass?: UMApplicationCourseClassQueriesGetByIdGetByIdDtoSlotCourseClass;
  /** @format date-time */
  endAt?: string;
  /** @format int32 */
  slot?: number;
  /** @format date-time */
  startAt?: string;
}

export interface UMApplicationCourseClassQueriesGetByIdGetByIdDtoSlot {
  /** @format int32 */
  daySlot?: number;
  /**
   *
   *
   * 0 = Sunday
   *
   * 1 = Monday
   *
   * 2 = Tuesday
   *
   * 3 = Wednesday
   *
   * 4 = Thursday
   *
   * 5 = Friday
   *
   * 6 = Saturday
   */
  weekDay?: SystemDayOfWeek;
}

export interface UMApplicationCourseClassQueriesGetByIdGetByIdDtoSlotCourseClass {
  academicYear?: string;
  name?: string;
}

export interface UMApplicationCourseClassQueriesGetByIdGetByIdDtoTeacher {
  firstName?: string;
  /** @format uuid */
  id?: string;
  isMale?: boolean;
  lastName?: string;
  middleName?: string;
  teacherId?: string;
}

export interface UMApplicationCourseClassQueriesGetRecommendationStudentsGetRecommendationStudentsDto {
  firstName?: string;
  /** @format uuid */
  id?: string;
  isMale?: boolean;
  lastName?: string;
  managementClass?: UMApplicationCourseClassQueriesGetRecommendationStudentsGetRecommendationStudentsDtoManagementClass;
  middleName?: string;
  studentId?: string;
}

export interface UMApplicationCourseClassQueriesGetRecommendationStudentsGetRecommendationStudentsDtoManagementClass {
  /** @format uuid */
  id?: string;
  name?: string;
}

export interface UMApplicationCourseClassQueriesGetScoresGetScoresDto {
  letterScore?: string | null;
  /** @format double */
  score?: number | null;
  student?: UMApplicationCourseClassQueriesGetScoresGetScoresDtoStudent;
}

export interface UMApplicationCourseClassQueriesGetScoresGetScoresDtoManagementClass {
  academicYear?: string;
  /** @format uuid */
  id?: string;
  name?: string;
}

export interface UMApplicationCourseClassQueriesGetScoresGetScoresDtoStudent {
  firstName?: string;
  /** @format uuid */
  id?: string;
  isMale?: boolean;
  lastName?: string;
  managementClass?: UMApplicationCourseClassQueriesGetScoresGetScoresDtoManagementClass;
  middleName?: string;
  studentId?: string;
}

export interface UMApplicationCourseCommandsCreateCreateCommand {
  courseId?: string;
  name?: string;
  programs?: string[];
}

export interface UMApplicationCourseCommandsUpdateUpdateCommandData {
  courseId?: string;
  name?: string;
}

export interface UMApplicationCourseQueriesGetAllGetAllDto {
  courseId?: string;
  /** @format uuid */
  id?: string;
  name?: string;
}

export interface UMApplicationCourseQueriesGetByIdGetByIdDto {
  courseClasses?: UMApplicationCourseQueriesGetByIdGetByIdDtoCourseClass[];
  courseId?: string;
  /** @format uuid */
  id?: string;
  name?: string;
}

export interface UMApplicationCourseQueriesGetByIdGetByIdDtoCourseClass {
  academicYear?: string;
  /** @format uuid */
  id?: string;
  name?: string;
  /** @format int32 */
  sessionsCount?: number;
  /** @format date-time */
  startAt?: string;
  /** @format int32 */
  status?: number;
}

export interface UMApplicationManagementClassCommandsAddStudentsAddStudentsCommandData {
  studentsId?: string[];
}

export interface UMApplicationManagementClassCommandsBulkCreateBulkCreateCommand {
  /** @format int32 */
  numberOfClasses?: number;
  programId?: string;
}

export interface UMApplicationManagementClassCommandsUpdateUpdateCommandData {
  name?: string;
}

export interface UMApplicationManagementClassQueriesGetAllGetAllDto {
  academicYear?: string;
  /** @format uuid */
  id?: string;
  name?: string;
  program?: UMApplicationManagementClassQueriesGetAllGetAllDtoProgram;
  /** @format int32 */
  studentsCount?: number;
}

export interface UMApplicationManagementClassQueriesGetAllGetAllDtoProgram {
  /** @format uuid */
  id?: string;
  name?: string;
  programId?: string;
}

export interface UMApplicationManagementClassQueriesGetByIdGetByIdDto {
  academicYear?: string;
  /** @format uuid */
  id?: string;
  name?: string;
  program?: UMApplicationManagementClassQueriesGetByIdGetByIdDtoProgram;
  students?: UMApplicationManagementClassQueriesGetByIdGetByIdDtoStudent[];
}

export interface UMApplicationManagementClassQueriesGetByIdGetByIdDtoProgram {
  /** @format uuid */
  id?: string;
  name?: string;
  programId?: string;
}

export interface UMApplicationManagementClassQueriesGetByIdGetByIdDtoStudent {
  firstName?: string;
  /** @format uuid */
  id?: string;
  isMale?: boolean;
  lastName?: string;
  middleName?: string;
  studentId?: string;
}

export interface UMApplicationProgramCommandsCreateCreateCommand {
  name?: string;
  programId?: string;
}

export interface UMApplicationProgramCommandsUpdateUpdateCommandData {
  name?: string;
  programId?: string;
}

export interface UMApplicationProgramQueriesGetAllGetAllDto {
  /** @format uuid */
  id?: string;
  name?: string;
  programId?: string;
}

export interface UMApplicationProgramQueriesGetByIdGetByIdDto {
  courses?: UMApplicationProgramQueriesGetByIdGetByIdDtoCourse[];
  /** @format uuid */
  id?: string;
  name?: string;
  programId?: string;
}

export interface UMApplicationProgramQueriesGetByIdGetByIdDtoCourse {
  courseId?: string;
  /** @format uuid */
  id?: string;
  name?: string;
  programId?: string;
}

export interface UMApplicationSessionQueriesGetAllGetAllDto {
  courseClass?: UMApplicationSessionQueriesGetAllGetAllDtoCourseClass;
  /** @format date-time */
  endAt?: string;
  /** @format uuid */
  id?: string;
  /** @format int32 */
  slot?: number;
  /** @format date-time */
  startAt?: string;
}

export interface UMApplicationSessionQueriesGetAllGetAllDtoCourse {
  courseId?: string;
  /** @format uuid */
  id?: string;
  name?: string;
}

export interface UMApplicationSessionQueriesGetAllGetAllDtoCourseClass {
  course?: UMApplicationSessionQueriesGetAllGetAllDtoCourse;
  /** @format uuid */
  id?: string;
  name?: string;
}

export interface UMApplicationStudentQueriesGetAllGetAllDto {
  firstName?: string;
  /** @format uuid */
  id?: string;
  isMale?: boolean;
  lastName?: string;
  managementClass?: UMApplicationStudentQueriesGetAllGetAllDtoManagementClass;
  middleName?: string;
  studentId?: string;
}

export interface UMApplicationStudentQueriesGetAllGetAllDtoManagementClass {
  /** @format uuid */
  id?: string;
  name?: string;
}

export interface UMApplicationStudentQueriesGetScoresGetScoresDto {
  courseClass?: UMApplicationStudentQueriesGetScoresGetScoresDtoCourseClass;
  letterScore?: string | null;
  /** @format double */
  score?: number | null;
}

export interface UMApplicationStudentQueriesGetScoresGetScoresDtoCourse {
  courseId?: string;
  /** @format uuid */
  id?: string;
  name?: string;
}

export interface UMApplicationStudentQueriesGetScoresGetScoresDtoCourseClass {
  course?: UMApplicationStudentQueriesGetScoresGetScoresDtoCourse;
  /** @format uuid */
  id?: string;
  name?: string;
  /** @format int32 */
  sessionsCount?: number;
  /**
   *
   *
   * 1 = Draft
   *
   * 2 = Active
   *
   * 4 = Finished
   */
  status?: UMDomainEnumsCourseClassECourseClassStatus;
  teacher?: UMApplicationStudentQueriesGetScoresGetScoresDtoTeacher;
}

export interface UMApplicationStudentQueriesGetScoresGetScoresDtoTeacher {
  firstName?: string;
  isMale?: boolean;
  lastName?: string;
  middleName?: string;
  teacherId?: string;
}

export interface UMApplicationTeacherCommandsCreateCreateCommand {
  address?: string;
  email?: string;
  firstName?: string;
  isMale?: boolean;
  lastName?: string;
  middleName?: string;
  teacherId?: string;
  userName?: string;
}

export interface UMApplicationTeacherQueriesGetAllGetAllDto {
  firstName?: string;
  /** @format uuid */
  id?: string;
  isMale?: boolean;
  lastName?: string;
  middleName?: string;
  teacherId?: string;
}

export interface UMDomainDtosCourseClassICourseClass {
  academicYear?: string;
  /** @format uuid */
  id?: string;
  name?: string;
  /** @format int32 */
  sessionsCount?: number;
  /** @format date-time */
  startAt?: string;
  /** @format int32 */
  status?: number;
}

export interface UMDomainDtosGeneratedToken {
  /** @format date-time */
  expiration?: string;
  token?: string;
}

/**
 *
 *
 * 1 = Active
 *
 * 2 = Approved
 *
 * 4 = Denied
 * @format int32
 */
export enum UMDomainEnumsChangeSessionRequestEChangeSessionRequestStatus {
  Active = 1,
  Approved = 2,
  Denied = 4,
}

/**
 *
 *
 * 1 = Draft
 *
 * 2 = Active
 *
 * 4 = Finished
 * @format int32
 */
export enum UMDomainEnumsCourseClassECourseClassStatus {
  Draft = 1,
  Active = 2,
  Finished = 4,
}

export type UpdateInformationData = UMApplicationCommonModelsResultSystemBoolean;

export type UpdateScoreData = UMApplicationCommonModelsResultSystemBoolean;

export type UpdateScorePayload = Record<string, number>;
