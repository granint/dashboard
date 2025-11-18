'use client';

import { Table, TableBody, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useTranslations } from "next-intl";

export default function ProductsTable({
//     products,
//     offset,
//     totalProducts
// }: {
//     products?: any[];
//     offset?: number;
//     totalProducts?: number;
}) {
    const t = useTranslations("products");
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">
                        <span className="sr-only">Image</span>
                    </TableHead>
                    <TableHead>{t("table.name")}</TableHead>
                    <TableHead>{t("table.status")}</TableHead>
                    <TableHead className="hidden md:table-cell">{t("table.price")}</TableHead>
                    <TableHead className="hidden md:table-cell">
                        {t("table.total_sales")}
                    </TableHead>
                    <TableHead className="hidden md:table-cell">{t("table.created_at")}</TableHead>
                    <TableHead>
                        <span className="sr-only">Actions</span>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {/* {products.map((product) => (
                    <ProductRow key={product.id} product={product} />
                ))} */}
            </TableBody>
        </Table>
    )
}