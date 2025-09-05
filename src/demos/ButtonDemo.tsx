import { Button } from '../components';

export const ButtonDemo = () => {
  return (
    <section className="animate-fade-in">
      <h2 className="text-xl font-bold text-text-main mb-6">🔘 버튼 컴포넌트</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-text-subtle">Primary</h3>
          <Button variant="primary">깊은 바다</Button>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-text-subtle">Secondary</h3>
          <Button variant="secondary">맑은 하늘</Button>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-text-subtle">Accent</h3>
          <Button variant="cta">바다 물결</Button>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-text-subtle">Outline</h3>
          <Button variant="outline">더보기</Button>
        </div>
      </div>
    </section>
  );
};
