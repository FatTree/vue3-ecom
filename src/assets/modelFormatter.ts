import type { ProductModel } from "@/models/dataModel";
import type { CartProductViewModel, ProductDetailViewModel } from "@/models/viewModel";

export const convertToProductDetailModel = (model: ProductModel): ProductDetailViewModel => {
    return {...model}
}

export const convertToCartProductModel = (model: ProductModel | ProductDetailViewModel, quantity: number): CartProductViewModel => {
    return {...model, quantity}
}