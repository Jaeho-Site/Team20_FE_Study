import * as React from "react";

type CardProps = {
  title: string;
  description?: string;
  imageUrl?: string;
  href?: string;
  tag?: React.ReactNode;
};

export function Card({ title, description, imageUrl, href, tag }: CardProps) {
  const content = (
    <div className="card card-hover">
      {imageUrl ? (
        <img src={imageUrl} alt="" className="card-img" />
      ) : (
        <div className="card-img grid place-items-center text-gray-400">
          Image
        </div>
      )}

      <div className="mt-3 flex items-start justify-between gap-2">
        <h3 className="card-title">{title}</h3>
        {tag}
      </div>

      {description && <p className="card-desc mt-1">{description}</p>}
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}
