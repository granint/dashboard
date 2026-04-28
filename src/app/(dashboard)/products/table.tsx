'use client';

import { Table, TableBody, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useTranslations } from "next-intl";
import ProductRow from "./row";
import { productProps } from "@/types/product";

export default function ProductsTable({
    products,
    offset,
    totalProducts
}: {
    products?: productProps[];
    offset?: number;
    totalProducts?: number;
}) {

    const t = useTranslations("products");

    const hasMore = offset && totalProducts ? offset + products!.length < totalProducts : false;

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
                    <TableHead className="hidden md:table-cell">{t("table.stock")}</TableHead>
                    <TableHead className="hidden md:table-cell">{t("table.total_sales")}</TableHead>
                    <TableHead className="hidden md:table-cell">{t("table.created_at")}</TableHead>
                    <TableHead>
                        <span className="sr-only">Actions</span>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    products?.map((product) => (
                        <ProductRow key={product.id} product={product} />
                    ))
                }
            </TableBody>
            <TableFooter>
                {
                    hasMore && (
                        <TableRow>
                            <TableHead colSpan={6} className="text-center">
                                {t("table.load_more")}
                            </TableHead>
                        </TableRow>
                    )
                }
            </TableFooter>
        </Table>
    )
}