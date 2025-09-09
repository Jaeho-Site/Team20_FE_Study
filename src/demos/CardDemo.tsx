import { Card } from "../components/Card";
import { Tag } from "../components/Tag";

const items = [
  {
    title: "Gyeongbokgung Palace",
    description: "Historic royal palace in Seoul. Beautiful at night.",
    imageUrl: "https://picsum.photos/seed/kr1/800/450",
    href: "/spots/gyeongbokgung",
    tag: <Tag variant="brand">Must Visit</Tag>,
  },
  {
    title: "Busan Haeundae",
    description: "Famous beach with cafes & nightlife.",
    imageUrl: "https://picsum.photos/seed/kr2/800/450",
    href: "/spots/haeundae",
    tag: <Tag variant="subtle">Beach</Tag>,
  },
  {
    title: "Jeonju Hanok Village",
    description: "Traditional houses & local food heaven.",
    imageUrl: "https://picsum.photos/seed/kr3/800/450",
    href: "/spots/jeonju",
    tag: <Tag variant="success">Family</Tag>,
  },
];

export function CardDemo() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((it) => (
        <Card key={it.title} {...it} />
      ))}
    </div>
  );
}
