import { EventStatus } from "@/enums/event";
import { eventProps } from "@/types/event";

const events: eventProps[] = [
    {
        id: 1,
        name: "The 1975: At Their Very Best",
        description: "Description for Event 0",
        imageUrl: "https://catalyst-demo.tailwindui.com/events/viking-people.jpg",
        status: EventStatus.ANNOUNCED,
        created_at: '2024-01-01'
    },
    {
        id: 2,
        name: "Bear Hug: Live in Concert",
        description: "Description for Event 1",
        imageUrl: "https://catalyst-demo.tailwindui.com/events/bear-hug.jpg",
        date: new Date("2026-10-01 10:30:00"),
        location: "观英滩大剧院",
        status: EventStatus.SCHEDULED,
        created_at: '2024-01-01'
    },
    {
        id: 3,
        name: "Bear Hug: Live in Concert",
        description: "Description for Event 1",
        imageUrl: "https://catalyst-demo.tailwindui.com/events/bear-hug.jpg",
        date: new Date("2023-10-01"),
        location: "观英滩大剧院",
        ticketsSold: 350,
        totalTickets: 500,
        status: EventStatus.PRESALE,
        created_at: '2024-01-01',
        metrics: [
            {
                title: "Total Revenue",
                value: "$17,500",
                change: -0.15
            },
            {
                title: "Tickets Sold",
                value: "350",
                change: 0.2
            },
            {
                title: "Attendees",
                value: "350"
            }
        ]
    },
    {
        id: 4,
        name: "Six Fingers — DJ Set",
        description: "Description for Event 2",
        imageUrl: "https://catalyst-demo.tailwindui.com/events/six-fingers.jpg",
        date: new Date("2023-10-02"),
        location: "归沙路演艺中心",
        ticketsSold: 150,
        totalTickets: 300,
        status: EventStatus.ON_SALE,
        created_at: '2024-01-01'
    },
    {
        id: 5,
        name: "We All Look The Same",
        description: "Description for Event 3",
        imageUrl: "https://catalyst-demo.tailwindui.com/events/we-all-look-the-same.jpg",
        date: new Date("2023-10-03"),
        location: "滨海文化中心",
        ticketsSold: 200,
        totalTickets: 400,
        status: EventStatus.CLOSED,
        created_at: '2024-01-01'
    }
];


export async function getEvents(
    search: string,
    offset: number) {
    return {
        events: events.filter(event => event.name.includes(search)),
        newOffset: offset + events.length,
        totalEvents: events.length
    };
}

export async function getEventById(id: string) {
    return events.find(event => event.id === Number(id));
}