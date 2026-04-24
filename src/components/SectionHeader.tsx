export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <div className={`mb-12 ${isCenter ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <p
          className={`text-xs font-bold uppercase tracking-[0.3em] text-accent ${
            isCenter ? "" : ""
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`${
          eyebrow ? "mt-3" : ""
        } font-display text-4xl font-black leading-[1.05] tracking-tight text-ink md:text-5xl`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 ${isCenter ? "mx-auto" : ""} max-w-2xl text-lg text-ink/70`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
