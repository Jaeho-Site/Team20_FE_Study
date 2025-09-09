import { ButtonDemo } from "./demos/ButtonDemo";
import { InputDemo } from "./demos/InputDemo";
import { CardDemo } from "./demos/CardDemo";
import { TagDemo } from "./demos/TagDemo";

export function App() {
  return (
    <main className="mx-auto max-w-6xl p-6 md:p-10 space-y-10">
      <header className="mb-2">
        <h1 className="text-2xl md:text-3xl font-bold">K-Trip UI Demos</h1>
        <p className="muted mt-1">
          Modern components for travelers visiting Korea
        </p>
      </header>

      <section>
        <h2 className="text-lg font-semibold mb-3">
          ButtonDemo: 4가지 버튼 스타일
        </h2>
        <ButtonDemo />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">
          InputDemo: 입력 필드 상태들
        </h2>
        <InputDemo />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">
          CardDemo: 카드와 hover 효과
        </h2>
        <CardDemo />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">TagDemo: 태그 variants</h2>
        <TagDemo />
      </section>
    </main>
  );
}
