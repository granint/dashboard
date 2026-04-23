'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavItem({
  label,
  link,
  children
}: {
  label: string;
  link: string;
  children: React.ReactNode;
}) {

  const pathname = usePathname();

  const heighlight =
    link === '/'
      ? pathname === link
      : pathname.startsWith(link);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={link}
          className={clsx(
            'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
            {
              'bg-accent text-black': heighlight
            }
          )}
        >
          {children}
          <span className="sr-only">{label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  );
}
