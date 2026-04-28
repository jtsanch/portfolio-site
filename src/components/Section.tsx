interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`py-14 ${className}`}>
      {children}
    </section>
  );
}
