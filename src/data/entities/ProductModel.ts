import { IBaseResponse } from "./DefaultRes";

export interface IFinancialProduct {
  id: string;
  name: string;
  description: string;
  logo: string;
  date_release: string;
  date_revision: string;
}

export interface IFinancialProductCreateUpdate {
  data: IFinancialProduct;
  message: string;
}

export interface IFinancialProductExistRes extends IBaseResponse {
  isIdExist?: boolean;
}