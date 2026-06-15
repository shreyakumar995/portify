type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  id?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  id,
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={`mb-12 sm:mb-16 lg:mb-20 max-w-3xl ${alignClass}`}>
      <p className="home-eyebrow mb-4">{eyebrow}</p>
      <h2 id={id} className="home-section-title text-balance">
        {title}
      </h2>
      {description && (
        <p className="home-body mt-5 text-pretty">{description}</p>
      )}
    </header>
  );
}
