import { AudioLines } from "lucide-react";
import { AppPageTemplate } from "../../components/app/AppPageTemplate";
import { APP_PAGE_CONTENT } from "../../config/app-pages";

export function AudioDetectionPage() {
  const content = APP_PAGE_CONTENT.audioDetection;

  return <AppPageTemplate {...content} icon={AudioLines} />;
}
