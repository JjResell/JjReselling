export function ContentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <h2 className="mb-3 font-serif text-2xl text-gold">{title}</h2>
      <div className="space-y-3 font-accent text-lg leading-relaxed text-beige">
        {children}
      </div>
    </div>
  );
}
