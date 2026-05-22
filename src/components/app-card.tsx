import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type App = {
  id: string;
  name: string;
  description: string;
  href: string;
  icon: typeof ArrowUpRight;
  accentVar: string;
  size: "featured" | "wide" | "tall" | "default";
};

interface AppCardProps {
  app: App;
}

const sizeClasses = {
  featured: "md:col-span-6",
  wide: "md:col-span-3",
  tall: "md:col-span-2 md:row-span-2",
  default: "md:col-span-3",
};

export function AppCard({ app }: AppCardProps) {
  const { name, description, href, icon: Icon, accentVar, size, id } = app;
  const accent = `var(${accentVar})`;

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 1000 : "auto",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative ${sizeClasses[size]} ${isDragging ? "scale-105 shadow-2xl" : ""}`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Buka ${name}`}
        className="glass-card flex flex-col p-6 rounded-2xl transition-all duration-300 h-full"
        {...attributes}
        {...listeners}
      >
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-background/30 group-hover:bg-background/50 transition-colors duration-300 cursor-grab"
            style={{
              boxShadow: `0 0 20px -4px ${accent}`,
            }}
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
          <h2 className="text-lg font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
            {name}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </a>
    </div>
  );
}
