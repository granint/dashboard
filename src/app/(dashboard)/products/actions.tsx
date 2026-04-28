'use server';

import ExportButton from "@/components/export";
import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/data/products";
import { PlusCircle } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function ProductsAction() {

    const t = await getTranslations("products");

    const fetchProducts = async () => {
        'use server';

        const products = await getAllProducts();

        return products.map(product => ({
            name: product.name,
            status: product.status,
            price: product.price,
            stock: product.stock,
            total_sales: product.total_sales,
            created_at: product.created_at.toLocaleString()
        }));
    }

    return (
        <div className="ml-auto flex items-center gap-2">
            <ExportButton
                fetchData={fetchProducts}
                fileName="products-report"
                sheetName="Products"
                headers={['名称', '状态', '价格', '库存', '总销售', '创建时间']}
                buttonText={t('action.export')}
                loadingText={t("action.exporting")}
            />

            <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    {t("action.add")}
                </span>
            </Button>
        </div>
    )
}

export async function deleteProduct(formData: FormData) {
    const id = Number(formData.get('id'));
    console.log("Deleting product with id:", id);
    // await deleteProductById(id);
    // revalidatePath('/');
}