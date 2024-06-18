import { IBaseResponse, IListResponse } from "../entities/DefaultRes";
import { IFinancialProduct, IFinancialProductCreateUpdate, ProductExistRes } from "../entities/ProductModel";
import api from "./api";

const productUrl = '/bp/products';

export const getProductById = async (id: string): Promise<Partial<IFinancialProduct & IBaseResponse>> => {
  const res = await api.get({ url: `${productUrl}/${id}` });
  if (res.status === 200)
    return { ...res.data as IFinancialProduct, isSuccess: true };
  if (res.status === 404) {
    return { ...res.data, isSuccess: false };
  }
  return { isSuccess: false, message: 'Ocurrio un problema de conexión' };
}

export const getProducts = async (controller: AbortController): Promise<Partial<IListResponse<IFinancialProduct> & IBaseResponse>> => {
  const res = await api.get({ url: productUrl });
  if (res.status === 200)
    return { ...res.data as IListResponse<IFinancialProduct>, isSuccess: true };
  return { isSuccess: false, isAborted: res.isAborted, message: 'Ocurrio un problema de conexión' };
}

export const createProduct = async (body: IFinancialProduct): Promise<Partial<IFinancialProductCreateUpdate & IBaseResponse>> => {
  const res = await api.post({ url: productUrl, body });
  if (res.status === 200)
    return { ...res.data, isSuccess: true };
  if (res.status === 400) {
    return { ...res.data, isSuccess: false };
  }
  return { isSuccess: false, message: 'Ocurrio un problema de conexión' };
}

export const updateProduct = async (id: string, body: IFinancialProduct): Promise<Partial<IFinancialProductCreateUpdate & IBaseResponse>> => {
  const res = await api.put({ url: `${productUrl}/${id}`, body });
  if (res.status === 200)
    return { ...res.data, isSuccess: true };
  if (res.status === 404) {
    return { ...res.data, isSuccess: false };
  }
  return { isSuccess: false, message: 'Ocurrio un problema de conexión' };
}

export const deleteProduct = async (id: string): Promise<IBaseResponse> => {
  const res = await api.delete({ url: `${productUrl}/${id}` });
  if (res.status === 200)
    return { ...res.data, isSuccess: true };
  if (res.status === 404) {
    return { ...res.data, isSuccess: false };
  }
  return { isSuccess: false, message: 'Ocurrio un problema de conexión' };
}


export const validProductId = async (id: string): Promise<ProductExistRes> => {
  const res = await api.get({ url: `${productUrl}/verification/${id}` });
  if (res.status === 200)
    return { isIdExist: res.data as boolean, isSuccess: true };
  if (res.status === 404) {
    return { isIdExist: true, isSuccess: false, message: 'Ocurrio un problema de conexión' };
  }
  return { isIdExist: true, isSuccess: false, message: 'Ocurrio un problema de conexión' };
}

