import * as React from "react";

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  label?: string;
  hint?: string;
  error?: string;
  success?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export function Input({
  label,
  hint,
  error,
  success,
  leftIcon,
  rightIcon,
  disabled,
  ...rest
}: InputProps) {
  const stateClass = error ? "field-error" : success ? "field-success" : "";
  return (
    <label className="block">
      {label && <span className="field-label">{label}</span>}
      <div className="relative">
        {leftIcon && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {leftIcon}
          </span>
        )}

        <input
          className={[
            "field",
            stateClass,
            disabled ? "field-disabled" : "",
            leftIcon ? "pl-10" : "",
            rightIcon ? "pr-10" : "",
          ].join(" ")}
          disabled={disabled}
          {...rest}
        />

        {rightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            {rightIcon}
          </span>
        )}
      </div>

      {hint && !error && !success && <p className="field-hint">{hint}</p>}
      {error && <p className="field-msg-err">{error}</p>}
      {success && <p className="field-msg-succ">{success}</p>}
    </label>
  );
}
