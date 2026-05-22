import { ArrowUpRight, type LucideIcon } from "lucide-react";

type Size = "featured" | "wide" | "tall" | "default";

interface AppCardProps {
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
  accentVar: string; // e.g. "--accent-pm"
  size?: Size;
}

const sizeClasses: Record<Size, string> = {
  featured: "md:col-span-2 md:row-span-2 min-h-[18rem] md:min-h-[24rem]",
  wide: "md:col-span-2 min-h-[12rem]",
  tall: "md:row-span-2 min-h-[18rem]",
  default: "min-h-[12rem]",
};

export function AppCard({
  name,
  description,
  href,
  icon: Icon,
  accentVar,
  size = "default",
}: AppCardProps) {
  const accent = `var(${accentVar})`;
  const isFeatured = size === "featured";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Buka ${name}`}
      className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${sizeClasses[size]}`}
    >
      {/* gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-80"
        style={{
          background: `radial-gradient(circle at 0% 0%, color-mix(in oklab, ${accent} 35%, transparent), transparent 60%)`,
        }}
      />
      {/* glow blob bottom right */}
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full opacity-30 blur-3xl transition-all duration-500 group-hover:opacity-60 group-hover:scale-125"
        style={{ backgroundColor: accent }}
      />

      <div className="relative flex h-full flex-col justify-between gap-6">
        <div className="flex items-start justify-between">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-background/40 backdrop-blur-md transition-all duration-300 group-hover:scale-110"
            style={{
              boxShadow: `0 0 24px -8px ${accent}`,
            }}
          >
            <Icon
              className="h-6 w-6 transition-transform duration-300"
              style={{ color: accent }}
              strokeWidth={1.75}
            />
          </div>
          <ArrowUpRight
            className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground"
            strokeWidth={1.75}
          />
        </div>

        <div>
          <h2
            className={`font-semibold tracking-tight text-foreground ${
              isFeatured ? "text-4xl md:text-5xl" : "text-2xl"
            }`}
          >
            {name}
          </h2>
          <p
            className={`mt-2 text-muted-foreground ${
              isFeatured ? "text-base md:text-lg max-w-md" : "text-sm"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
