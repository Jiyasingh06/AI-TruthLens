import { Settings } from "lucide-react";
import { AppPageTemplate } from "../../components/app/AppPageTemplate";
import { APP_PAGE_CONTENT } from "../../config/app-pages";

export function SettingsPage() {
  const content = APP_PAGE_CONTENT.settings;

  return <AppPageTemplate {...content} icon={Settings} />;
}
