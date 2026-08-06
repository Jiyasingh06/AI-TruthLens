import { Eye, EyeOff } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AuthFormShell } from "../../components/auth/AuthFormShell";
import { useAuth } from "../../hooks/useAuth";
import { AuthLayout } from "../../layouts/AuthLayout";

export function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");
    const remember = formData.get("remember") === "on";

    register({ name, email, password, remember });
    navigate("/dashboard", { replace: true });
  }

  return (
    <AuthLayout
      title="Create your AI TruthLens account"
      description="Launch a polished frontend-only onboarding flow with reusable premium components and future-ready routing."
    >
      <AuthFormShell
        formId="register-form"
        onSubmit={handleSubmit}
        submitLabel="Create Account"
        alternateLabel="Already have an account?"
        alternateHref="/login"
        alternateCta="Sign In"
        footer={
          <label className="flex items-start gap-3 text-sm leading-6 text-slate-400">
            <input
              type="checkbox"
              name="remember"
              form="register-form"
              className="mt-1 h-4 w-4 rounded border-white/15 bg-white/5 text-cyan-300 focus:ring-cyan-400/60"
            />
            <span>
              Keep me signed in on this device for a smoother product walkthrough experience.
            </span>
          </label>
        }
      >
        <div className="space-y-2">
          <label htmlFor="register-name" className="auth-field-label">
            Full Name
          </label>
          <input
            id="register-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Alex Morgan"
            className="auth-input"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="register-email" className="auth-field-label">
            Work Email
          </label>
          <input
            id="register-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="alex@company.com"
            className="auth-input"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="register-password" className="auth-field-label">
            Password
          </label>
          <div className="auth-input-wrap">
            <input
              id="register-password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              required
              placeholder="Create a strong password"
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

      <p className="mt-6 text-center text-xs leading-6 text-slate-500">
        By continuing you agree to future workspace policies, usage terms, and verification
        standards once backend services are connected.
      </p>
    </AuthLayout>
  );
}
