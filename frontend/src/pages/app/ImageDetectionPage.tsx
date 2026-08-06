import { ImageIcon } from "lucide-react";
import { AppPageTemplate } from "../../components/app/AppPageTemplate";
import { APP_PAGE_CONTENT } from "../../config/app-pages";

export function ImageDetectionPage() {
  const content = APP_PAGE_CONTENT.imageDetection;

  return <AppPageTemplate {...content} icon={ImageIcon} />;
}
