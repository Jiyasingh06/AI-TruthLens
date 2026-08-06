import { Eye, EyeOff } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthFormShell } from "../../components/auth/AuthFormShell";
import { AuthLayout } from "../../layouts/AuthLayout";
import { useAuth } from "../../hooks/useAuth";

type LocationState = {
  from?: {
    pathname?: string;
  };
};

export function LoginPage() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const state = location.state as LocationState | null;
  const destination = state?.from?.pathname ?? "/dashboard";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");
    const remember = formData.get("remember") === "on";

    signIn({ email, password, remember });
    navigate(destination, { replace: true });
  }

  return (
    <AuthLayout
      title="Sign in to your verification workspace"
      description="Access the AI TruthLens command center with a premium frontend-only authentication flow designed for future production wiring."
    >
      <AuthFormShell
        formId="login-form"
        onSubmit={handleSubmit}
        submitLabel="Sign In"
        alternateLabel="New to AI TruthLens?"
        alternateHref="/register"
        alternateCta="Create Account"
        footer={
          <div className="flex items-center justify-between gap-3 text-sm text-slate-400">
            <label className="inline-flex items-center gap-3">
              <input
                type="checkbox"
                name="remember"
                form="login-form"
                className="h-4 w-4 rounded border-white/15 bg-white/5 text-cyan-300 focus:ring-cyan-400/60"
              />
              <span>Remember Me</span>
            </label>
            <Link
              to="/forgot-password"
              className="font-medium text-cyan-300 transition-colors duration-[280ms] hover:text-cyan-200"
            >
              Forgot Password
            </Link>
          </div>
        }
      >
        <div className="space-y-2">
          <label htmlFor="login-email" className="auth-field-label">
            Email Address
          </label>
          <input
            id="login-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
            className="auth-input"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="login-password" className="auth-field-label">
            Password
          </label>
          <div className="auth-input-wrap">
            <input
              id="login-password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              placeholder="Enter your password"
              className="auth-input pr-14"
            />
            <button
              type="button"
              onClick={() => setShowPassword((current) => !current)}
              className="auth-input-toggle"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </AuthFormShell>
    </AuthLayout>
  );
}
