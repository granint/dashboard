import { Button } from '@/components/ui/button';
// import { auth, signOut } from '@/lib/auth';
import Image from 'next/image';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { getTranslations } from 'next-intl/server';

export async function User() {
    const t = await getTranslations("Profile");
    //   let session = await auth();
    //   let user = session?.user;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="overflow-hidden rounded-full"
                >
                    <Image
                        src={'/placeholder-user.jpg'}
                        width={36}
                        height={36}
                        alt="Avatar"
                        className="overflow-hidden rounded-full"
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>{t("account")}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {/* <DropdownMenuItem>{t("profile")}</DropdownMenuItem> */}
                <DropdownMenuItem>{t("settings")}</DropdownMenuItem>
                <DropdownMenuItem>{t("support")}</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <button type="submit">{t("logout")}</button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}