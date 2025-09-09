import { Button } from "../components/Button";

export function ButtonDemo() {
  return (
    <div className="grid gap-4">
      {/* 기본 4종 */}
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>

      {/* 아이콘 & 상태 */}
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="primary" leftIcon={<span>📍</span>}>
          Book Now
        </Button>
        <Button variant="secondary" rightIcon={<span>➡️</span>}>
          Explore
        </Button>
        <Button variant="outline" leftIcon={<span>🔍</span>}>
          Search
        </Button>
        <Button variant="ghost" loading>
          Loading
        </Button>
      </div>

      {/* 사이즈 */}
      <div className="flex flex-wrap items-center gap-3">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>

      {/* 비활성화 */}
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="primary" disabled>
          Disabled
        </Button>
        <Button variant="outline" disabled>
          Disabled
        </Button>
      </div>
    </div>
  );
}
