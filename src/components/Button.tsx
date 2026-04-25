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
    "inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-gray-900 text-white hover:bg-gray-700",
    secondary:
      "border border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900",
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
