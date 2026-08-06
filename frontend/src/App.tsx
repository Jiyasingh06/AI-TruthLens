import { PublicLayout } from "./layouts/PublicLayout";
import { LandingPage } from "./pages/landing/LandingPage";

function App() {
  return (
    <PublicLayout>
      <LandingPage />
    </PublicLayout>
  );
}

export default App;
