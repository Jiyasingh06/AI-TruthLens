import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { GuestRoute } from "./components/routes/GuestRoute";
import { ProtectedRoute } from "./components/routes/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { PublicLayout } from "./layouts/PublicLayout";
import { AudioDetectionPage } from "./pages/app/AudioDetectionPage";
import { DashboardPage } from "./pages/app/DashboardPage";
import { FakeNewsPage } from "./pages/app/FakeNewsPage";
import { HistoryPage } from "./pages/app/HistoryPage";
import { ImageDetectionPage } from "./pages/app/ImageDetectionPage";
import { ProfilePage } from "./pages/app/ProfilePage";
import { ReportsPage } from "./pages/app/ReportsPage";
import { SettingsPage } from "./pages/app/SettingsPage";
import { SourceCredibilityPage } from "./pages/app/SourceCredibilityPage";
import { VideoDetectionPage } from "./pages/app/VideoDetectionPage";
import { ForgotPasswordPage } from "./pages/auth/ForgotPasswordPage";
import { LoginPage } from "./pages/auth/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage";
import { LandingPage } from "./pages/landing/LandingPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function DashboardShell() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <PublicLayout>
                <LandingPage />
              </PublicLayout>
            }
          />

          <Route element={<GuestRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route element={<DashboardShell />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/detect/news" element={<FakeNewsPage />} />
              <Route path="/detect/image" element={<ImageDetectionPage />} />
              <Route path="/detect/video" element={<VideoDetectionPage />} />
              <Route path="/detect/audio" element={<AudioDetectionPage />} />
              <Route path="/source-credibility" element={<SourceCredibilityPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Route>

          <Route path="/app" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
