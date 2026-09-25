import { useApp } from '@/context/AppContext';
import { ArrowLeft, GraduationCap, Building2, Users } from 'lucide-react';
import { Logo } from './PublicNav';
import type { Role } from '@/data/mockData';

const roleCards: {
  role: Role;
  title: string;
  desc: string;
  icon: typeof GraduationCap;
}[] = [
  {
    role: 'student',
    title: 'Student',
    desc: 'Browse matched internships, track applications, and build your profile.',
    icon: GraduationCap,
  },
  {
    role: 'facilitator',
    title: 'Facilitator',
    desc: 'Schools and counsellors. Manage students, track seats, and oversee placements.',
    icon: Users,
  },
  {
    role: 'company',
    title: 'Company',
    desc: 'Startups and local businesses. Post roles and review matched candidates.',
    icon: Building2,
  },
];

export function LoginGate() {
  const { navigate, loginAs } = useApp();

  return (
    <div className="min-h-screen bg-paperDark flex flex-col">
      <div className="mx-auto max-w-6xl w-full px-5 sm:px-6 pt-8">
        <button
          onClick={() => navigate('public')}
          className="flex items-center gap-2 text-sm text-paper/60 hover:text-paper transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to site
        </button>
      </div>

      <div className="flex flex-1 items-center justify-center px-5 sm:px-6 py-12">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-6">
              <Logo className="w-56" />
            </div>
            <h1 className="font-serif text-3xl tracking-tightish text-paper sm:text-4xl">
              Continue as
            </h1>
            <p className="mt-3 text-paper/60">
              Pick a role to enter the demo. You'll be logged into a pre-loaded sample account.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {roleCards.map(({ role, title, desc, icon: Icon }) => (
              <div
                key={role}
                className="group flex flex-col rounded-xl border border-paper/10 bg-paperDark-card/50 p-6 transition-all hover:border-marigold/50 hover:shadow-lg hover:shadow-marigold/5 animate-fade-in-up"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-paper/10 text-paper transition-colors group-hover:bg-marigold group-hover:text-paperDark">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-serif text-xl text-paper">{title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-paper/60">{desc}</p>
                <button
                  onClick={() => loginAs(role)}
                  className="mt-5 w-full rounded-lg bg-paper px-4 py-2.5 text-sm font-medium text-ink hover:bg-paper/90 transition-colors"
                >
                  View demo
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            <Logo className="w-32 opacity-60" />
          </div>
        </div>
      </div>
    </div>
  );
}
