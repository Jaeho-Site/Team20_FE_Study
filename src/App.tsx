import { ButtonDemo, InputDemo, CardDemo, TagDemo } from './demos';

export const App = () => {
  return (
    <div className="min-h-screen bg-background-main">
      {/* 헤더 */}
      <header className="bg-white shadow-card">
        <div className="page-container py-6">
          <h1 className="text-display font-bold text-text-main animate-fade-in">
            🇰🇷 K-콘텐츠 여행 플래너
          </h1>
          <p className="text-lg text-text-subtle mt-2">
            깊은 바다와 맑은 하늘의 여행 테마 - Tailwind CSS v4 디자인 시스템
          </p>
        </div>
      </header>

      {/* 데모 컴포넌트들 모아놓은 곳 */}
      <main className="page-container py-8 space-y-12">
        <ButtonDemo />
        <InputDemo />
        <TagDemo />
        <CardDemo />
      </main>

      {/* 푸터 */}
      <footer className="bg-background-subtle py-8 mt-12">
        <div className="page-container text-center">
          <p className="text-text-subtle">
            깊은 바다와 맑은 하늘의 조화로 여행의 설렘을 표현해보세요! 🌊✨
          </p>
        </div>
      </footer>
    </div>
  );
};
