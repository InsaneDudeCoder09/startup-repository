import { useApp } from '@/context/AppContext';
import { Logo } from './PublicNav';
import { partnerSchools, hiringPartners } from '@/data/mockData';

const steps = [
  { num: '01', title: 'Sign up', desc: 'Students create a profile with their grade, skills, and interests. Facilitators verify them.' },
  { num: '02', title: 'Get matched on skills', desc: 'Our system pairs students with internships that fit — not by grades alone, but by what they can do.' },
  { num: '03', title: 'Companies review a short list', desc: 'Employers get a vetted, ranked set of candidates. No noise, no 500-application pile.' },
  { num: '04', title: 'We check in until it’s done', desc: 'Weekly check-ins from Youthbridge keep internships on track for both sides.' },
];

const whyCards = [
  {
    title: 'For students',
    body: 'Real work experience before college. Build a portfolio, earn a reference, and figure out what you actually enjoy — all during the school year.',
  },
  {
    title: 'For schools',
    body: 'Give your students meaningful placements without running the logistics yourself. Track every student’s status from one dashboard.',
  },
  {
    title: 'For companies',
    body: 'Access motivated, pre-vetted high schoolers for short-term projects. No recruitment cost, no sifting — just a short list ready to go.',
  },
];

export function PublicSite() {
  const { navigate } = useApp();
  const seatsTotal = 48;
  const seatsFilled = 31;

  return (
    <div className="min-h-screen bg-paperDark">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 sm:px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 animate-fade-in-up">
            <h1 className="font-serif text-4xl leading-[1.1] tracking-tightish text-paper sm:text-5xl lg:text-6xl">
              Real internships for high schoolers in India.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
              Youthbridge connects students in grades 9–12 with startups and local businesses for short, meaningful internships — verified by schools, matched on real skills.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => navigate('login')}
                className="rounded-lg bg-marigold px-6 py-3 text-sm font-semibold text-paperDark hover:bg-marigold-dark transition-colors"
              >
                Get started
              </button>
              <button
                onClick={() => {
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="rounded-lg border border-paper/20 px-6 py-3 text-sm font-semibold text-paper hover:bg-paper/10 transition-colors"
              >
                See how it works
              </button>
            </div>
          </div>

          {/* Seats visual */}
          <div className="lg:col-span-5 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="rounded-xl border border-paper/10 bg-paperDark-card/50 p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-paper/50">
                Seats placed this term
              </p>
              <p className="mt-2 font-serif text-3xl font-semibold text-paper">
                {seatsFilled}<span className="text-paper/40"> / {seatsTotal}</span>
              </p>
              <div className="mt-5 grid grid-cols-8 gap-2.5">
                {Array.from({ length: seatsTotal }).map((_, i) => (
                  <span
                    key={i}
                    className={`aspect-square rounded-full transition-all ${
                      i < seatsFilled
                        ? 'bg-marigold'
                        : 'bg-paper/10'
                    }`}
                  />
                ))}
              </div>
              <p className="mt-5 text-sm text-paper/60">
                {seatsFilled} students placed in internships this term, across {Math.floor(seatsFilled / 3)} partner schools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-y border-paper/10 bg-paperDark-card/20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16 sm:py-20">
          <h2 className="font-serif text-3xl tracking-tightish text-paper sm:text-4xl">
            How it works
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.num} className="border-t-2 border-marigold pt-5">
                <p className="font-serif text-sm font-medium text-marigold-light">{step.num}</p>
                <h3 className="mt-2 font-serif text-xl text-paper">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner schools */}
      <section className="mx-auto max-w-6xl px-5 sm:px-6 py-16 sm:py-20">
        <h2 className="font-serif text-3xl tracking-tightish text-paper sm:text-4xl">
          Partner schools
        </h2>
        <p className="mt-3 text-paper/60">Schools that trust Youthbridge to place their students.</p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partnerSchools.map((school) => (
            <div
              key={school.name}
              className="rounded-lg border border-paper/10 bg-paperDark-card/40 p-5 transition-colors hover:border-marigold/40"
            >
              <p className="font-serif text-lg text-paper">{school.name}</p>
              <p className="mt-1 text-sm text-paper/50">{school.board}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hiring partners */}
      <section className="border-t border-paper/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16 sm:py-20">
          <h2 className="font-serif text-3xl tracking-tightish text-paper sm:text-4xl">
            Hiring partners
          </h2>
          <p className="mt-3 text-paper/60">Startups and local businesses looking for young talent.</p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {hiringPartners.map((company) => (
              <div
                key={company.name}
                className="rounded-lg border border-paper/10 bg-paperDark-card/40 p-5 transition-colors hover:border-teal/40"
              >
                <p className="font-serif text-lg text-paper">{company.name}</p>
                <p className="mt-1 text-sm text-paper/50">{company.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="border-t border-paper/10 bg-paperDark-card/20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16 sm:py-20">
          <h2 className="font-serif text-3xl tracking-tightish text-paper sm:text-4xl">
            Why it works
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {whyCards.map((card) => (
              <div key={card.title}>
                <h3 className="font-serif text-xl text-marigold-light">{card.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-paper/70">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-paper/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-10">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <Logo className="w-36" />
            <p className="text-sm text-paper/50">Youthbridge · Bengaluru, India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
