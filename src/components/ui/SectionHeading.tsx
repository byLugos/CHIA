import Link from "next/link";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  variant?: "light" | "dark";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
  variant = "light",
}: SectionHeadingProps) {
  const isDark = variant === "dark";

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p
          className={`font-mono text-[12px] uppercase tracking-[0.18em] ${
            isDark ? "text-highlight" : "text-brand"
          }`}
        >
          {eyebrow}
        </p>

        <h2
          className={`mt-3 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl ${
            isDark ? "text-board" : "text-ink"
          }`}
        >
          {title}
        </h2>

        <p
          className={`mt-4 max-w-2xl text-s leading-6 ${
            isDark ? "text-board/75" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      </div>

      <Link
        href={href}
        className={`shrink-0 font-mono text-[16px] uppercase tracking-widest ${
          isDark
            ? "border border-board/40 px-5 py-3 text-board transition-colors hover:bg-board hover:text-brand"
            : "text-brand  border border-brand/40 px-5 py-3 transition-colors hover:bg-brand hover:text-white"
        }`}
      >
        {linkLabel} {isDark ? "→" : "→"}
      </Link>
    </div>
  );
}