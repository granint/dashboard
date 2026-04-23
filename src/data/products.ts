export async function getProducts(
    search: string,
    offset: number
) {
    var products = [
        {
            id: 1,
            imageUrl: "/vercel.svg",
            name: 'Sample Product',
            status: 'active',
            price: 29.99,
            stock: 20,
            total_sales: 100,
            created_at: '2024-01-01'
        },
        {
            id: 2,
            imageUrl: "/next.svg",
            name: 'Another Product',
            status: 'draft',
            price: 19.99,
            stock: 20,
            total_sales: 50,
            created_at: '2024-02-01'
        },
        {
            id: 3,
            imageUrl: "/globe.svg",
            name: 'Third Product',
            status: 'archived',
            price: 39.99,
            stock: 15,
            total_sales: 75,
            created_at: '2024-03-01'
        }
    ]
    return {
        products: products,
        newOffset: 0,
        totalProducts: 0
    };
}