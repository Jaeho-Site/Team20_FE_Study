import type { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
  className?: string;
}

export const Tag = ({ children, variant = 'default', className = '' }: TagProps) => {
  const baseClasses = 'k-tag';

  const variantClasses = {
    default: '',
    primary: 'k-tag-primary',
    secondary: 'k-tag-secondary',
    accent: 'k-tag-accent',
  };

  const combinedClasses = [baseClasses, variantClasses[variant], className]
    .filter(Boolean)
    .join(' ');

  return <span className={combinedClasses}>{children}</span>;
};
