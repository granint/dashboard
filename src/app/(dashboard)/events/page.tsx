import { getTranslations } from "next-intl/server";
import Actions from "./actions";
import { getEvents } from "@/data/events";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardDescription, CardAction, CardContent } from "@/components/ui/card";
import { SearchIcon } from "lucide-react";
import { SearchInput } from "../search";
import EventsTable from "./table";
import Title from "@/components/title";

export default async function EventsPage(
    props: {
        searchParams: Promise<{ q: string; offset: string }>;
    }
) {
    const t = await getTranslations("events");
    const searchParams = await props.searchParams;
    const search = searchParams.q ?? '';
    const offset = searchParams.offset ?? 0;
    const { events, newOffset, totalEvents } = await getEvents(
        search,
        Number(offset)
    );

    return (
        <div className="flex flex-col gap-2">
            <Title size="xl">{t('title')}</Title>
            <div className="flex items-center">
                <Actions />
            </div>
            <Card>
                <CardHeader>
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
                    <EventsTable
                        events={events}
                        offset={newOffset ?? 0}
                        totalEvents={totalEvents}
                    />
                </CardContent>
            </Card>
        </div>
    );
}