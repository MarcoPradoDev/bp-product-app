import { IBaseResponse } from "./DefaultRes";

export interface IProduct {
  id: string;
  name: string;
  description: string;
  logo: string;
  date_release: string;
  date_revision: string;
}

export interface IProductCreateUpdate {
  data: IProduct;
  message: string;
}

export interface ProductExistRes extends IBaseResponse {
  isIdExist?: boolean;
}