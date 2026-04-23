import Title from "@/components/title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { getEventById } from "@/data/events";
import { EventStatus } from "@/enums/event";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import EventMetrics from "./metrics";

export default async function EventDetailPage(
    props: {
        params: Promise<{
            id: string;
        }>
    }
) {
    const { id } = await props.params;

    const t = await getTranslations("events");

    const event = await getEventById(id);

    if (!event) {
        return notFound();
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
                <div className="flex flex-wrap items-center gap-6">
                    <div className="w-32 shrink-0">
                        <img className="aspect-3/2 rounded-lg shadow-sm"
                            alt={event?.name}
                            src={event?.imageUrl} />
                    </div>
                    <div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            <Title size="xl" weight="semibold">{event?.name}</Title>
                            <Badge className="h-6 px-1.5 text-xs">
                                {event?.status}
                            </Badge>
                        </div>
                        <div className="mt-2 text-sm/6 text-zinc-500">
                            {
                                event?.status !== EventStatus.ANNOUNCED && (
                                    <>
                                        {event.date?.toLocaleString()}
                                        <span aria-hidden="true">·</span>
                                        {event?.location}
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Button size="sm" variant="outline" className="h-8 gap-1">
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                            {t("action.edit")}
                        </span>
                    </Button>
                    <Button size="sm" className="h-8 gap-1">
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                            {t("action.delete")}
                        </span>
                    </Button>
                </div>
            </div>
            <div>
                {event?.description}
            </div>

            {
                event && event.metrics &&
                <EventMetrics metrics={event?.metrics} />
            }

            <div className="my-12">
                <Title size="lg">Recent orders</Title>
                <Table className="w-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="px-4 py-2 text-left text-sm font-semibold text-zinc-500 dark:text-zinc-400">Order ID</TableHead>
                            <TableHead className="px-4 py-2 text-left text-sm font-semibold text-zinc-500 dark:text-zinc-400">Customer</TableHead>
                            <TableHead className="px-4 py-2 text-left text-sm font-semibold text-zinc-500 dark:text-zinc-400">Date</TableHead>
                            <TableHead className="px-4 py-2 text-left text-sm font-semibold text-zinc-500 dark:text-zinc-400">Amount</TableHead>
                            <TableHead className="px-4 py-2 text-left text-sm font-semibold text-zinc-500 dark:text-zinc-400">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow   >
                            <TableCell className="px-4 py-2 text-sm text-zinc-900 dark:text-white">#12345</TableCell>
                            <TableCell className="px-4 py-2 text-sm text-zinc-900 dark:text-white">John Doe</TableCell>
                            <TableCell className="px-4 py-2 text-sm text-zinc-900 dark:text-white">2024-10-01</TableCell>
                            <TableCell className="px-4 py-2 text-sm text-zinc-900 dark:text-white">$120.00</TableCell>
                            <TableCell className="px-4 py-2 text-sm">
                                {/* <Badge variant="success">Completed</Badge> */}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="px-4 py-2 text-sm text-zinc-900 dark:text-white">#12346</TableCell>
                            <TableCell className="px-4 py-2 text-sm text-zinc-900 dark:text-white">Jane Smith</TableCell>
                            <TableCell className="px-4 py-2 text-sm text-zinc-900 dark:text-white">2024-10-02</TableCell>
                            <TableCell className="px-4 py-2 text-sm text-zinc-900 dark:text-white">$80.00</TableCell>
                            <TableCell className="px-4 py-2 text-sm">
                                {/* <Badge variant="warning">Pending</Badge> */}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="px-4 py-2 text-sm text-zinc-900 dark:text-white">#12347</TableCell>
                            <TableCell className="px-4 py-2 text-sm text-zinc-900 dark:text-white">Alice Johnson</TableCell>
                            <TableCell className="px-4 py-2 text-sm text-zinc-900 dark:text-white">2024-10-03</TableCell>
                            <TableCell className="px-4 py-2 text-sm text-zinc-900 dark:text-white">$150.00</TableCell>
                            <TableCell className="px-4 py-2 text-sm">
                                {/* <Badge variant="danger">Cancelled</Badge> */}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
