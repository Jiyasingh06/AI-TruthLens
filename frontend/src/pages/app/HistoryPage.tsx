import { History } from "lucide-react";
import { AppPageTemplate } from "../../components/app/AppPageTemplate";
import { APP_PAGE_CONTENT } from "../../config/app-pages";

export function HistoryPage() {
  const content = APP_PAGE_CONTENT.history;

  return <AppPageTemplate {...content} icon={History} />;
}
