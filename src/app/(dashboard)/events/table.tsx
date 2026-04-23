'use client';

import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { deleteProduct } from "../products/actions";
import { EventStatus } from "@/enums/event";
import { eventProps } from "@/types/event";

export default function EventsTable({
    events,
    offset,
    totalEvents
}: {
    events: eventProps[];
    offset: number;
    totalEvents: number;
}) {
    
    const t = useTranslations("events");
    
    const hasMore = offset + events.length < totalEvents;

    return (
        <div>
            <div className="divide-y">
                {
                    events.map((event) => (
                        <div key={event.id}>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-6 py-6">
                                    <div className="w-32 shrink-0">
                                        <a href={`/events/${event.id}`}>
                                            <img
                                                src={event.imageUrl}
                                                title={event.name}
                                                alt={event.name}
                                                className="aspect-3/2 rounded-lg shadow-sm" />
                                        </a>
                                    </div>
                                    <div className="space-y-1.5">
                                        <div className="text-base/6 font-semibold">
                                            <a href={`/events/${event.id}`}>{event.name}</a>
                                        </div>
                                        {
                                            event.status !== EventStatus.ANNOUNCED && (
                                                <>
                                                    <div className="text-xs/6 text-zinc-500">
                                                        {event.date ? event.date.toLocaleString() : event.status}
                                                        <span>·</span>
                                                        {event.location}
                                                    </div>
                                                    {
                                                        event.status !== EventStatus.SCHEDULED && (
                                                            <div className="text-xs/6 text-zinc-600">
                                                                {event.ticketsSold}/{event.totalTickets} tickets sold
                                                            </div>
                                                        )
                                                    }
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Badge className="shrink-0 w-20 h-6">{event.status}</Badge>

                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button aria-haspopup="true" size="icon" variant="ghost">
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">Toggle menu</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>{t("action.label")}</DropdownMenuLabel>
                                            <DropdownMenuItem>{t("action.edit")}</DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <form action={deleteProduct}>
                                                    <button type="submit">{t("action.delete")}</button>
                                                </form>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                hasMore && (
                    <div className="py-6 text-center">
                        <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            {t("table.load_more")}
                        </button>
                    </div>
                )
            }
        </div>
    );
}