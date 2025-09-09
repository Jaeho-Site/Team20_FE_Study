import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "[Free Invitation] THE PAINTERS Group Watch Event",
    desc: "VISITKOREA invites you to a spellbinding non-verbal art performance on September 25, 2025 at 13:00 KST.",
    img: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1600&auto=format&fit=crop",
    chip: { label: "INCHEON", temp: "29℃ / 22℃" },
  },
  {
    id: 2,
    title: "K-Content Festival in Seoul",
    desc: "Experience Korea’s vibrant culture and live performances.",
    img: "https://images.unsplash.com/photo-1551110649-5dda77348e36?q=80&w=1600&auto=format&fit=crop",
    chip: { label: "SEOUL", temp: "30℃ / 23℃" },
  },
  {
    id: 3,
    title: "Busan Night Music Showcase",
    desc: "Enjoy the seaside music with dazzling city lights.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    chip: { label: "BUSAN", temp: "28℃ / 21℃" },
  },
];

export default function HeroBanner() {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(true);

  const go = (dir: -1 | 1) =>
    setIdx((p) => (p + dir + slides.length) % slides.length);

  // 간단한 오토플레이
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const _ = (() => {
    if (!playing) return;
    const t = setTimeout(() => setIdx((p) => (p + 1) % slides.length), 4000);
    return () => clearTimeout(t);
  })();

  const s = slides[idx];

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[oklch(99%_0.005_220)]"
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-2 md:py-16">
        {/* Left: Text */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">
            {s.title}
          </h1>
          <p className="mt-4 text-base text-gray-600 md:text-lg">{s.desc}</p>

          <div className="mt-6 flex items-center gap-3">
            <button className="btn btn-primary btn-lg shadow-glow">
              참여하기
            </button>
            <button className="btn btn-outline btn-lg">자세히 보기</button>
          </div>

          {/* Pager */}
          <div className="mt-8 flex items-center gap-3">
            <span className="text-xs text-gray-500">
              {String(idx + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </span>
            <div className="ml-2 flex items-center gap-2">
              <button
                className="btn btn-ghost btn-sm"
                aria-label="Prev"
                onClick={() => go(-1)}
              >
                ‹
              </button>
              <button
                className="btn btn-ghost btn-sm"
                aria-label={playing ? "Pause" : "Play"}
                onClick={() => setPlaying((v) => !v)}
              >
                {playing ? "❚❚" : "▶"}
              </button>
              <button
                className="btn btn-ghost btn-sm"
                aria-label="Next"
                onClick={() => go(1)}
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border bg-white shadow-sm">
            <img
              src={s.img}
              alt={s.title}
              className="aspect-[16/10] w-full object-cover"
            />
            {/* 우측 상단 칩 */}
            <div className="absolute right-3 top-3 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs shadow-sm">
              <span className="font-semibold">{s.chip.label}</span>
              <span className="text-gray-500">{s.chip.temp}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
