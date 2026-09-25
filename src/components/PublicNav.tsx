import { useApp } from '@/context/AppContext';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <img
      src="/Screenshot_2026-09-26_011742.png"
      alt="Youthbridge — For Students, By Students"
      className={`h-auto w-40 object-contain ${className}`}
    />
  );
}

export function PublicNav() {
  const { navigate } = useApp();

  return (
    <nav className="sticky top-0 z-40 border-b border-paper/10 bg-paperDark/90 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <button onClick={() => navigate('public')} className="flex items-center" aria-label="Go to Youthbridge home">
            <Logo />
          </button>

          <div className="hidden items-center gap-8 md:flex">
            <button onClick={() => navigate('public')} className="text-sm text-paper/70 hover:text-paper transition-colors">
              Schools
            </button>
            <button onClick={() => navigate('public')} className="text-sm text-paper/70 hover:text-paper transition-colors">
              Companies
            </button>
            <button onClick={() => navigate('public')} className="text-sm text-paper/70 hover:text-paper transition-colors">
              How it works
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('login')}
              className="rounded-md bg-paper px-4 py-2 text-sm font-medium text-ink hover:bg-paper/90 transition-colors"
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
