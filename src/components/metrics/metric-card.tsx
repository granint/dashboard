import { cn } from "@/lib/utils";
import Indicator from "./indicator";
import MetricProps from "@/types/metric";
import Title from "../title";

export default function MetricCard({
    title,
    value,
    change,
    className,
    compare
}: MetricProps & { compare?: string }) {
    return (
        <section className={cn("flex flex-col", className)}>
            <Title size="base" className="mb-2">
                {title}
            </Title>
            <div className="flex items-center gap-2">
                <span className="text-3xl font-medium">{value}</span>
                {
                    change && <Indicator change={change} />
                }
            </div>
            {
                change && compare && <div className="text-xs text-muted-foreground">{compare}</div>
            }
        </section>
    );
}