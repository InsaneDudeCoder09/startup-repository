import { useState, type ReactNode } from 'react';
import { useApp } from '@/context/AppContext';
import { Logo } from './PublicNav';
import { LogOut, Menu } from 'lucide-react';

export interface SidebarInfo {
  title: string;
  subtitle: string;
  badge?: string;
}

export interface TabDef {
  key: string;
  label: string;
}

interface DashboardLayoutProps {
  sidebarInfo: SidebarInfo;
  tabs: TabDef[];
  activeTab: string;
  onTabChange: (key: string) => void;
  children: ReactNode;
}

export function DashboardLayout({ sidebarInfo, tabs, activeTab, onTabChange, children }: DashboardLayoutProps) {
  const { logout, navigate } = useApp();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-paperDark flex flex-col lg:flex-row">
      {/* Sidebar — desktop */}
      <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-paper/10 bg-paperDark-card/30">
        <div className="p-5">
          <button onClick={() => navigate('public')} className="flex items-center" aria-label="Go to Youthbridge home">
            <Logo />
          </button>
        </div>

        <div className="px-5 py-4 border-t border-paper/10">
          <p className="font-serif text-lg text-paper">{sidebarInfo.title}</p>
          <p className="text-sm text-paper/50">{sidebarInfo.subtitle}</p>
          {sidebarInfo.badge && (
            <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-teal/20 px-3 py-1 text-xs font-medium text-teal-light">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-light" />
              {sidebarInfo.badge}
            </span>
          )}
        </div>

        <nav className="flex-1 px-3 py-3 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              className={`w-full rounded-md px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? 'bg-paper text-ink'
                  : 'text-paper/60 hover:bg-paper/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-paper/10 space-y-1">
          <button
            onClick={logout}
            className="w-full flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-paper/60 hover:bg-paper/10 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Log out
          </button>
        </div>
      </aside>

      {/* Mobile top bar + nav */}
      <div className="lg:hidden sticky top-0 z-40 border-b border-paper/10 bg-paperDark/95 backdrop-blur-sm">
        <div className="flex h-14 items-center justify-between px-4">
          <button onClick={() => navigate('public')} className="flex items-center" aria-label="Go to Youthbridge home">
            <Logo className="w-32" />
          </button>
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-paper/70"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-1 px-4 pb-2 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => onTabChange(tab.key)}
                className={`whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  activeTab === tab.key
                    ? 'bg-paper text-ink'
                    : 'text-paper/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
            <button
              onClick={logout}
              className="whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium text-paper/60"
            >
              Log out
            </button>
          </div>
        </div>
      </div>

      {/* Content area */}
      <main className="flex-1 overflow-x-hidden">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 py-8 sm:py-10">
          {children}
        </div>
      </main>
    </div>
  );
}

// Shared UI helpers

export function StatCard({ label, value, accent }: { label: string; value: string | number; accent?: string }) {
  return (
    <div className="rounded-lg border border-paper/10 bg-paperDark-card/40 p-5">
      <p className="text-sm text-paper/50">{label}</p>
      <p className={`mt-2 font-serif text-3xl font-semibold ${accent ?? 'text-paper'}`}>{value}</p>
    </div>
  );
}

export function StatusPill({ status }: { status: string }) {
  const cls = statusPillClass(status);
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${cls}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

function statusPillClass(status: string): string {
  const s = status.toLowerCase();
  if (s.includes('placed') || s.includes('offer') || s.includes('open')) return 'bg-teal/20 text-teal-light';
  if (s.includes('interview') || s.includes('shortlisted')) return 'bg-marigold/20 text-marigold-light';
  if (s.includes('awaiting') || s.includes('pending') || s.includes('review')) return 'bg-amber/20 text-amber-light';
  if (s.includes('not') || s.includes('closed')) return 'bg-red-500/20 text-red-400';
  return 'bg-paper/10 text-paper/60';
}

export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <h1 className="font-serif text-2xl tracking-tightish text-paper sm:text-3xl">{title}</h1>
      {subtitle && <p className="mt-2 text-paper/60">{subtitle}</p>}
    </div>
  );
}
