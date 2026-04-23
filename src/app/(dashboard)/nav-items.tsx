'use client';
// Map of links to display in the side navigation.

import {
    Home,
    ShoppingCart,
    Package,
    Calendar,
    Bell,
    Ticket,
    Users2,
    ChartLine
} from "lucide-react";
import { useTranslations } from "next-intl";
import NavItem from "./nav-item";

// Depending on the size of the application, this would be stored in a database.
const navs = [
    { label: 'home', link: '/', icon: Home },
    { label: 'orders', link: '/orders', icon: ShoppingCart },
    { label: 'products', link: '/products', icon: Package },
    { label: 'events', link: '/events', icon: Calendar, },
    { label: 'invoices', link: '/invoices', icon: Ticket, },
    // { label: 'preferences', link: '/settings', icon: Settings },
    { label: 'customers', link: '/customers', icon: Users2 },
    { label: 'analytics', link: '/analytics', icon: ChartLine },
    { label: 'notifications', link: '/notification', icon: Bell },
];

export default function NavItems() {

    const t = useTranslations("NavItems");

    return (
        <>
            {
                navs.map((item, index) => {

                    const LinkIcon = item.icon;

                    return (
                        <NavItem key={index} link={item.link} label={t(item.label)}>
                            <LinkIcon className="h-5 w-5" />
                            {/* <p className="hidden md:block">{t(item.label)}</p> */}
                        </NavItem>
                    );
                })
            }
        </>
    );
}