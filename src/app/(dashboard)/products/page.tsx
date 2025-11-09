import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import Action from './action';
import { getTranslations } from 'next-intl/server';
import ProductsTable from './table';
// import { ProductsTable } from './products-table';
// import { getProducts } from '@/lib/db';

export default async function ProductsPage(
  // props: {
  //   searchParams: Promise<{ q: string; offset: string }>;
  // }
) {
  const t = await getTranslations("products");
  // const searchParams = await props.searchParams;
  // const search = searchParams.q ?? '';
  // const offset = searchParams.offset ?? 0;
  //   const { products, newOffset, totalProducts } = await getProducts(
  //     search,
  //     Number(offset)
  //   );

  return (
    <Tabs defaultValue="all">
      <div className="items-center pb-4">
        <h1>{t("title")}</h1>
        <div className='text-muted-foreground text-sm'>{t("manage_products")}</div>
      </div>
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
      <Card>
        {/* <CardHeader>
          <CardTitle>{t("all_products")}</CardTitle>
          <CardDescription>{t("manage_products")}</CardDescription>
        </CardHeader> */}
        <CardContent>
          <TabsContent value="all">
            <ProductsTable
            // products={products}
            // offset={newOffset ?? 0}
            // totalProducts={totalProducts}
            />
          </TabsContent>
        </CardContent>
      </Card>
    </Tabs>
  );
}