import { useState, useEffect } from 'react';
import { DashboardLayout, StatCard, StatusPill, SectionHeader, type SidebarInfo, type TabDef } from '@/components/DashboardLayout';
import { studentData, studentInternships, studentApplications } from '@/data/mockData';
import { ShieldCheck } from 'lucide-react';

const tabs: TabDef[] = [
  { key: 'overview', label: 'Overview' },
  { key: 'matched', label: 'Matched internships' },
  { key: 'applications', label: 'Applications' },
  { key: 'profile', label: 'Profile' },
];

export function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [consentGiven, setConsentGiven] = useState(false);
  const [showConsentModal, setShowConsentModal] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('youthbridge_consent_student');
    if (stored === 'true') {
      setConsentGiven(true);
    } else {
      setShowConsentModal(true);
    }
  }, []);

  const handleConsent = () => {
    localStorage.setItem('youthbridge_consent_student', 'true');
    setConsentGiven(true);
    setShowConsentModal(false);
  };

  const sidebarInfo: SidebarInfo = {
    title: studentData.name,
    subtitle: `${studentData.grade} · ${studentData.school}`,
    badge: `Seat: ${studentData.seatStatus}`,
  };

  const topMatch = studentInternships[0];

  if (showConsentModal && !consentGiven) {
    return <ConsentModal onAccept={handleConsent} studentName={studentData.name} />;
  }

  return (
    <DashboardLayout sidebarInfo={sidebarInfo} tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === 'overview' && <OverviewTab topMatch={topMatch} />}
      {activeTab === 'matched' && <MatchedTab />}
      {activeTab === 'applications' && <ApplicationsTab />}
      {activeTab === 'profile' && <ProfileTab />}
    </DashboardLayout>
  );
}

function ConsentModal({ onAccept, studentName }: { onAccept: () => void; studentName: string }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="min-h-screen bg-paperDark flex items-center justify-center px-5">
      <div className="w-full max-w-md rounded-xl border border-paper/10 bg-paperDark-card p-7 shadow-xl animate-scale-in">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/20 text-teal-light">
          <ShieldCheck className="h-6 w-6" />
        </div>
        <h2 className="mt-5 font-serif text-2xl text-paper">Parental consent</h2>
        <p className="mt-3 text-sm leading-relaxed text-paper/60">
          Before {studentName} can start using Youthbridge, a parent or guardian needs to confirm they approve of the student using this platform and applying to internships.
        </p>
        <label className="mt-6 flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="mt-0.5 h-5 w-5 rounded border-paper/30 text-marigold focus:ring-marigold"
          />
          <span className="text-sm text-paper/70">
            I am a parent or guardian and I approve of my child using Youthbridge.
          </span>
        </label>
        <button
          onClick={onAccept}
          disabled={!checked}
          className="mt-6 w-full rounded-lg bg-marigold px-4 py-3 text-sm font-semibold text-paperDark disabled:opacity-40 disabled:cursor-not-allowed hover:bg-marigold-dark transition-colors"
        >
          Continue to dashboard
        </button>
      </div>
    </div>
  );
}

function OverviewTab({ topMatch }: { topMatch: typeof studentInternships[0] }) {
  return (
    <div className="space-y-8 animate-fade-in">
      <SectionHeader title="Overview" subtitle="A quick look at your internship activity." />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Matched internships" value={studentData.matchedCount} />
        <StatCard label="Active applications" value={studentData.activeApplications} />
        <StatCard label="Seat status" value={studentData.seatStatus} accent="text-teal-light" />
      </div>

      <div>
        <h2 className="font-serif text-lg text-paper mb-3">Top match this week</h2>
        <div className="rounded-xl border border-marigold/30 bg-marigold/10 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-serif text-xl text-paper">{topMatch.title}</h3>
              <p className="mt-1 text-sm text-paper/60">{topMatch.company} · {topMatch.sector}</p>
              <p className="mt-3 text-sm leading-relaxed text-paper/70">{topMatch.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {topMatch.skills.map((s) => (
                  <span key={s} className="rounded-md bg-paper/10 px-2.5 py-1 text-xs font-medium text-paper/60">{s}</span>
                ))}
              </div>
            </div>
            <div className="shrink-0 text-right">
              <p className="font-serif text-3xl font-semibold text-marigold-light">{topMatch.matchPercent}%</p>
              <p className="text-xs text-paper/50">match</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MatchedTab() {
  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader title="Matched internships" subtitle="Ranked by how well they fit your skills and interests." />
      <div className="space-y-4">
        {studentInternships.map((intern) => (
          <div key={intern.id} className="rounded-lg border border-paper/10 bg-paperDark-card/40 p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-serif text-lg text-paper">{intern.title}</h3>
                <p className="mt-1 text-sm text-paper/60">{intern.company} · {intern.sector}</p>
                <p className="mt-2 text-sm text-paper/70">{intern.format} · {intern.duration}</p>
                <p className="mt-2 text-sm leading-relaxed text-paper/60">{intern.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {intern.skills.map((s) => (
                    <span key={s} className="rounded-md bg-paper/10 px-2.5 py-1 text-xs font-medium text-paper/60">{s}</span>
                  ))}
                </div>
              </div>
              <div className="shrink-0 text-right">
                <div className="inline-flex items-center justify-center rounded-lg bg-marigold/20 px-3 py-2">
                  <span className="font-serif text-xl font-semibold text-marigold-light">{intern.matchPercent}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ApplicationsTab() {
  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader title="Applications" subtitle="Track the status of roles you've applied to." />
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-paper/10 text-paper/50">
              <th className="py-3 pr-4 font-medium">Role</th>
              <th className="py-3 pr-4 font-medium">Company</th>
              <th className="py-3 pr-4 font-medium">Date</th>
              <th className="py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {studentApplications.map((app) => (
              <tr key={app.id} className="border-b border-paper/5">
                <td className="py-4 pr-4 text-paper">{app.role}</td>
                <td className="py-4 pr-4 text-paper/60">{app.company}</td>
                <td className="py-4 pr-4 text-paper/60">{app.date}</td>
                <td className="py-4"><StatusPill status={app.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ProfileTab() {
  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader title="Profile" subtitle="Your information as seen by companies and facilitators." />
      <div className="space-y-5">
        <ProfileRow label="Name" value={studentData.name} />
        <ProfileRow label="Grade" value={studentData.grade} />
        <ProfileRow label="School" value={studentData.school} />
        <div>
          <p className="text-sm text-paper/50">Skills</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {studentData.skills.map((s) => (
              <span key={s} className="rounded-md bg-paper/10 px-3 py-1.5 text-sm font-medium text-paper">{s}</span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-paper/50">Interests</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {studentData.interests.map((i) => (
              <span key={i} className="rounded-md bg-marigold/20 px-3 py-1.5 text-sm font-medium text-marigold-light">{i}</span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-teal/20 px-4 py-3">
          <ShieldCheck className="h-5 w-5 text-teal-light" />
          <span className="text-sm font-medium text-teal-light">Parental consent: on file</span>
        </div>
      </div>
    </div>
  );
}

function ProfileRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-paper/5 pb-3">
      <p className="text-sm text-paper/50 sm:w-32 shrink-0">{label}</p>
      <p className="text-base text-paper">{value}</p>
    </div>
  );
}
