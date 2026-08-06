import { ShieldCheck } from "lucide-react";
import { AppPageTemplate } from "../../components/app/AppPageTemplate";
import { APP_PAGE_CONTENT } from "../../config/app-pages";

export function SourceCredibilityPage() {
  const content = APP_PAGE_CONTENT.sourceCredibility;

  return <AppPageTemplate {...content} icon={ShieldCheck} />;
}
