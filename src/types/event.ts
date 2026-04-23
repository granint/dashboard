import { EventStatus } from "@/enums/event";
import MetricProps from "./metric";

export interface eventProps {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    date?: Date;
    location?: string;
    ticketsSold?: number;
    totalTickets?: number;
    status: EventStatus;
    created_at: string;
    metrics?: MetricProps[];
}