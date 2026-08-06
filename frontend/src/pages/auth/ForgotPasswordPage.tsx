import { type FormEvent } from "react";
import { Link } from "react-router-dom";
import { AuthFormShell } from "../../components/auth/AuthFormShell";
import { useAuth } from "../../hooks/useAuth";
import { AuthLayout } from "../../layouts/AuthLayout";

export function ForgotPasswordPage() {
  const { requestPasswordReset } = useAuth();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "");
    requestPasswordReset(email);
  }

  return (
    <AuthLayout
      title="Reset access to your workspace"
      description="This UI-only recovery flow preserves the premium landing style while staying ready for future backend integration."
    >
      <AuthFormShell
        formId="forgot-password-form"
        onSubmit={handleSubmit}
        submitLabel="Send Reset Link"
        alternateLabel="Remembered your password?"
        alternateHref="/login"
        alternateCta="Sign In"
        footer={
          <p className="text-sm leading-6 text-slate-400">
            Need help instead? Return to{" "}
            <Link
              to="/"
              className="font-medium text-cyan-300 transition-colors duration-[280ms] hover:text-cyan-200"
            >
              Back to Home
            </Link>
            .
          </p>
        }
      >
        <div className="space-y-2">
          <label htmlFor="forgot-password-email" className="auth-field-label">
            Email Address
          </label>
          <input
            id="forgot-password-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
            className="auth-input"
          />
        </div>
      </AuthFormShell>
    </AuthLayout>
  );
}
