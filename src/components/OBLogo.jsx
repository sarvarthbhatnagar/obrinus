/**
 * Obrinus butterfly logomark - extracted from the official brand SVG.
 * Renders the circular butterfly symbol at any size.
 * On the dark theme we invert the circle to use dark backgrounds with the butterfly visible.
 */
export default function OBLogo({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="180 250 540 540"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* Circular field */}
      <circle cx="450" cy="520" r="270" fill="#0a0a0f" />
      {/* Subtle gradient rim */}
      <circle cx="450" cy="520" r="270" fill="none" stroke="url(#ob-rim)" strokeWidth="3" />
      {/* Wings */}
      <ellipse cx="340" cy="460" rx="67.5" ry="110" fill="#4b5563" transform="rotate(-32 340 460)" />
      <ellipse cx="370" cy="610" rx="55" ry="75" fill="#4b5563" transform="rotate(42 370 610)" />
      <ellipse cx="530" cy="610" rx="55" ry="75" fill="#4b5563" transform="rotate(-42 530 610)" />
      {/* Accent wing - brand blue */}
      <ellipse cx="560" cy="460" rx="67.5" ry="110" fill="#60a5fa" transform="rotate(32 560 460)" />
      {/* Wing divider */}
      <rect x="405" y="520" width="90" height="16" fill="#0a0a0f" />
      {/* Body */}
      <rect x="431" y="475" width="38" height="120" rx="20" fill="#f1f5f9" />
      {/* Head */}
      <circle cx="450" cy="443" r="23" fill="#f1f5f9" />
      {/* Antennae */}
      <line x1="440" y1="424" x2="420" y2="375" stroke="#f1f5f9" strokeWidth="8" strokeLinecap="round" />
      <line x1="460" y1="424" x2="483" y2="375" stroke="#f1f5f9" strokeWidth="8" strokeLinecap="round" />
      <circle cx="415" cy="365" r="11" fill="#f1f5f9" />
      <circle cx="485" cy="365" r="11" fill="#f1f5f9" />
      <defs>
        <linearGradient id="ob-rim" x1="180" y1="250" x2="720" y2="790" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  )
}
