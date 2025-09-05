import { type InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = '', ...props }, ref) => {
    const inputClasses = ['input', error ? 'border-danger focus:border-danger' : '', className]
      .filter(Boolean)
      .join(' ');

    return (
      <div className="w-full">
        {label && <label className="block text-sm font-medium text-text-main mb-1">{label}</label>}
        <input ref={ref} className={inputClasses} {...props} />
        {error && <p className="mt-1 text-sm text-danger">{error}</p>}
        {helperText && !error && <p className="mt-1 text-sm text-text-subtle">{helperText}</p>}
      </div>
    );
  },
);

Input.displayName = 'Input';
