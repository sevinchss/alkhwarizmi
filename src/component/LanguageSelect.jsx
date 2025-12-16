import { useState } from "react";

const languages = [
  { code: "UZB", label: "Uz", flag: "/uzb.png" },
  { code: "ENG", label: "En", flag: "/eng.png" },
];

export default function LanguageSelect({ onChange }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);

  const handleSelect = (lang) => {
    setSelected(lang);
    setOpen(false);
    onChange?.(lang.code);
  };

  return (
    <div className="relative inline-block text-sm">
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-2 py-1 cursor-pointer"
      >
        <img
          src={selected.flag}
          alt=""
          className="w-5 h-5 rounded-sm object-cover"
        />
        <span>{selected.label}</span>
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute mt-1 bg-white shadow-md rounded z-10">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <img
                src={lang.flag}
                alt=""
                className="w-5 h-5 rounded-sm object-cover"
              />
              <span>{lang.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
