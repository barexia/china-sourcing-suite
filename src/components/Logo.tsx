export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Logo mark */}
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="w-8 h-8 shrink-0"
        aria-hidden="true"
      >
        {/* Badge background */}
        <rect width="40" height="40" rx="10" fill="#dc2626" />
        {/* Compass ring */}
        <circle
          cx="20"
          cy="20"
          r="12"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Compass arrow pointing NE (China direction) */}
        <path d="M20 8 L23 18 L20 16 L17 18 L20 8Z" fill="white" />
        {/* Center dot */}
        <circle cx="20" cy="20" r="2.5" fill="white" />
        {/* NE indicator */}
        <text
          x="20"
          y="7"
          textAnchor="middle"
          fill="white"
          fontSize="5"
          fontWeight="700"
          opacity="0.5"
        >
          NE
        </text>
        {/* SW indicator */}
        <text
          x="20"
          y="36"
          textAnchor="middle"
          fill="white"
          fontSize="5"
          fontWeight="700"
          opacity="0.5"
        >
          SW
        </text>
      </svg>
      {/* Brand text */}
      <div className="leading-tight">
        <span className="font-semibold text-sm tracking-tight text-zinc-900">
          China Sourcing
        </span>
        <span className="block text-[10px] text-zinc-400 tracking-wider uppercase">
          Suite
        </span>
      </div>
    </div>
  );
}
