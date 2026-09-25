import { useState } from 'react';
import { DashboardLayout, StatCard, StatusPill, SectionHeader, type SidebarInfo, type TabDef } from '@/components/DashboardLayout';
import { companyData } from '@/data/mockData';

const tabs: TabDef[] = [
  { key: 'overview', label: 'Overview' },
  { key: 'listings', label: 'Listings' },
  { key: 'post', label: 'Post a role' },
  { key: 'candidates', label: 'Candidates' },
];

export function CompanyDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const sidebarInfo: SidebarInfo = {
    title: companyData.name,
    subtitle: companyData.sector,
    badge: companyData.verified ? 'Verified partner' : undefined,
  };

  return (
    <DashboardLayout sidebarInfo={sidebarInfo} tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === 'overview' && <OverviewTab />}
      {activeTab === 'listings' && <ListingsTab />}
      {activeTab === 'post' && <PostRoleTab />}
      {activeTab === 'candidates' && <CandidatesTab />}
    </DashboardLayout>
  );
}

function OverviewTab() {
  return (
    <div className="space-y-8 animate-fade-in">
      <SectionHeader title="Overview" subtitle="Your hiring activity on Youthbridge." />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Open listings" value={companyData.openListings} />
        <StatCard label="Matched candidates" value={companyData.matchedCandidates} />
        <StatCard label="Past interns" value={companyData.pastInterns} accent="text-teal-light" />
      </div>
    </div>
  );
}

function ListingsTab() {
  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader title="Listings" subtitle="Your posted roles and their matched candidates." />
      <div className="space-y-4">
        {companyData.listings.map((listing) => (
          <div key={listing.id} className="rounded-lg border border-paper/10 bg-paperDark-card/40 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-lg text-paper">{listing.title}</h3>
                <p className="mt-1 text-sm text-paper/60">{listing.format} · {listing.duration}</p>
              </div>
              <div className="shrink-0 text-right">
                <StatusPill status={listing.status} />
                <p className="mt-2 text-sm text-paper/50">{listing.matchedCandidates} matched</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PostRoleTab() {
  const [form, setForm] = useState({
    title: '',
    skills: '',
    format: 'Remote',
    duration: '4 weeks',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ title: '', skills: '', format: 'Remote', duration: '4 weeks' });
    }, 2500);
  };

  const inputCls = 'w-full rounded-lg border border-paper/20 bg-paperDark-card/50 px-4 py-2.5 text-sm text-paper placeholder:text-paper/30 focus:outline-none focus:border-marigold focus:ring-1 focus:ring-marigold transition-colors';

  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader title="Post a role" subtitle="Create a new internship listing for students to match with." />
      <form onSubmit={handleSubmit} className="max-w-lg space-y-5">
        <div>
          <label className="block text-sm font-medium text-paper mb-1.5">Role title</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="e.g. Social Media Marketing Intern"
            className={inputCls}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-paper mb-1.5">Skills needed</label>
          <input
            type="text"
            value={form.skills}
            onChange={(e) => setForm({ ...form, skills: e.target.value })}
            placeholder="e.g. Canva, Copywriting, Social Media"
            className={inputCls}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-paper mb-1.5">Format</label>
            <select
              value={form.format}
              onChange={(e) => setForm({ ...form, format: e.target.value })}
              className={inputCls}
            >
              <option value="Remote">Remote</option>
              <option value="In-person">In-person</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-paper mb-1.5">Duration</label>
            <select
              value={form.duration}
              onChange={(e) => setForm({ ...form, duration: e.target.value })}
              className={inputCls}
            >
              <option value="4 weeks">4 weeks</option>
              <option value="6 weeks">6 weeks</option>
              <option value="8 weeks">8 weeks</option>
              <option value="12 weeks">12 weeks</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="rounded-lg bg-marigold px-6 py-3 text-sm font-semibold text-paperDark hover:bg-marigold-dark transition-colors"
        >
          {submitted ? 'Role posted' : 'Post role'}
        </button>
        {submitted && (
          <p className="text-sm text-teal-light animate-fade-in">
            Listing created successfully. You'll see matched candidates shortly.
          </p>
        )}
      </form>
    </div>
  );
}

function CandidatesTab() {
  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader title="Candidates" subtitle="Matched students ready for your review." />
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-paper/10 text-paper/50">
              <th className="py-3 pr-4 font-medium">Name</th>
              <th className="py-3 pr-4 font-medium">School</th>
              <th className="py-3 pr-4 font-medium">Skills</th>
              <th className="py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {companyData.candidates.map((c) => (
              <tr key={c.name} className="border-b border-paper/5">
                <td className="py-3.5 pr-4 text-paper">{c.name}</td>
                <td className="py-3.5 pr-4 text-paper/60">{c.school}</td>
                <td className="py-3.5 pr-4">
                  <div className="flex flex-wrap gap-1.5">
                    {c.skills.map((s) => (
                      <span key={s} className="rounded-md bg-paper/10 px-2 py-0.5 text-xs font-medium text-paper/60">{s}</span>
                    ))}
                  </div>
                </td>
                <td className="py-3.5"><StatusPill status={c.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
