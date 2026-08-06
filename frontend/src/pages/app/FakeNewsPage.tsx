import { SearchCheck } from "lucide-react";
import { APP_PAGE_CONTENT } from "../../config/app-pages";
import { AppPageTemplate } from "../../components/app/AppPageTemplate";

export function FakeNewsPage() {
  const content = APP_PAGE_CONTENT.fakeNews;

  return <AppPageTemplate {...content} icon={SearchCheck} />;
}
