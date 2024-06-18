import { useState } from "react"
import { IFinancialProduct, IFinancialProductExistRes } from "../data/entities/ProductModel"
import * as apiBusinessProduct from "../data/services/apiBusinessProduct"
import { StatusService } from "../utils/helpers"
import { IBaseResponse } from "../data/entities/DefaultRes"

const useFinancialProducts = () => {

  const [bProducts, setBProducts] = useState<IFinancialProduct[]>([])
  const [statusRes, setStatusRes] = useState<{ status: StatusService, message?: string }>({ status: StatusService.LOADING, message: '' })
  const [bProduct, setBProduct] = useState<Partial<IFinancialProduct>>()

  const filterProducts = async (search: string, controller: AbortController) => {
    setStatusRes({ status: StatusService.LOADING })
    const res = await apiBusinessProduct.getProducts(controller)
    if (res.isAborted === true) return
    if (res.isSuccess === true) {
      if (search.trim() === '') setBProducts(res.data ?? [])
      else {
        const filteredProducts = res.data?.filter(product => product.name.toLowerCase().includes(search.trim().toLowerCase()))
        setBProducts(filteredProducts ?? [])
      }
      setStatusRes({ status: StatusService.SUCCESS })
    }
    else setStatusRes({ status: StatusService.ERROR, message: res.message })
  }

  const getProductById = async (id: string) => {
    const res = await apiBusinessProduct.getProductById(id)
    if (res.isSuccess === true) {
      const { id, name, logo, date_release, date_revision, description } = res
      setBProduct({ id, name, logo, date_release, date_revision, description })
      setStatusRes({ status: StatusService.SUCCESS })
    }
    else setStatusRes({ status: StatusService.ERROR, message: res.message })
  }

  const deleteProductById = async (id: string): Promise<IBaseResponse> => {
    const res = await apiBusinessProduct.deleteProduct(id)
    return res
  }

  const updateProductById = async (id: string, product: IFinancialProduct): Promise<IBaseResponse> => {
    const res = await apiBusinessProduct.updateProduct(id, product)
    return { isSuccess: res.isSuccess!!, message: res.message }
  }

  const createProduct = async (product: IFinancialProduct): Promise<IBaseResponse> => {
    const res = await apiBusinessProduct.createProduct(product)
    return { isSuccess: res.isSuccess!!, message: res.message }
  }

  const validProductId = async (id: string): Promise<IFinancialProductExistRes> => {
    const res = await apiBusinessProduct.validProductId(id)
    return res
  }

  return { filterProducts, bProducts, statusRes, getProductById, bProduct, deleteProductById, createProduct, updateProductById, validProductId }
}

export default useFinancialProducts