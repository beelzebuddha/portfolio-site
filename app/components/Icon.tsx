import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faXmark,
  faUpRightFromSquare,
} from '@fortawesome/sharp-regular-svg-icons';

// Add entries here as new icons are needed elsewhere on the site --
// mix sharp-regular-svg-icons / sharp-solid-svg-icons imports freely,
// this map is the only place that needs to know which package an icon
// came from.
const ICONS = {
  bars: faBars,
  xmark: faXmark,
  'up-right-from-square': faUpRightFromSquare,
} as const;

export type IconName = keyof typeof ICONS;

// Maps onto the existing --space-* scale tokens rather than inventing new
// icon-specific sizes.
const SIZE_TOKENS = {
  xs: 'var(--space-2)',
  sm: 'var(--space-3)',
  md: 'var(--space-4)',
  lg: 'var(--space-5)',
} as const;

export type IconSize = keyof typeof SIZE_TOKENS;

// Maps onto the existing theme color tokens so icons recolor correctly
// between Dark and Light mode like everything else on the site.
const COLOR_TOKENS = {
  ink: 'var(--ink)',
  muted: 'var(--muted)',
  accent: 'var(--accent)',
  'accent-ink': 'var(--accent-ink)',
} as const;

export type IconColor = keyof typeof COLOR_TOKENS;

export default function Icon({
  name,
  size = 'md',
  color = 'ink',
  className,
}: {
  name: IconName;
  size?: IconSize;
  color?: IconColor;
  className?: string;
}) {
  return (
    <FontAwesomeIcon
      icon={ICONS[name]}
      className={className}
      style={{
        width: SIZE_TOKENS[size],
        height: SIZE_TOKENS[size],
        color: COLOR_TOKENS[color],
      }}
    />
  );
}
