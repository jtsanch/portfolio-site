import Link from "next/link";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandPink-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brandDark-50";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-brandDark-800 text-white shadow-sm hover:-translate-y-0.5 hover:bg-brandDark-700 hover:shadow-lg hover:shadow-brandPink-200/60",
    secondary:
      "border border-brandDark-200 bg-white/70 text-brandDark-700 hover:border-brandPink-200 hover:bg-brandPink-50 hover:text-brandDark-800",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
