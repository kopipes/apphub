import { ArrowUpRight, type LucideIcon } from "lucide-react";

type App = {
  id: string;
  name: string;
  description: string;
  href: string;
  icon: typeof ArrowUpRight;
  accentVar: string;
  size: "featured" | "wide" | "tall" | "default";
  layout?: "vertical" | "horizontal";
  centered?: boolean;
  isFeatured?: boolean;
};

interface AppCardProps {
  app: App;
}

export function AppCard({ app }: AppCardProps) {
  const {
    name,
    description,
    href,
    icon: Icon,
    accentVar,
    size,
    layout = "vertical",
    centered = false,
  } = app;
  const accent = `var(${accentVar})`;

  // Grid span classes
  const sizeClasses: Record<string, string> = {
    featured: "md:col-span-6",
    wide: "md:col-span-4",
    tall: "md:col-span-2",
    default: "md:col-span-3",
  };

  // Horizontal layout card
  if (layout === "horizontal") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Buka ${name}`}
        className={`glass-card flex items-center p-6 rounded-2xl ${sizeClasses[size]} transition-all duration-300 group`}
      >
        <div
          className="w-14 h-14 flex items-center justify-center rounded-xl bg-background/30 group-hover:bg-background/50 transition-colors duration-300 mr-6 shrink-0"
          style={{ boxShadow: `0 0 20px -4px ${accent}` }}
        >
          <Icon
            className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
            style={{ color: accent }}
            strokeWidth={1.75}
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-lg font-semibold text-foreground group-hover:text-foreground/80 transition-colors mb-1">{name}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
        <ArrowUpRight
          className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0"
          strokeWidth={1.75}
        />
      </a>
    );
  }

  // Centered/tall card
  if (centered) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Buka ${name}`}
        className={`glass-card flex flex-col items-center text-center p-6 rounded-2xl ${sizeClasses[size]} transition-all duration-300 group`}
      >
        <div
          className="w-16 h-16 flex items-center justify-center rounded-full bg-background/30 group-hover:bg-background/50 transition-colors duration-300 mb-4"
          style={{ boxShadow: `0 0 20px -4px ${accent}` }}
        >
          <Icon
            className="text-3xl transition-transform duration-300 group-hover:scale-110"
            style={{ color: accent }}
            strokeWidth={1.75}
          />
        </div>
        <h2 className="text-lg font-semibold text-foreground group-hover:text-foreground/80 transition-colors mb-2">{name}</h2>
        <p className="text-sm text-muted-foreground leading-relaxed px-4">{description}</p>
      </a>
    );
  }

  // Default vertical card
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Buka ${name}`}
      className={`glass-card flex flex-col p-6 rounded-2xl ${sizeClasses[size]} transition-all duration-300 group`}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 flex items-center justify-center rounded-xl bg-background/30 group-hover:bg-background/50 transition-colors duration-300"
          style={{ boxShadow: `0 0 20px -4px ${accent}` }}
        >
          <Icon
            className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
            style={{ color: accent }}
            strokeWidth={1.75}
          />
        </div>
        <ArrowUpRight
          className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          strokeWidth={1.75}
        />
      </div>
      <div className="flex flex-col gap-1 flex-grow">
        <h2 className="text-lg font-semibold text-foreground group-hover:text-foreground/80 transition-colors">{name}</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </a>
  );
}
