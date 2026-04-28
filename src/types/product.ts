import { ProductStatus } from "@/enums/product";

export interface productProps {
    id: number;
    imageUrl: string;
    name: string;
    status: ProductStatus;
    price: number;
    stock: number;
    description?: string;
    total_sales: number;
    created_at: Date;
}