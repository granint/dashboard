'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, File, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Action from './action';
import { useTranslations } from 'next-intl';
// import { ProductsTable } from './products-table';
// import { getProducts } from '@/lib/db';

export default async function ProductsPage(
  props: {
    searchParams: Promise<{ q: string; offset: string }>;
  }
) {
  const t = useTranslations("products");
  const searchParams = await props.searchParams;
  const search = searchParams.q ?? '';
  const offset = searchParams.offset ?? 0;
  //   const { products, newOffset, totalProducts } = await getProducts(
  //     search,
  //     Number(offset)
  //   );

  return (
    <>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("manage_products")}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="all">{t("all_products")}</TabsTrigger>
              <TabsTrigger value="active">{t("active_products")}</TabsTrigger>
              <TabsTrigger value="draft">{t("draft_products")}</TabsTrigger>
              <TabsTrigger value="archived" className="hidden sm:flex">
                {t("archived_products")}
              </TabsTrigger>
            </TabsList>
            <Action />
          </div>
          {/* <TabsContent value="all">
        <ProductsTable
          products={products}
          offset={newOffset ?? 0}
          totalProducts={totalProducts}
        />
      </TabsContent> */}
        </Tabs>
      </CardContent>
    </>
  );
}