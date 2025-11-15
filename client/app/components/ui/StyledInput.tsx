"use client";

type Props = {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function StyledInput({
  label,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
}: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <label
        style={{
          fontSize: "1.1rem",
          color: "#ccc",
          fontWeight: 500,
          letterSpacing: "0.01rem",
        }}
      >
        {label}
        {required && <span style={{ color: "#d88" }}> *</span>}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
          padding: "1rem 1.25rem",
          fontSize: "1.25rem",
          color: "#eee",
          background: "transparent",
          borderRadius: "8px",
          border: "1.5px solid rgba(255,255,255,0.15)",
          outline: "none",
          transition: "0.15s ease",
          boxShadow:
            "0 1px 0 0 rgba(255, 255, 255, 0.3), inset 0 0 0 transparent",
        }}
        onFocus={(e) => {
          e.currentTarget.style.border = "1.5px solid rgba(255,255,255,0.35)";
          e.currentTarget.style.boxShadow =
            "0 0 0 3px rgba(255,255,255,0.15)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.border = "1.5px solid rgba(255,255,255,0.15)";
          e.currentTarget.style.boxShadow =
            "0 1px 0 0 rgba(255, 255, 255, 0.3)";
        }}
      />
    </div>
  );
}
