import { Tag } from "../components/Tag";

export function TagDemo() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Tag variant="default">Default</Tag>
        <Tag variant="brand">Brand</Tag>
        <Tag variant="success">Success</Tag>
        <Tag variant="warning">Warning</Tag>
        <Tag variant="danger">Danger</Tag>
        <Tag variant="outline">Outline</Tag>
        <Tag variant="subtle">Subtle</Tag>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Tag size="sm" variant="brand" leadingIcon={<span>📍</span>}>
          Seoul
        </Tag>
        <Tag size="md" variant="brand" leadingIcon={<span>📍</span>}>
          Busan
        </Tag>
      </div>
    </div>
  );
}
