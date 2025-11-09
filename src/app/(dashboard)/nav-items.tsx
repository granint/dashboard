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
const links = [
    { name: 'home', href: '/', icon: Home },
    { name: 'orders', href: '/orders', icon: ShoppingCart },
    { name: 'products', href: '/products', icon: Package },
    { name: 'events', href: '/events', icon: Calendar, },
    { name: 'invoices', href: '/invoices', icon: Ticket, },
    // { name: 'preferences', href: '/settings', icon: Settings },
    { name: 'customers', href: '/customers', icon: Users2 },
    { name: 'analytics', href: '/analytics', icon: ChartLine },
    { name: 'notifications', href: '/notification', icon: Bell },
];

export default function NavItems() {

    const t = useTranslations("NavItems");

    return (
        <>
            {links.map((item, index) => {

                const LinkIcon = item.icon;

                return (
                    <NavItem key={index} href={item.href} label={t(item.name)}>
                        <LinkIcon className="h-5 w-5" />
                        {/* <p className="hidden md:block">{t(item.name)}</p> */}
                    </NavItem>
                );
            })}
        </>
    );
}