import { Tag } from '../components';

export const TagDemo = () => {
  return (
    <section className="animate-fade-in">
      <h2 className="text-xl font-bold text-text-main mb-6">🏷️ 태그 컴포넌트</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-text-subtle mb-2">여행 테마</h3>
          <div className="flex flex-wrap gap-2">
            <Tag variant="primary">#바다여행</Tag>
            <Tag variant="secondary">#하늘길</Tag>
            <Tag variant="accent">#물결소리</Tag>
            <Tag variant="default">#자연힐링</Tag>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-text-subtle mb-2">K-콘텐츠</h3>
          <div className="flex flex-wrap gap-2">
            <Tag variant="primary">#K-드라마</Tag>
            <Tag variant="secondary">#K-POP</Tag>
            <Tag variant="accent">#K-영화</Tag>
            <Tag variant="default">#웹툰</Tag>
          </div>
        </div>
      </div>
    </section>
  );
};
