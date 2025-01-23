import type { CategoryModel, ProductListModel, ProductModel } from "@/models/dataModel";
import type { CartProductViewModel, CategoryViewModel, ProductCardViewModel, ProductDetailListModel, ProductDetailViewModel, PurchasSummaryViewModel } from "@/models/viewModel";

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

export const formatProductDetailListToViewModel = (model: ProductListModel): ProductDetailListModel => {
    const viewModel: ProductDetailListModel = {
        ...model,
        products: model.products.map( (item: ProductModel) => formatProductDetailToViewModel(item))
    }
    return viewModel;
}

export const formatProductCardToViewModel = (model: ProductModel): ProductCardViewModel => {
    const viewModel: ProductCardViewModel = {
        id: model.id,
        brand: model.brand ?? '',
        title: model.title ?? '',
        price: model.price ?? 0,
        rating: model.rating ?? 0,
        category: model.category ?? '',
        stock: model.stock ?? 0,
        thumbnail: model.thumbnail ?? ''
    }
    return viewModel;
}

export const formatCartProductToViewModel = (model: ProductModel | ProductDetailViewModel, quantity: number): CartProductViewModel => {
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

export const formatCategoryToViewModel = (model: CategoryModel): CategoryViewModel => {
    const viewModel: CategoryViewModel = {
        slug: model.slug ?? '',
        name: model.name ?? '',
        url: model.url ?? ''
    }
    return viewModel;
}