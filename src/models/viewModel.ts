export type ProductDetailViewModel = {
    id: number
    title: string
    description: string
    category: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    sku: string
    availabilityStatus: string
    reviews: Review[]
    returnPolicy: string
    thumbnail: string
    images: string[]
}

type Review = {
    rating: number
    comment: string
    date: string
    reviewerName: string
    reviewerEmail: string
}

export type CartProductViewModel = {
    id: number
    title: string
    price: number
    discountPercentage: number
    stock: number
    sku: string
    thumbnail: string
    quantity: number
}

export type ShippingInfoViewModel = {
    name: string;
    phone: string;
    address: string;
}

export type ErrorViewModel = {
    id: string;
    message: string;
    code?: string;
}