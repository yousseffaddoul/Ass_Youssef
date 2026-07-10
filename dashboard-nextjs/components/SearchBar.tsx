"use client";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        w-full
        rounded-md
        border
        border-gray-300
        p-2
        sm:p-3
        text-sm
        sm:text-base
        mb-4
        outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:border-blue-500
        transition
      "
    />
  );
}