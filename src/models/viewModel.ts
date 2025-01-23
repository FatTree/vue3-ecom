import type { Review } from "./dataModel"

export type ProductDetailViewModel = {
    id: number
    title: string
    description: string
    category: string
    price: number
    rating: number
    stock: number
    brand: string
    sku: string
    reviews: Review[]
    images: string[]
    thumbnail: string
}

export type ProductCardViewModel = Pick<ProductDetailViewModel, 'id' | 'brand' | 'title' | 'price' | 'rating'> & {
    thumbnail: string
}

export type ProductBrandListViewModel = ProductBrand[];

type ProductBrand = {
    brand: string;
}

export type CartProductViewModel = Pick<ProductDetailViewModel, 'id' | 'brand' | 'title' | 'price' | 'stock' | 'sku'> & {
    thumbnail: string
    quantity: number
}

export type PurchasSummaryViewModel = {
    shippingFee: number
    subtotal: number
    tax: number
    total: number
}

export type MemberViewModel = {
    id: number
    name: string
    email: string
    phone: string
    address: string
}

export type MemberOrderViewModel = {
    id: number
    memberId: number
    date: Date
    state: string
    total: number
    shippingInfo: ShippingInfoViewModel
    products: ProductCardViewModel[]
}

export type ShippingInfoViewModel = Pick<MemberViewModel, 'name' | 'phone' | 'address'>

export type ErrorViewModel = {
    id: string;
    message: string;
    code?: string;
}

export type CategoryViewModel ={
    slug: string
    name: string
    url: string
}