interface TikTokIconProps {
  size?: number;
  className?: string;
}

export default function TikTokIcon({ size = 16, className }: TikTokIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.6 5.82c-.88-.96-1.38-2.2-1.38-3.52h-3.19v13.4a2.7 2.7 0 1 1-1.9-2.58v-3.24a5.9 5.9 0 1 0 5.09 5.85V9.8a7.2 7.2 0 0 0 4.22 1.36V7.97a4.4 4.4 0 0 1-2.84-2.15z" />
    </svg>
  );
}
