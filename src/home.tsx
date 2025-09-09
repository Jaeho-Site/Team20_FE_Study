/* --------------------------------------------------------------------------
 * K-Content Travel Planner - Home Page (Single File)
 * - React + TypeScript + Tailwind CSS
 * - 외부 컴포넌트/아이콘 라이브러리 없이 단일 파일로 동작
 * - 라우팅은 a href로 연결(실제 프로젝트에서는 Link 컴포넌트로 교체 권장)
 * -------------------------------------------------------------------------- */

import React from "react";

/* --------------------------------- Icons ---------------------------------- */

const IconPlay = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M8 5v14l11-7z" />
  </svg>
);

const IconMapPin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    aria-hidden
    {...props}
  >
    <path
      strokeWidth="2"
      d="M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10z"
    />
    <circle cx="12" cy="11" r="2.5" strokeWidth="2" />
  </svg>
);

const IconFilm = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    aria-hidden
    {...props}
  >
    <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" />
    <path strokeWidth="2" d="M7 5v14M17 5v14M3 9h18M3 15h18" />
  </svg>
);

const IconMusic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    aria-hidden
    {...props}
  >
    <path strokeWidth="2" d="M9 18a3 3 0 1 1-2-2.83V6l11-2v8" />
    <circle cx="18" cy="16" r="2.5" strokeWidth="2" />
  </svg>
);

const IconChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    aria-hidden
    {...props}
  >
    <path strokeWidth="2" d="M9 6l6 6-6 6" />
  </svg>
);

const IconLogin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    aria-hidden
    {...props}
  >
    <path strokeWidth="2" d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <path strokeWidth="2" d="M10 17l5-5-5-5" />
    <path strokeWidth="2" d="M15 12H3" />
  </svg>
);

/* ---------------------------------- Types --------------------------------- */

type ContentItem = {
  id: string;
  title: string;
  year?: number;
  type: "drama" | "kpop";
  spots: number;
  posterUrl?: string;
};

/* --------------------------------- Mock DB -------------------------------- */

const POPULAR: ContentItem[] = [
  {
    id: "squid-game",
    title: "Squid Game",
    year: 2021,
    type: "drama",
    spots: 12,
    posterUrl:
      "https://images.unsplash.com/photo-1606979442277-f21d8e60c6b2?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "itaewon-class",
    title: "Itaewon Class",
    year: 2020,
    type: "drama",
    spots: 9,
    posterUrl:
      "https://images.unsplash.com/photo-1514041181368-bca62cceffcd?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "goblin",
    title: "Goblin",
    year: 2016,
    type: "drama",
    spots: 15,
    posterUrl:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "bts-dynamite",
    title: "BTS - Dynamite",
    type: "kpop",
    spots: 7,
    posterUrl:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=900&auto=format&fit=crop",
  },
];

const CITIES = [
  { key: "seoul", label: "Seoul" },
  { key: "busan", label: "Busan" },
  { key: "incheon", label: "Incheon" },
];

/* ------------------------------- UI Atoms ---------------------------------- */

function Btn({
  href,
  children,
  variant = "solid",
  className = "",
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const solid =
    "bg-gray-900 text-white hover:opacity-90 focus:ring-gray-900 focus:ring-offset-white";
  const outline =
    "border hover:bg-gray-50 focus:ring-gray-300 focus:ring-offset-white";
  const styles = `${base} ${
    variant === "solid" ? solid : outline
  } ${className}`;
  return (
    <a href={href} className={styles} {...rest}>
      {children}
    </a>
  );
}

function Card({
  className = "",
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`rounded-2xl border bg-white ${className}`}>{children}</div>
  );
}

/* --------------------------------- Blocks ---------------------------------- */

function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2 font-bold">
          <span className="grid h-7 w-7 place-items-center rounded-xl bg-gray-900 text-white text-xs">
            K
          </span>
          <span className="hidden text-sm sm:inline">K-Content Trip</span>
        </a>

        <nav className="hidden gap-6 text-sm md:flex">
          <a href="/drama" className="text-gray-600 hover:text-gray-900">
            Drama
          </a>
          <a href="/kpop" className="text-gray-600 hover:text-gray-900">
            K-Pop
          </a>
          <a href="/map" className="text-gray-600 hover:text-gray-900">
            Map
          </a>
          <a href="/mypage" className="text-gray-600 hover:text-gray-900">
            My Page
          </a>
        </nav>

        <a
          href="/login"
          className="inline-flex items-center gap-2 text-sm hover:opacity-80"
          aria-label="Login"
        >
          <IconLogin className="h-4 w-4" />
          <span className="hidden sm:inline">Login</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-rose-50"
      />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
        <div className="flex flex-col justify-center gap-5">
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            Find your favorite filming spots in Korea
          </h1>
          <p className="text-gray-600">
            K-Drama & K-Pop 촬영지를 한눈에. 작품별/도시별로 모아보고 나만의
            코스를 만들어 보세요.
          </p>
          <div className="flex flex-wrap gap-3">
            <Btn href="/browse" variant="solid" className="py-4 text-base">
              <IconPlay className="h-4 w-4" />
              콘텐츠 탐색하기
            </Btn>
            <Btn href="/map" variant="outline" className="py-4 text-base">
              <IconMapPin className="h-4 w-4" />
              지도에서 보기
            </Btn>
          </div>
          <ul className="mt-4 flex flex-wrap gap-4 text-xs text-gray-600">
            <li className="inline-flex items-center gap-2 rounded-full border px-3 py-1">
              <IconFilm className="h-3.5 w-3.5" />
              K-Drama spots
            </li>
            <li className="inline-flex items-center gap-2 rounded-full border px-3 py-1">
              <IconMusic className="h-3.5 w-3.5" />
              K-Pop M/V spots
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="aspect-video w-full overflow-hidden rounded-2xl border bg-white shadow-sm">
            <div className="grid h-full place-items-center text-gray-500">
              Hero Visual
            </div>
          </div>
          <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-indigo-100 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

function PosterCard(item: ContentItem) {
  const href = item.type === "drama" ? `/drama/${item.id}` : `/kpop/${item.id}`;
  return (
    <article className="min-w-[220px] snap-start rounded-xl border p-3 transition hover:shadow-md">
      <a href={href} className="block">
        <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
          {item.posterUrl ? (
            <img
              src={item.posterUrl}
              alt={`${item.title} poster`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="grid h-full w-full place-items-center text-sm text-gray-500">
              Poster
            </div>
          )}
        </div>
        <h3 className="mt-3 font-medium" title={item.title}>
          {item.title}
        </h3>
        {item.year ? (
          <p className="text-xs text-gray-500">{item.year}</p>
        ) : null}
        <p className="mt-1 text-sm text-gray-700">{item.spots} spots</p>
      </a>
    </article>
  );
}

function PopularCarousel({ items = POPULAR }: { items?: ContentItem[] }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">🔥 지금 인기</h2>
        <a href="/trending" className="text-sm text-gray-600 underline">
          모두 보기
        </a>
      </div>
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
        {items.map((content) => (
          <PosterCard key={content.id} {...content} />
        ))}
      </div>
    </section>
  );
}

function CategoryGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-6">
      <h2 className="mb-4 text-lg font-semibold">🎬 카테고리로 빠르게 시작</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <a
          href="/drama"
          className="group relative overflow-hidden rounded-2xl border bg-gradient-to-tr from-indigo-50 to-white p-6 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-600 text-white">
              <IconFilm className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">K-Drama</h3>
              <p className="text-sm text-gray-600">작품별 촬영지 모아보기</p>
            </div>
          </div>
          <IconChevronRight className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition group-hover:translate-x-1" />
        </a>

        <a
          href="/kpop"
          className="group relative overflow-hidden rounded-2xl border bg-gradient-to-tr from-rose-50 to-white p-6 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-rose-600 text-white">
              <IconMusic className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">K-Pop</h3>
              <p className="text-sm text-gray-600">
                뮤직비디오 촬영지 모아보기
              </p>
            </div>
          </div>
          <IconChevronRight className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}

function MapPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">🗺️ 핫스팟 미리보기</h2>
        <a href="/map" className="text-sm text-gray-600 underline">
          지도로 더보기
        </a>
      </div>

      <Card className="overflow-hidden">
        <div className="grid gap-6 p-4 md:grid-cols-[280px,1fr]">
          {/* Quick city filters */}
          <div>
            <ul className="grid gap-2">
              {CITIES.map((c) => (
                <li key={c.key}>
                  <a
                    href={`/map?city=${c.key}`}
                    className="flex items-center justify-between rounded-xl border px-3 py-2 text-sm hover:bg-gray-50"
                  >
                    <span className="inline-flex items-center gap-2">
                      <IconMapPin className="h-4 w-4 text-gray-500" />
                      {c.label}
                    </span>
                    <IconChevronRight className="h-4 w-4 text-gray-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mini map placeholder */}
          <div className="aspect-[16/9] w-full rounded-xl border bg-gray-50">
            <div className="grid h-full place-items-center text-gray-500">
              Map preview
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t py-8 text-sm text-gray-600">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} K-Content Trip. All rights reserved.</p>
        <nav className="flex flex-wrap gap-4">
          <a href="/about" className="hover:underline">
            서비스 소개
          </a>
          <a href="/privacy" className="hover:underline">
            개인정보 처리방침
          </a>
          <a href="/terms" className="hover:underline">
            이용약관
          </a>
          <a
            href="mailto:hello@kcontenttrip.example"
            className="hover:underline"
          >
            문의하기
          </a>
        </nav>
      </div>
    </footer>
  );
}

/* ---------------------------------- Page ----------------------------------- */

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-white">
      <NavBar />
      <main>
        <Hero />
        <PopularCarousel />
        <CategoryGrid />
        <MapPreview />
      </main>
      <Footer />
    </div>
  );
}
