import { RouteProps } from "react-router";

export interface IRouteProps extends RouteProps {
    redirect?: string;
    routes?: IRouteProps[];
    home?: any;
}

export interface ITransferParams {
    source: string;
    [key: string]: any;
}

export interface IRequest {
}

export interface IResult {
    response: any;
    data: any;
}

export interface IError {
    code: string;
    message?: string;
    extras?: any;
}

export interface IReport {
    [key: string]: any;
    id: string;
    status: string;

    // General information
    reportNo: string | any;
    reportType: string;
    reportTime: any;
    incidentObject: string;

    // Related photos
    photoUrls?: string;

    // Object information
    objectName: string;
    objectBirthday: any;
    objectGender: string;
    objectMedicalRecordNo: string;
    objectDepartment: string;

    // Incident place
    incidentPlace: string;
    detailPlace: string;
    shortDescription: string;
    firstSuggestedSolution: string;
    firstTreatment: string;

    // Notification
    reportedToPersonInCharge: string;
    reportedToDocument: string;
    reportedToRelative: string;
    reportedToPatien: string;
    firstClassification: string;
    firstAffectValuation: string;

    // Reporter
    reporter: string;

    // Witness
    witnessName1: string;
    witnessName2: string;

    // Analysis - General

    // Analysis - Incident type by group

    // Analysis - Incident type by cause

    // Analysis - Expert's comment

    // Analysis - Affection of incident

    // Must be added by API
    createTime?: any;
    createUser?: string;
}

export interface ICommonCodeName {
    code: string;
    group: string;
    id: string;
    name: string;
    shortName?: string;
}

export interface IChannel {
    id: string;
    name: string;
    channelType: string; // 0: public, 1: private
    description: string;
    logoUrl: string;
    status: string;   // 0: open, 1: closed, -1: deleted
    createTime?: any;
    createUser?: string;
    updateTime?: any;
    updateUser?: string | null;
}

export interface IMessage {
    id: string;
    channelId: string;
    contentType: string;
    content: string;
    createTime: any;
    senderId: string;
    displayName: string;
    avatarUrl: string;
}

export interface IMember {
    id: string;
    memberId: string;
    memberName: string;
    memberAvatar: string;
    channelId: string;
    roleInChannel: string;
    createTime: any;
    createUser: string;
}

export interface IAuth {
    token: string;
    userRole: string;
    userId: string;
    organizationId: string;
}

export interface IUser {
    [key: string]: any;
    id: string;
    avatarUrl: string;
    displayName: string;
    phoneNumber?: string;
    userName: string;
    salt: string;
    password: string;
    status: string;
    userId: string;
    userRole: string;
    email?: string;
    createUser: string;
    departmentName?: string;
    title?: string;
}

export interface IUserInfo {
    [key: string]: any;
    id: string;
    avatarUrl: string;
    displayName: string;
    userRole: string;
}

export interface IStatistics {
    color: string;
    highlight?: string;
    label: string;
    value: string;
}

export interface IOrganization {
    id: string;
    name: string;
    shortName: string;
    agent: string;
    status: number;
    organizationType: string;
    description: string;
    address: string;
    logoUrl: string;
    createUser: string;
    updateUser: string;
}

export interface IDepartment {
    id: string;
    departmentName: string;
    parentDepartment: string;
    createUser: string;
    updateUser: string;
    organizationId: string;
    departmentCode: string;
}

export interface IDropdownOption {
    label: string;
    value: string;
    shortName?: string;
}

export enum StatisticsType {
    OPEN = "open",
    MONTH = "month",
    YEAR = "year",
    EXPORTS = "exports",
    DEPARTMENT = "department"
}

export type TEnvironment = "development" | "production";
export type TLanguage = "en" | "vi";
export type TLayoutOptions = "fixed" | "layout-boxed" | "layout-top-nav" | "sidebar-collapse" | "sidebar-mini";
export type TSkins = "skin-blue" | "skin-black" | "skin-purple" | "skin-yellow" | "skin-red" | "skin-green";
