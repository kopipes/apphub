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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "App Hub — Provaliant" },
      { name: "description", content: "Access all Provaliant apps in one place." },
    ],
  }),
  component: AppHub,
});

const apps = [
  { id: "pm", name: "PM", description: "Project Management System", href: "http://pm.provaliantgroup.com/", icon: Kanban },
  { id: "provex", name: "Provex", description: "Reimbursement System", href: "https://provex.provaliantgroup.com/", icon: Boxes },
  { id: "production", name: "Production", description: "Manufacturing Execution System", href: "https://production.provaliant.cloud/", icon: Factory },
  { id: "absen", name: "Absen", description: "Employee Attendance System", href: "https://absen.provaliantgroup.com/", icon: Fingerprint },
  { id: "ikoot", name: "iKoot", description: "Event Membership Management", href: "https://ikoot.provaliantgroup.com/", icon: Sparkles },
  { id: "prompt", name: "Prompt", description: "AI Prompt Management", href: "https://prompt.provaliantgroup.com/", icon: Terminal },
  { id: "dongeng", name: "Dongeng", description: "Digital Storytelling Platform", href: "https://dongeng.provaliant.cloud/", icon: BookOpen },
];

function AppHub() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <img src="/img/logo_pv.png" alt="Provaliant Logo" className="h-12 w-auto" />
        <h1 className="mt-6 text-3xl font-bold text-gray-900">App Hub</h1>
        <p className="mt-2 text-gray-500">All apps, one place.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {apps.map((app) => (
            <a
              key={app.id}
              href={app.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <app.icon className="h-5 w-5 text-gray-600" />
                <h2 className="font-semibold text-gray-900">{app.name}</h2>
              </div>
              <p className="text-sm text-gray-500">{app.description}</p>
            </a>
          ))}
        </div>

        <footer className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-400">
          © {new Date().getFullYear()} Provaliant Group
        </footer>
      </div>
    </main>
  );
}
