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

const sizeClasses = {
  featured: "md:col-span-6",
  wide: "md:col-span-4",
  tall: "md:col-span-2",
  default: "md:col-span-3",
};

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
    isFeatured = false,
  } = app;
  const accent = `var(${accentVar})`;

  const wrapperClass = isFeatured
    ? "accent-gradient p-[2px] rounded-2xl shadow-2xl hover:shadow-primary/30 transition-all duration-500 relative overflow-hidden"
    : "";

  const cardClass = isFeatured
    ? "glass-card flex items-center p-lg rounded-[14px] w-full h-full border border-white/20 bg-background/60 backdrop-blur-3xl"
    : layout === "horizontal"
    ? "glass-card flex items-center p-md rounded-2xl"
    : centered
    ? "glass-card flex flex-col items-center text-center p-md rounded-2xl"
    : "glass-card flex flex-col p-md rounded-2xl";

  const iconContainerClass = isFeatured
    ? "w-16 h-16 flex items-center justify-center rounded-full bg-white/20 mr-md group-hover:scale-110 transition-transform"
    : "w-12 h-12 flex items-center justify-center rounded-xl bg-background/30 group-hover:bg-background/50 transition-colors duration-300";

  const contentClass = "flex-grow";

  const textClass = centered ? "text-center" : "";

  return (
    <div className={wrapperClass}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Buka ${name}`}
        className={`${cardClass} transition-all duration-300 ${sizeClasses[size]}`}
      >
        {isFeatured ? (
          <>
            <div
              className={iconContainerClass}
              style={{
                boxShadow: `0 0 30px ${accent}`,
              }}
            >
              <Icon
                className="text-white text-4xl"
                strokeWidth={1.75}
                style={{ fontVariationSettings: "'FILL' 1" }}
              />
            </div>
            <div className={contentClass}>
              <h3 className="text-xl font-bold text-white mb-xs">{name}</h3>
              <p className="text-white/90 text-sm">{description}</p>
            </div>
            <ArrowUpRight
              className="text-white text-2xl animate-pulse ml-md"
              strokeWidth={1.75}
            />
          </>
        ) : (
          <>
            <div className="flex items-start justify-between mb-4">
              <div
                className={iconContainerClass}
                style={{
                  boxShadow: `0 0 20px -4px ${accent}`,
                }}
              >
                <Icon
                  className={`${centered ? "text-3xl" : "h-6 w-6"} transition-transform duration-300 group-hover:scale-110`}
                  style={{ color: accent }}
                  strokeWidth={1.75}
                />
              </div>
              {!centered && (
                <ArrowUpRight
                  className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  strokeWidth={1.75}
                />
              )}
            </div>
            <div className={`flex flex-col gap-1 flex-grow ${textClass}`}>
              <h2 className="text-lg font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
                {name}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          </>
        )}
      </a>
    </div>
  );
}
