import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

export const Icon = ({ children, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    {children}
  </svg>
);

export const BoltIcon = (props: IconProps) => (
  <Icon {...props}><path d="m13.6 2-8 11h6l-1.2 9 8-12h-6l1.2-8Z" /></Icon>
);
export const SwordsIcon = (props: IconProps) => (
  <Icon {...props}><path d="m14.5 5.5 4-4 2 2-4 4M4 20l5-5M3 3l18 18M3 3l2 6 4-4-6-2ZM15 15l-3 3M18 12l3-9-9 3" /></Icon>
);
export const CodeIcon = (props: IconProps) => (
  <Icon {...props}><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" /></Icon>
);
export const TrophyIcon = (props: IconProps) => (
  <Icon {...props}><path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4ZM7 6H4v1a4 4 0 0 0 4 4M17 6h3v1a4 4 0 0 1-4 4" /></Icon>
);
export const ArrowIcon = (props: IconProps) => (
  <Icon {...props}><path d="M5 12h14M14 7l5 5-5 5" /></Icon>
);
export const SearchIcon = (props: IconProps) => (
  <Icon {...props}><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></Icon>
);
export const GithubIcon = (props: IconProps) => (
  <Icon {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4 5.1 5.1 0 0 0 19.1.5S18 0 15 2a13.4 13.4 0 0 0-7 0C5 .1 3.9.5 3.9.5A5.1 5.1 0 0 0 3.7 4a5.5 5.5 0 0 0-1.5 3.8c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4M8 19c-3 .9-3-1.5-4-2" /></Icon>
);