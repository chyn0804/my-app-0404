// src/components/SelectBox.tsx
"use client";

import React from "react";

interface SelectBoxProps {
  options: Option[];
  value?: string | number;
  onChange: (value: string | number) => void;
  label?: string;
  placeholder?: string;
}

const SelectBox = ({
  options,
  value,
  onChange,
  label,
  placeholder,
}: SelectBoxProps) => {
  return (
    <div>
      {label && <label className="block mb-1">{label}</label>}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border p-2 rounded"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
