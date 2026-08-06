import { Video } from "lucide-react";
import { AppPageTemplate } from "../../components/app/AppPageTemplate";
import { APP_PAGE_CONTENT } from "../../config/app-pages";

export function VideoDetectionPage() {
  const content = APP_PAGE_CONTENT.videoDetection;

  return <AppPageTemplate {...content} icon={Video} />;
}
