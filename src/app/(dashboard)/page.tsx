import Title from "@/components/title";
import { useTranslations } from "next-intl";
import Metrics from "./metrics";

export default function DashboardPage() {
  const t = useTranslations("dashboard");

  return (
    <>
      <Title size="xl">{t('title')}</Title>
      <div className="text-muted-foreground text-sm">{t('description')}</div>

      <div className="mt-4">
        <Title size="lg">{t('overview')}</Title>
        <Metrics />
      </div>

      <div className="mt-4">
        <Title size="lg">{t('recentorders')}</Title>
      </div>
    </>
  );
}
