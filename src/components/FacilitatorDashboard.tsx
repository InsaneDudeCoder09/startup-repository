import { useState } from 'react';
import { DashboardLayout, StatCard, StatusPill, SectionHeader, type SidebarInfo, type TabDef } from '@/components/DashboardLayout';
import { facilitatorData, facilitatorExpertise } from '@/data/mockData';

const tabs: TabDef[] = [
  { key: 'overview', label: 'Overview' },
  { key: 'students', label: 'Students' },
  { key: 'billing', label: 'Seats & billing' },
  { key: 'expertise', label: 'Expertise breakdown' },
];

export function FacilitatorDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const sidebarInfo: SidebarInfo = {
    title: facilitatorData.name,
    subtitle: facilitatorData.school,
  };

  return (
    <DashboardLayout sidebarInfo={sidebarInfo} tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === 'overview' && <OverviewTab />}
      {activeTab === 'students' && <StudentsTab />}
      {activeTab === 'billing' && <BillingTab />}
      {activeTab === 'expertise' && <ExpertiseTab />}
    </DashboardLayout>
  );
}

function OverviewTab() {
  return (
    <div className="space-y-8 animate-fade-in">
      <SectionHeader title="Overview" subtitle="Your school's placement activity at a glance." />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Seats purchased" value={facilitatorData.seatsPurchased} />
        <StatCard label="Seats used" value={facilitatorData.seatsUsed} />
        <StatCard label="Students placed" value={facilitatorData.studentsPlaced} accent="text-teal-light" />
      </div>
    </div>
  );
}

function StudentsTab() {
  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader title="Students" subtitle="All students under your supervision." />
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-paper/10 text-paper/50">
              <th className="py-3 pr-4 font-medium">Name</th>
              <th className="py-3 pr-4 font-medium">Grade</th>
              <th className="py-3 pr-4 font-medium">Interest</th>
              <th className="py-3 font-medium">Placement</th>
            </tr>
          </thead>
          <tbody>
            {facilitatorData.students.map((s) => (
              <tr key={s.name} className="border-b border-paper/5">
                <td className="py-3.5 pr-4 text-paper">{s.name}</td>
                <td className="py-3.5 pr-4 text-paper/60">{s.grade}</td>
                <td className="py-3.5 pr-4 text-paper/60">{s.interest}</td>
                <td className="py-3.5"><StatusPill status={s.placement} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function BillingTab() {
  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader title="Seats & billing" subtitle="Manage your seat allocation and billing." />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <StatCard label="Amount paid this year" value={`₹${facilitatorData.amountPaid.toLocaleString('en-IN')}`} />
        <StatCard label="Seats remaining" value={facilitatorData.seatsPurchased - facilitatorData.seatsUsed} accent="text-marigold-light" />
      </div>
      <div className="rounded-lg border border-paper/10 bg-paperDark-card/40 p-5">
        <p className="text-sm text-paper/50">Current package</p>
        <p className="mt-1 font-serif text-lg text-paper">{facilitatorData.packageName}</p>
      </div>
      <button className="rounded-lg bg-marigold px-6 py-3 text-sm font-semibold text-paperDark hover:bg-marigold-dark transition-colors">
        Buy more seats
      </button>
    </div>
  );
}

function ExpertiseTab() {
  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader title="Expertise breakdown" subtitle="What your students are interested in." />
      <div className="space-y-5">
        {facilitatorExpertise.map((item) => (
          <div key={item.area}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-medium text-paper">{item.area}</span>
              <span className="text-sm text-paper/50">{item.percent}%</span>
            </div>
            <div className="h-2.5 rounded-full bg-paper/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-marigold transition-all duration-700"
                style={{ width: `${item.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
