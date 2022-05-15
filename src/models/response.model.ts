export interface IResponse {
    status: number;
    statusText: string;
}

export interface ISuccessResponse extends IResponse {
    data: any;
}

export interface IErrorResponse extends IResponse {}

export type Response = ISuccessResponse | IErrorResponse;
