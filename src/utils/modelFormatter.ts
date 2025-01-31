import type { CategoryModel, ProductObjModel, ProductModel } from "@/models/dataModel";
import type { CartProductViewModel, CategoryViewModel, ProductCardListViewModel, ProductCardViewModel, ProductDetailListViewModel, ProductDetailViewModel, PurchasSummaryViewModel } from "@/models/viewModel";


/**
 * Product Detail
 * @param model ProductModel
 * @returns ProductDetailViewModel
 */
export const formatProductDetailToViewModel = (model: ProductModel): ProductDetailViewModel => {
    const viewModel: ProductDetailViewModel = {
        id: model.id,
        brand: model.brand ?? '',
        title: model.title ?? '',
        price: model.price ?? 0,
        rating: model.rating ?? 0,
        images: model.images ?? [],
        description: model.description ?? '',
        category: model.category ?? '',
        stock: model.stock ?? 0,
        sku: model.sku ?? '',
        reviews:(model.reviews ?? []).map(review => ({
            rating: review?.rating ?? 0,
            comment: review?.comment ?? '',
            date: review?.date ?? '',
            reviewerName: review?.reviewerName ?? '',
            reviewerEmail: review?.reviewerEmail ?? ''
        })),
        thumbnail: model.thumbnail ?? '',
    }
    return viewModel;
}

/**
 * Product Card
 * @param model ProductModel
 * @returns ProductCardViewModel
 */
export const formatProductCardToViewModel = (model: ProductModel): ProductCardViewModel => {
    const viewModel: ProductCardViewModel = {
        title: model.title ?? '',
        category: model.category ?? '',
        price: model.price ?? 0,
        rating: model.rating ?? 0,
        stock: model.stock ?? 0,
        thumbnail: model.thumbnail ?? '',
        brand: model.brand ?? '',
        id: model.id ?? 0
    }
    return viewModel;
}


/**
 * Product Card List
 * @param model ProductObjModel
 * @returns ProductCardListModel
 */
export const formatProductCardListToViewModel = (model: ProductObjModel): ProductCardListViewModel => {
    const viewModel: ProductCardListViewModel = {
        ...model,
        products: model.products.map( (item: ProductModel) => formatProductCardToViewModel(item))
    }
    return viewModel;
}

/**
 * Brand List
 * @param model ProductCardListViewModel
 * @returns string[]
 */
export const formateBrandListToViewModel = (model: ProductObjModel): string[] => {
    return [...new Set(model.products.map(p => (p.brand ?? '')))];
}

//cart product
export const formatCartProductToViewModel = (model: ProductDetailViewModel, quantity: number): CartProductViewModel => {
    const viewModel: CartProductViewModel = {
        id: model.id,
        brand: model.brand ?? '',
        title: model.title ?? '',
        price: model.price ?? 0,
        stock: model.stock ?? 0,
        sku: model.sku ?? '',
        thumbnail: model.thumbnail ?? '',
        quantity: quantity
    }
    return viewModel;
}

//category
export const formatCategoryToViewModel = (model: CategoryModel): CategoryViewModel => {
    const viewModel: CategoryViewModel = {
        slug: model.slug ?? '',
        name: model.name ?? '',
        url: model.url ?? ''
    }
    return viewModel;
}

//purchase summary












