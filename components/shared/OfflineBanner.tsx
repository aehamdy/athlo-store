"use client";

import useOnlineStatus from "@/lib/hooks/useOnlineStatus";
import Icon from "./Icon";
import { useTranslations } from "next-intl";

function OfflineBanner() {
  const t = useTranslations("labels");
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-center gap-2 py-2 px-4 text-sm lg:text-base text-primary-dark bg-destructive z-9999">
      <Icon name="WifiOff" className="text-current" size={22} />
      <span>{t("offlineDescription")}</span>
    </div>
  );
}

export default OfflineBanner;
