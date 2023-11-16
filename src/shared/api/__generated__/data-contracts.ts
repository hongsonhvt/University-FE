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

export type AcademicYearListData = UMApplicationCommonModelsResultSystemString;

export type AcademicYearUpdateData = UMApplicationCommonModelsResultSystemBoolean;

export type AccountDetailData = UMApplicationCommonModelsResultUMApplicationAccountQueriesGetByIdGetByIdDto;

export type AccountPartialUpdateData = UMApplicationCommonModelsResultUMApplicationAccountQueriesGetByIdGetByIdDto;

export type AuthListData = UMApplicationCommonModelsResultUMApplicationAuthQueriesMySummaryInfoMySummaryInfoDto;

export type AuthPartialUpdateData = UMApplicationCommonModelsResultSystemBoolean;

export type ChangeApproveCreateData = UMApplicationCommonModelsResultSystemBoolean;

export type ChangeCreateData = UMApplicationCommonModelsResultUMApplicationChangeSessionRequestQueriesGetByIdGetByIdDto;

export type ChangeDenyCreateData = UMApplicationCommonModelsResultSystemBoolean;

export type ChangeDetailData = UMApplicationCommonModelsResultUMApplicationChangeSessionRequestQueriesGetByIdGetByIdDto;

export type ChangeListData =
  UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationChangeSessionRequestQueriesGetAllGetAllDto;

export interface ChangeListParams {
  /** @format int32 */
  Status?: number;
}

export type CourseClassCreateData = UMApplicationCommonModelsResultSystemBoolean;

export type CourseClassDeleteData = UMApplicationCommonModelsResultSystemBoolean;

export type CourseClassDetailData = UMApplicationCommonModelsResultUMApplicationCourseClassQueriesGetByIdGetByIdDto;

export type CourseClassListData =
  UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMDomainDtosCourseClassICourseClass;

export interface CourseClassListParams {
  AcademicYear?: string;
  /** @format int32 */
  Status?: number;
}

export type CourseClassUpdateData = UMApplicationCommonModelsResultSystemBoolean;

export type CourseCreateData = UMApplicationCommonModelsResultUMApplicationCourseQueriesGetByIdGetByIdDto;

export type CourseDeleteData = UMApplicationCommonModelsResultSystemBoolean;

export type CourseDetailData = UMApplicationCommonModelsResultUMApplicationCourseQueriesGetByIdGetByIdDto;

export type CourseListData =
  UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationCourseQueriesGetAllGetAllDto;

export type CourseUpdateData = UMApplicationCommonModelsResultSystemBoolean;

export type ImportCreateData = UMApplicationCommonModelsResultSystemBoolean;

export type LoginCreateData = UMApplicationCommonModelsResultUMDomainDtosGeneratedToken;

export type ManagementClassCreateData = UMApplicationCommonModelsResultSystemBoolean;

export type ManagementClassCreateResult = UMApplicationCommonModelsResultSystemBoolean;

export type ManagementClassDeleteData = UMApplicationCommonModelsResultSystemBoolean;

export type ManagementClassDetailData =
  UMApplicationCommonModelsResultUMApplicationManagementClassQueriesGetByIdGetByIdDto;

export type ManagementClassListData =
  UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationManagementClassQueriesGetAllGetAllDto;

export interface ManagementClassListParams {
  AcademicYear?: string;
}

export type ManagementClassUpdateData = UMApplicationCommonModelsResultSystemBoolean;

export type ProgramCreateData = UMApplicationCommonModelsResultUMApplicationProgramQueriesGetByIdGetByIdDto;

export type ProgramDeleteData = UMApplicationCommonModelsResultSystemBoolean;

export type ProgramDetailData = UMApplicationCommonModelsResultUMApplicationProgramQueriesGetByIdGetByIdDto;

export type ProgramListData =
  UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationProgramQueriesGetAllGetAllDto;

export type ProgramUpdateData = UMApplicationCommonModelsResultSystemBoolean;

export type RecommendationsListData = UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableSystemString;

export type ScoreDetailData =
  UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationCourseClassQueriesGetScoresGetScoresDto;

export type ScoreDetailResult =
  UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationStudentQueriesGetScoresGetScoresDto;

export type ScoreListData =
  UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationStudentQueriesGetScoresGetScoresDto;

export type SessionListData =
  UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationSessionQueriesGetAllGetAllDto;

export interface SessionListParams {
  /** @format date-time */
  Date?: string;
  /** @format date-time */
  MaxDate?: string;
  /** @format date-time */
  MinDate?: string;
  /** @format int32 */
  Slot?: number;
}

export type StudentCreateData = UMApplicationCommonModelsResultSystemBoolean;

export type StudentCreateResult = UMApplicationCommonModelsResultSystemBoolean;

export type StudentUpdateData = UMApplicationCommonModelsResultSystemBoolean;

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

export type TeacherCreateData = UMApplicationCommonModelsResultSystemBoolean;

export type TeacherCreateResult = UMApplicationCommonModelsResultUMApplicationAccountQueriesGetByIdGetByIdDto;

export interface UMApplicationAcademicYearCommandsUpdateCurrentUpdateCurrentCommand {
  academicYear?: string | null;
}

export interface UMApplicationAccountQueriesGetByIdGetByIdDto {
  address?: string | null;
  firstName?: string | null;
  /** @format uuid */
  id?: string;
  isMale?: boolean | null;
  lastName?: string | null;
  middleName?: string | null;
  phoneNumber?: string | null;
  role?: string | null;
}

export interface UMApplicationAuthCommandsLoginLoginCommand {
  password?: string | null;
  userName?: string | null;
}

export interface UMApplicationAuthCommandsUpdateMyInfoUpdateMyInfoCommand {
  address?: string | null;
  phoneNumber?: string | null;
}

export interface UMApplicationAuthQueriesMySummaryInfoMySummaryInfoDto {
  address?: string | null;
  firstName?: string | null;
  /** @format uuid */
  id?: string;
  isMale?: boolean | null;
  lastName?: string | null;
  middleName?: string | null;
  phoneNumber?: string | null;
  role?: string | null;
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
  status?: UMDomainEnumsCourseClassEChangeSessionRequestStatus;
}

export interface UMApplicationChangeSessionRequestQueriesGetAllGetByIdDtoCourseClass {
  academicYear?: string | null;
  name?: string | null;
  teacher?: UMApplicationChangeSessionRequestQueriesGetAllGetByIdDtoTeacher;
}

export interface UMApplicationChangeSessionRequestQueriesGetAllGetByIdDtoSession {
  courseClass?: UMApplicationChangeSessionRequestQueriesGetAllGetByIdDtoCourseClass;
  /** @format uuid */
  id?: string;
}

export interface UMApplicationChangeSessionRequestQueriesGetAllGetByIdDtoTeacher {
  firstName?: string | null;
  /** @format uuid */
  id?: string;
  isMale?: boolean;
  lastName?: string | null;
  middleName?: string | null;
  teacherId?: string | null;
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
  status?: UMDomainEnumsCourseClassEChangeSessionRequestStatus;
}

export interface UMApplicationChangeSessionRequestQueriesGetByIdGetByIdDtoCourseClass {
  academicYear?: string | null;
  name?: string | null;
  teacher?: UMApplicationChangeSessionRequestQueriesGetByIdGetByIdDtoTeacher;
}

export interface UMApplicationChangeSessionRequestQueriesGetByIdGetByIdDtoSession {
  courseClass?: UMApplicationChangeSessionRequestQueriesGetByIdGetByIdDtoCourseClass;
  /** @format uuid */
  id?: string;
}

export interface UMApplicationChangeSessionRequestQueriesGetByIdGetByIdDtoTeacher {
  firstName?: string | null;
  /** @format uuid */
  id?: string;
  isMale?: boolean;
  lastName?: string | null;
  middleName?: string | null;
  teacherId?: string | null;
}

export interface UMApplicationCommonModelsError {
  code?: SystemNetHttpStatusCode;
  message?: string | null;
  property?: string | null;
}

export interface UMApplicationCommonModelsResultSystemBoolean {
  data?: boolean;
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableSystemString {
  data?: string[] | null;
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationChangeSessionRequestQueriesGetAllGetAllDto {
  data?: UMApplicationChangeSessionRequestQueriesGetAllGetAllDto[] | null;
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationCourseClassQueriesGetScoresGetScoresDto {
  data?: UMApplicationCourseClassQueriesGetScoresGetScoresDto[] | null;
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationCourseQueriesGetAllGetAllDto {
  data?: UMApplicationCourseQueriesGetAllGetAllDto[] | null;
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationManagementClassQueriesGetAllGetAllDto {
  data?: UMApplicationManagementClassQueriesGetAllGetAllDto[] | null;
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationProgramQueriesGetAllGetAllDto {
  data?: UMApplicationProgramQueriesGetAllGetAllDto[] | null;
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationSessionQueriesGetAllGetAllDto {
  data?: UMApplicationSessionQueriesGetAllGetAllDto[] | null;
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMApplicationStudentQueriesGetScoresGetScoresDto {
  data?: UMApplicationStudentQueriesGetScoresGetScoresDto[] | null;
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultSystemCollectionsGenericIEnumerableUMDomainDtosCourseClassICourseClass {
  data?: UMDomainDtosCourseClassICourseClass[] | null;
  errors?: UMApplicationCommonModelsError[] | null;
  success?: boolean;
}

export interface UMApplicationCommonModelsResultSystemString {
  data?: string | null;
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
  managementClassesId?: string[] | null;
}

export interface UMApplicationCourseClassCommandsAssignToStudentsAssignToStudentsCommandData {
  studentsId?: string[] | null;
}

export interface UMApplicationCourseClassCommandsBulkCreateBulkCreateCommand {
  courseId?: string | null;
  /** @format int32 */
  numberOfClasses?: number;
  /** @format int32 */
  sessionsCount?: number;
  /** @format date-time */
  startAt?: string;
}

export interface UMApplicationCourseClassCommandsUpdateScoreUpdateScoreCommandData {
  /** @format double */
  score?: number;
}

export interface UMApplicationCourseClassCommandsUpdateUpdateCommandData {
  name?: string | null;
  /** @format int32 */
  sessionsCount?: number;
  slots?: string | null;
  /** @format date-time */
  startAt?: string;
  teacherId?: string | null;
}

export interface UMApplicationCourseClassQueriesGetByIdGetByIdDto {
  academicYear?: string | null;
  courseId?: string | null;
  /** @format uuid */
  id?: string;
  name?: string | null;
  sessions?: UMApplicationCourseClassQueriesGetByIdGetByIdDtoSession[] | null;
  /** @format int32 */
  sessionsCount?: number;
  slots?: UMApplicationCourseClassQueriesGetByIdGetByIdDtoSlot[] | null;
  /** @format date-time */
  startAt?: string;
  /** @format int32 */
  status?: number;
  teacher?: UMApplicationCourseClassQueriesGetByIdGetByIdDtoTeacher;
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
  weekDay?: SystemDayOfWeek;
}

export interface UMApplicationCourseClassQueriesGetByIdGetByIdDtoSlotCourseClass {
  academicYear?: string | null;
  name?: string | null;
}

export interface UMApplicationCourseClassQueriesGetByIdGetByIdDtoTeacher {
  firstName?: string | null;
  isMale?: boolean;
  lastName?: string | null;
  middleName?: string | null;
  teacherId?: string | null;
}

export interface UMApplicationCourseClassQueriesGetScoresGetScoresDto {
  letterScore?: string | null;
  /** @format double */
  score?: number | null;
  student?: UMApplicationCourseClassQueriesGetScoresGetScoresDtoStudent;
}

export interface UMApplicationCourseClassQueriesGetScoresGetScoresDtoManagementClass {
  academicYear?: string | null;
  /** @format uuid */
  id?: string;
  name?: string | null;
}

export interface UMApplicationCourseClassQueriesGetScoresGetScoresDtoStudent {
  firstName?: string | null;
  /** @format uuid */
  id?: string;
  isMale?: boolean;
  lastName?: string | null;
  managementClass?: UMApplicationCourseClassQueriesGetScoresGetScoresDtoManagementClass;
  middleName?: string | null;
  studentId?: string | null;
}

export interface UMApplicationCourseCommandsCreateCreateCommand {
  courseId?: string | null;
  name?: string | null;
  programs?: string[] | null;
}

export interface UMApplicationCourseCommandsUpdateUpdateCommandData {
  courseId?: string | null;
  name?: string | null;
}

export interface UMApplicationCourseQueriesGetAllGetAllDto {
  courseId?: string | null;
  /** @format uuid */
  id?: string;
  name?: string | null;
}

export interface UMApplicationCourseQueriesGetByIdGetByIdDto {
  courseClasses?: UMApplicationCourseQueriesGetByIdGetByIdDtoCourseClass[] | null;
  courseId?: string | null;
  /** @format uuid */
  id?: string;
  name?: string | null;
}

export interface UMApplicationCourseQueriesGetByIdGetByIdDtoCourseClass {
  academicYear?: string | null;
  /** @format uuid */
  id?: string;
  name?: string | null;
  /** @format int32 */
  sessionsCount?: number;
  /** @format date-time */
  startAt?: string;
  /** @format int32 */
  status?: number;
}

export interface UMApplicationManagementClassCommandsAddStudentsAddStudentsCommandData {
  studentsId?: string[] | null;
}

export interface UMApplicationManagementClassCommandsBulkCreateBulkCreateCommand {
  /** @format int32 */
  numberOfClasses?: number;
  programId?: string | null;
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
  academicYear?: string | null;
  /** @format uuid */
  id?: string;
  name?: string | null;
  students?: UMApplicationManagementClassQueriesGetByIdGetByIdDtoStudent[] | null;
}

export interface UMApplicationManagementClassQueriesGetByIdGetByIdDtoStudent {
  firstName?: string | null;
  /** @format uuid */
  id?: string;
  isMale?: boolean;
  lastName?: string | null;
  middleName?: string | null;
  studentId?: string | null;
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
  courses?: UMApplicationProgramQueriesGetByIdGetByIdDtoCourse[] | null;
  /** @format uuid */
  id?: string;
  name?: string | null;
}

export interface UMApplicationProgramQueriesGetByIdGetByIdDtoCourse {
  courseId?: string | null;
  /** @format uuid */
  id?: string;
  name?: string | null;
  programId?: string | null;
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
  courseId?: string | null;
  /** @format uuid */
  id?: string;
  name?: string | null;
}

export interface UMApplicationSessionQueriesGetAllGetAllDtoCourseClass {
  course?: UMApplicationSessionQueriesGetAllGetAllDtoCourse;
  /** @format uuid */
  id?: string;
  name?: string | null;
}

export interface UMApplicationStudentQueriesGetScoresGetScoresDto {
  courseClass?: UMApplicationStudentQueriesGetScoresGetScoresDtoCourseClass;
  letterScore?: string | null;
  /** @format double */
  score?: number | null;
}

export interface UMApplicationStudentQueriesGetScoresGetScoresDtoCourse {
  courseId?: string | null;
  /** @format uuid */
  id?: string;
  name?: string | null;
}

export interface UMApplicationStudentQueriesGetScoresGetScoresDtoCourseClass {
  course?: UMApplicationStudentQueriesGetScoresGetScoresDtoCourse;
  /** @format uuid */
  id?: string;
  name?: string | null;
  /** @format int32 */
  sessionsCount?: number;
  /** @format int32 */
  status?: number;
  teacher?: UMApplicationStudentQueriesGetScoresGetScoresDtoTeacher;
}

export interface UMApplicationStudentQueriesGetScoresGetScoresDtoTeacher {
  firstName?: string | null;
  isMale?: boolean;
  lastName?: string | null;
  middleName?: string | null;
  teacherId?: string | null;
}

export interface UMApplicationTeacherCommandsCreateCreateCommand {
  address?: string | null;
  email?: string | null;
  firstName?: string | null;
  isMale?: boolean;
  lastName?: string | null;
  middleName?: string | null;
  teacherId?: string | null;
  userName?: string | null;
}

export type UMDomainDtosCourseClassICourseClass = object;

export interface UMDomainDtosGeneratedToken {
  /** @format date-time */
  expiration?: string;
  token?: string | null;
}

/** @format int32 */
export enum UMDomainEnumsCourseClassEChangeSessionRequestStatus {
  Value1 = 1,
  Value2 = 2,
  Value4 = 4,
}
