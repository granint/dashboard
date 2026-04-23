import { Button } from "@/components/ui/button";
import { Download, PlusCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function EventsAction() {
    const t = useTranslations("products");
    return (
        <div className="ml-auto flex items-center gap-2">
            <Button size="sm" variant="outline" className="h-8 gap-1">
                <Download className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    {t("action.export")}
                </span>
            </Button>
            <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    {t("action.add")}
                </span>
            </Button>
        </div>
    )
}

export async function deleteEvent(formData: FormData) {
    const id = Number(formData.get('id'));
    console.log("Deleting event with id:", id);
    //   await deleteProductById(id);
    //   revalidatePath('/');
}