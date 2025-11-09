import Link from 'next/link';
import NavItems from './nav-items';
import { VercelLogo } from '@/components/icons';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function SideNav() {

  const t = useTranslations("app");

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        {/* <Link
          href="/"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        > */}
        <VercelLogo className="h-3 w-3 transition-all group-hover:scale-110" />
        <span className="sr-only">{t("site_name")}</span>
        {/* </Link> */}
        <NavItems />
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Globe className="h-5 w-5" />
              <span className="sr-only">{t("language.select_language")}</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">{t("language.select_language")}</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
}