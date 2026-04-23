import MetricCard from "@/components/metrics/metric-card";
import MetricProps from "@/types/metric";

export default function EventMetrics({ metrics }: { metrics: MetricProps[] }) {
    return (
        <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {
                metrics.map((metric) => (
                    <MetricCard key={metric.title} {...metric} compare={"Compare to last month"} />
                ))
            }
        </div>
    )
}