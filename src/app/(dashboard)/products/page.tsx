import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardAction, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import Actions from './actions';
import { getTranslations } from 'next-intl/server';
import ProductsTable from './table';
import { getProducts } from '@/data/products';
import { SearchInput } from '../search';
import { Button } from '@/components/ui/button';
import { SearchIcon } from 'lucide-react';

export default async function ProductsPage(
  props: {
    searchParams: Promise<{ q: string; offset: string }>;
  }
) {
  const t = await getTranslations("products");
  const searchParams = await props.searchParams;
  const search = searchParams.q ?? '';
  const offset = searchParams.offset ?? 0;
  const { products, newOffset, totalProducts } = await getProducts(
    search,
    Number(offset)
  );

  return (
    <Tabs defaultValue="all">
      <h1 className='text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white'>{t("title")}</h1>
      <div className='text-muted-foreground text-sm'>{t("description")}</div>
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">{t("all_products")}</TabsTrigger>
          <TabsTrigger value="active">{t("active_products")}</TabsTrigger>
          <TabsTrigger value="draft">{t("draft_products")}</TabsTrigger>
          <TabsTrigger value="archived" className="hidden sm:flex">
            {t("archived_products")}
          </TabsTrigger>
        </TabsList>
        <Actions />
      </div>
      <Card>
        <CardHeader>
          {/* <CardTitle>{t("all_products")}</CardTitle> */}
          <CardDescription>
            <SearchInput />
          </CardDescription>
          <CardAction className="hidden sm:flex" >
            <Button size="sm" variant="outline" className="h-8 gap-1">
              <SearchIcon className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                {t("action.search")}
              </span>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <TabsContent value="all">
            <ProductsTable
              products={products}
              offset={newOffset ?? 0}
              totalProducts={totalProducts}
            />
          </TabsContent>
        </CardContent>
      </Card>
    </Tabs>
  );
}