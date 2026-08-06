import { UserCircle2 } from "lucide-react";
import { AppPageTemplate } from "../../components/app/AppPageTemplate";
import { APP_PAGE_CONTENT } from "../../config/app-pages";

export function ProfilePage() {
  const content = APP_PAGE_CONTENT.profile;

  return <AppPageTemplate {...content} icon={UserCircle2} />;
}
