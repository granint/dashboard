import { cn } from "@/lib/utils";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function Indicator({ change }: { change: number }) {
    return (
        <span
            className={cn(
                "flex items-center rounded-sm px-1 py-0.5 text-xs text-muted-foreground",
                change > 0
                    ? "bg-green-50 text-green-500 dark:bg-green-950"
                    : "bg-red-50 text-red-500 dark:bg-red-950",
            )}
        >
            {change > 0 ? "+" : ""}
            {Math.round(change * 100)}%
            {change > 0 ? (
                <ArrowUpRight className="ml-0.5 inline-block h-3 w-3" />
            ) : (
                <ArrowDownRight className="ml-0.5 inline-block h-3 w-3" />
            )}
        </span>
    );
}