import * as React from "react";

type Variant =
  | "default"
  | "brand"
  | "success"
  | "warning"
  | "danger"
  | "outline"
  | "subtle";

type Size = "sm" | "md";

type TagProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  leadingIcon?: React.ReactNode;
};

const variantClass: Record<Variant, string> = {
  default: "tag-default",
  brand: "tag-brand",
  success: "tag-success",
  warning: "tag-warning",
  danger: "tag-danger",
  outline: "tag-outline",
  subtle: "tag-subtle",
};

const sizeClass: Record<Size, string> = {
  sm: "tag-sm",
  md: "tag-md",
};

export function Tag({
  children,
  variant = "default",
  size = "md",
  leadingIcon,
}: TagProps) {
  return (
    <span className={["tag", variantClass[variant], sizeClass[size]].join(" ")}>
      {leadingIcon && <span className="text-current">{leadingIcon}</span>}
      {children}
    </span>
  );
}
