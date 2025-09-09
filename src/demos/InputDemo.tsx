import { Input } from "../components/Input";
import { useState } from "react";

export function InputDemo() {
  const [pwVisible, setPwVisible] = useState(false);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Input
        label="Default"
        placeholder="Type here..."
        hint="Helper text appears here."
      />

      <Input
        label="With Left Icon"
        placeholder="Search places..."
        leftIcon={<span>🔍</span>}
      />

      <Input label="Success" placeholder="Looks good!" success="Valid value" />

      <Input
        label="Error"
        placeholder="Something is wrong"
        error="Please enter a valid value"
      />

      <Input label="Disabled" value="Read-only" disabled />

      <Input
        label="Password"
        type={pwVisible ? "text" : "password"}
        placeholder="Enter password"
        rightIcon={
          <button
            type="button"
            onClick={() => setPwVisible((v) => !v)}
            className="text-gray-500"
            aria-label={pwVisible ? "Hide password" : "Show password"}
          >
            {pwVisible ? "🙈" : "👁️"}
          </button>
        }
      />
    </div>
  );
}
