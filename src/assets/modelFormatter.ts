import type { ProductModel } from "@/models/dataModel";
import type { ProductDetailViewModel } from "@/models/viewModel";

export const convertToProductDetailModel = (model: ProductModel): ProductDetailViewModel => {
    return {...model}
}