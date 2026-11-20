/**
 * The case studies in home page card order. The single source for that order:
 * the home page cards and every case study's "Next case study" link read it.
 */
export const CASE_STUDY_ORDER = [
  { title: 'Dev Insights', href: '/case-studies/dev-insights' },
  { title: 'Chassis CodeGen', href: '/case-studies/chassis-codegen' },
  { title: 'Rearview', href: '/case-studies/rearview' },
  { title: 'AXA Vantage', href: '/case-studies/axa-vantage' },
  { title: 'USPTO Open Data Portal', href: '/case-studies/uspto-open-data' },
  { title: 'DragOn UI Builder', href: '/case-studies/dragon-ui-builder' },
] as const;

export type CaseStudyHref = (typeof CASE_STUDY_ORDER)[number]['href'];

/** The case study after `href`, wrapping from the last back to the first. */
export function nextCaseStudy(href: CaseStudyHref) {
  const i = CASE_STUDY_ORDER.findIndex((study) => study.href === href);
  return CASE_STUDY_ORDER[(i + 1) % CASE_STUDY_ORDER.length];
}
