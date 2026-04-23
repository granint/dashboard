import MetricCard from "@/components/metrics/metric-card";
import { metrics } from "@/data/metrics";

export default function Metrics() {
    return (
        <div className="mt-2 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {
                metrics.map((metric) => (
                    <MetricCard key={metric.title} {...metric} compare={"Compare to last month"} />
                ))
            }
        </div>
    )
}