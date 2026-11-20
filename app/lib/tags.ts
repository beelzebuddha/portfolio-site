/**
 * The site's tag taxonomy -- the single source of truth for every tag chip on
 * case study cards and case study page heroes. Order here is canonical.
 * Not filters (yet); display only.
 */
export const TAGS = [
  'Research & discovery',
  'Complex workflows',
  'Dashboards & data',
  'Information architecture',
  'Search & filtering',
  'Design systems',
  'Design leadership',
  'AI tools',
] as const;

export type Tag = (typeof TAGS)[number];

/** One to three tags per case study; any string outside TAGS fails type-checking. */
export type CaseStudyTags =
  readonly [Tag] | readonly [Tag, Tag] | readonly [Tag, Tag, Tag];
