export interface ApiResponse {
  status: number;
  data: any;
  isAborted?: boolean;
}

export interface IBaseResponse {
  message?: string,
  isSuccess: boolean,
  isAborted?: boolean
}

export interface IListResponse<T> extends IBaseResponse {
  data: T[]
}