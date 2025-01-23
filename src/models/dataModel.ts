// Product
export type ProductListModel  = {
    products: ProductModel[],
    total: number
    skip: number
    limit: number
}

export type ProductModel = Partial<{
    title: string
    description: string
    category: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    tags: string[]
    brand: string
    sku: string
    weight: number
    dimensions: Dimensions
    warrantyInformation: string
    shippingInformation: string
    availabilityStatus: string
    reviews: Review[]
    returnPolicy: string
    minimumOrderQuantity: number
    meta: Meta
    thumbnail: string
    images: string[]
}>&{
    id: number
}

type Dimensions = Partial<{
    width: number
    height: number
    depth: number
}>

export type Review = Partial<{
    rating: number
    comment: string
    date: string
    reviewerName: string
    reviewerEmail: string
}>

type Meta = Partial<{
    createdAt: string
    updatedAt: string
    barcode: string
    qrCode: string
}>

// Category
export type CategoryModel = Partial<{
    slug: string
    name: string
    url: string
}>