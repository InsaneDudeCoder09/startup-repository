import { AppProvider, useApp } from '@/context/AppContext';
import { PublicSite } from '@/components/PublicSite';
import { PublicNav } from '@/components/PublicNav';
import { LoginGate } from '@/components/LoginGate';
import { StudentDashboard } from '@/components/StudentDashboard';
import { FacilitatorDashboard } from '@/components/FacilitatorDashboard';
import { CompanyDashboard } from '@/components/CompanyDashboard';

function AppContent() {
  const { view } = useApp();

  return (
    <div className="dark">
      {view === 'public' && (
        <>
          <PublicNav />
          <PublicSite />
        </>
      )}
      {view === 'login' && <LoginGate />}
      {view === 'student' && <StudentDashboard />}
      {view === 'facilitator' && <FacilitatorDashboard />}
      {view === 'company' && <CompanyDashboard />}
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
