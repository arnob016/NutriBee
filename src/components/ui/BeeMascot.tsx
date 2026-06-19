interface BeeMascotProps {
  size?: number;
  className?: string;
  mood?: "happy" | "thinking" | "waving";
}

export function BeeMascot({ size = 80, className = "", mood = "happy" }: BeeMascotProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
    >
      {/* Left wing */}
      <ellipse
        cx="34"
        cy="44"
        rx="22"
        ry="13"
        fill="rgba(255,255,255,0.72)"
        stroke="#d97706"
        strokeWidth="1.2"
        transform="rotate(-25 34 44)"
      />
      {/* Right wing */}
      <ellipse
        cx="86"
        cy="44"
        rx="22"
        ry="13"
        fill="rgba(255,255,255,0.72)"
        stroke="#d97706"
        strokeWidth="1.2"
        transform="rotate(25 86 44)"
      />

      {/* Body */}
      <ellipse cx="60" cy="75" rx="24" ry="31" fill="#f59e0b" />
      {/* Stripes */}
      <ellipse cx="60" cy="69" rx="24" ry="7" fill="#1c1917" opacity="0.85" />
      <ellipse cx="60" cy="82" rx="22" ry="7" fill="#1c1917" opacity="0.75" />
      {/* Body bottom taper */}
      <ellipse cx="60" cy="93" rx="15" ry="9" fill="#f59e0b" />

      {/* Head */}
      <circle cx="60" cy="42" r="18" fill="#fbbf24" />
      {/* Head sheen */}
      <ellipse cx="54" cy="36" rx="6" ry="4" fill="rgba(255,255,255,0.35)" transform="rotate(-20 54 36)" />

      {/* Eyes */}
      <circle cx="52" cy="40" r="5.5" fill="white" />
      <circle cx="68" cy="40" r="5.5" fill="white" />
      <circle cx="53" cy="40" r="3" fill="#1c1917" />
      <circle cx="69" cy="40" r="3" fill="#1c1917" />
      {/* Pupils shine */}
      <circle cx="54" cy="39" r="1" fill="white" />
      <circle cx="70" cy="39" r="1" fill="white" />

      {/* Smile */}
      {mood === "happy" && (
        <path
          d="M52 48 Q60 55 68 48"
          stroke="#1c1917"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      )}
      {mood === "thinking" && (
        <path
          d="M53 49 Q60 49 67 49"
          stroke="#1c1917"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      )}

      {/* Left antenna */}
      <line
        x1="52"
        y1="26"
        x2="43"
        y2="13"
        stroke="#1c1917"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="42" cy="12" r="3" fill="#f59e0b" stroke="#1c1917" strokeWidth="1" />

      {/* Right antenna */}
      <line
        x1="68"
        y1="26"
        x2="77"
        y2="13"
        stroke="#1c1917"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="78" cy="12" r="3" fill="#f59e0b" stroke="#1c1917" strokeWidth="1" />

      {/* Stinger */}
      <polygon points="60,103 56,112 64,112" fill="#b45309" opacity="0.7" />

      {/* Waving arm */}
      {mood === "waving" && (
        <path
          d="M36 65 Q20 50 18 40 Q16 32 24 30"
          stroke="#f59e0b"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
