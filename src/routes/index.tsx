import { createFileRoute } from "@tanstack/react-router";
import {
  Kanban,
  Boxes,
  Factory,
  Fingerprint,
  Sparkles,
  Terminal,
  BookOpen,
} from "lucide-react";
import { AppCard } from "@/components/app-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Provaliant App Hub — Akses Semua Aplikasi" },
      {
        name: "description",
        content:
          "Pusat akses ke seluruh aplikasi Provaliant: PM, Provex, Production, Absen, iKoot, Prompt, dan Dongeng.",
      },
      { property: "og:title", content: "Provaliant App Hub" },
      {
        property: "og:description",
        content: "Akses cepat ke seluruh aplikasi Provaliant dalam satu tempat.",
      },
    ],
  }),
  component: AppHub,
});

const apps = [
  {
    name: "PM",
    description:
      "Project Management System — Kelola proyek, tugas, timeline, dan kolaborasi tim dalam satu platform terpusat.",
    href: "http://pm.provaliantgroup.com/",
    icon: Kanban,
    accentVar: "--accent-pm",
    size: "featured" as const,
  },
  {
    name: "Provex",
    description: "Supply Chain & Procurement — Platform pengelolaan rantai pasok, pengadaan, dan vendor untuk operasional bisnis.",
    href: "https://provex.provaliantgroup.com/",
    icon: Boxes,
    accentVar: "--accent-provex",
  },
  {
    name: "Production",
    description: "Manufacturing Execution System — Sistem kontrol produksi, tracking Work In Process (WIP), dan monitoring lantai pabrik secara real-time.",
    href: "https://production.provaliant.cloud/",
    icon: Factory,
    accentVar: "--accent-production",
  },
  {
    name: "Absen",
    description: "Employee Attendance System — Sistem absensi digital dengan fitur clock-in/out, shift management, dan laporan kehadiran karyawan.",
    href: "https://absen.provaliantgroup.com/",
    icon: Fingerprint,
    accentVar: "--accent-absen",
    size: "wide" as const,
  },
  {
    name: "iKoot",
    description: "Internal Communication & Tools — Aplikasi kebutuhan internal tim Provaliant untuk kolaborasi dan produktivitas harian.",
    href: "https://ikoot.provaliantgroup.com/",
    icon: Sparkles,
    accentVar: "--accent-ikoot",
    size: "wide" as const,
  },
  {
    name: "Prompt",
    description: "AI Prompt Management — Toolkit untuk mengelola, mengorganisir, dan mengoptimalkan prompt AI untuk produktivitas tim.",
    href: "https://prompt.provaliantgroup.com/",
    icon: Terminal,
    accentVar: "--accent-prompt",
  },
  {
    name: "Dongeng",
    description: "Digital Storytelling Platform — Platform pembuatan dan distribusi konten cerita interaktif untuk edukasi dan entertainment.",
    href: "https://dongeng.provaliant.cloud/",
    icon: BookOpen,
    accentVar: "--accent-dongeng",
    size: "wide" as const,
  },
];

function AppHub() {
  return (
    <main className="relative min-h-screen px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 animate-fade-in md:mb-16">
          <img
            src="/img/logo_pv.png"
            alt="Provaliant Logo"
            className="h-12 md:h-16 w-auto"
          />
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
            App Hub.
            <span className="block text-muted-foreground">
              Semua aplikasi, satu pintu.
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
            Pilih aplikasi yang ingin Anda buka. Akses cepat, aman, dan selalu
            tersedia.
          </p>
        </header>

        <section
          aria-label="Daftar aplikasi"
          className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[12rem]"
        >
          {apps.map((app) => (
            <AppCard key={app.name} {...app} />
          ))}
        </section>

        <footer className="mt-16 flex flex-col items-center justify-between gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Provaliant Group. All rights reserved.</p>
          <p>Butuh akses baru? Hubungi admin IT Anda.</p>
        </footer>
      </div>
    </main>
  );
}
