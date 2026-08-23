import { Moon, Sun } from "lucide-react";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]";
export function Container({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`mx-auto w-full max-w-[80rem] px-5 sm:px-8 lg:px-12 ${className}`}
      {...props}
    />
  );
}
export function GlassPanel({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={`glass-panel ${className}`} {...props} />;
}
export function Card({
  className = "",
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <article
      className={`glass-panel rounded-[var(--radius-lg)] p-6 sm:p-8 ${className}`}
      {...props}
    />
  );
}
export function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-sm text-[var(--text-secondary)] ${className}`}
    >
      {children}
    </span>
  );
}
export function Divider({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`h-px bg-gradient-to-r from-transparent via-[var(--gold)]/55 to-transparent ${className}`}
    />
  );
}
export function SectionHeading({
  eyebrow,
  children,
  intro,
}: {
  eyebrow: string;
  children: ReactNode;
  intro?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-14">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="font-display text-[length:var(--text-3xl)] leading-[1.04] tracking-[-0.035em] text-[var(--text-primary)]">
        {children}
      </h2>
      {intro && (
        <p className="mt-5 text-[length:var(--text-lg)] leading-relaxed text-[var(--text-secondary)]">
          {intro}
        </p>
      )}
    </div>
  );
}
type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { subtle?: boolean };
export function Link({ className = "", subtle = false, ...props }: LinkProps) {
  return (
    <a
      className={`${focus} rounded-sm underline decoration-[var(--gold)]/70 underline-offset-4 transition-colors hover:text-[var(--accent)] ${subtle ? "text-[var(--text-secondary)]" : "text-[var(--text-primary)]"} ${className}`}
      {...props}
    />
  );
}
type ButtonProps = (
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>
) & { href?: string; variant?: "primary" | "secondary"; children: ReactNode };
export function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const styles = `${focus} inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-[var(--duration-fast)] ${variant === "primary" ? "bg-[var(--accent-button)] text-white hover:bg-[var(--accent-button-hover)]" : "border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text-primary)] hover:bg-[var(--surface-elevated)]"} ${className}`;
  if (href)
    return (
      <a
        href={href}
        className={styles}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  return (
    <button
      className={styles}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
export function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: "light" | "dark";
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`${focus} grid size-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)]`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun size={18} aria-hidden="true" />
      ) : (
        <Moon size={18} aria-hidden="true" />
      )}
    </button>
  );
}
