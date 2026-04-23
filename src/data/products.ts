import { ProductStatus } from "@/enums/product";
import { productProps } from "@/types/product";

const products: productProps[] = [
    {
        id: 1,
        imageUrl: "/vercel.svg",
        name: 'Sample Product',
        status: ProductStatus.ACTIVE,
        price: 29.99,
        stock: 20,
        total_sales: 100,
        created_at: '2024-01-01'
    },
    {
        id: 2,
        imageUrl: "/next.svg",
        name: 'Another Product',
        status: ProductStatus.DRAFT,
        price: 19.99,
        stock: 20,
        total_sales: 50,
        created_at: '2024-02-01'
    },
    {
        id: 3,
        imageUrl: "/globe.svg",
        name: 'Third Product',
        status: ProductStatus.ARCHIVED,
        price: 39.99,
        stock: 15,
        total_sales: 75,
        created_at: '2024-03-01'
    }
];

export async function getProducts(
    search: string,
    offset: number
) {
    return {
        products: products.filter(product => product.name.includes(search)),
        newOffset: offset + products.length,
        totalProducts: products.length
    };
}