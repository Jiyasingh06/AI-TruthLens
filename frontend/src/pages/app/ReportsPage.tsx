import { FileText } from "lucide-react";
import { AppPageTemplate } from "../../components/app/AppPageTemplate";
import { APP_PAGE_CONTENT } from "../../config/app-pages";

export function ReportsPage() {
  const content = APP_PAGE_CONTENT.reports;

  return <AppPageTemplate {...content} icon={FileText} />;
}
