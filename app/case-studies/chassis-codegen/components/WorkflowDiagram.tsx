import { Fragment } from 'react';
import styles from './WorkflowDiagram.module.css';

type Step = { text: string; variant?: 'optional' | 'accent' };

const BEFORE: Step[] = [
  { text: 'Download all 55 components' },
  { text: 'Delete the ones not needed' },
  { text: 'Find each doc in its own team space' },
  { text: 'Configure each one by hand' },
];

const AFTER: Step[] = [
  { text: 'Browse catalog, add to cart' },
  { text: 'Configure (optional)', variant: 'optional' },
  { text: 'Add project metadata once' },
  { text: 'Download one package', variant: 'accent' },
];

const TITLE =
  'Developers went from all 55 components to only the ones they need';

const SUMMARY =
  'Before CodeGen, developers downloaded all 55 components, deleted the unused ones, hunted for docs, and configured each by hand. After, they add components to a cart, optionally configure them, add metadata once, and download one package. Download now skips configuration.';

const SKIP_LABEL = 'Download now skips configuration';

const STEP_SLOTS = [styles.s0, styles.s1, styles.s2, styles.s3];
const ARROW_SLOTS = [styles.a0, styles.a1, styles.a2];

function Arrow({ slot }: { slot: string }) {
  return (
    <span className={`${styles.arrow} ${slot}`}>
      <svg viewBox="0 0 24 16" focusable="false">
        <path
          d="M1 8H22M16 2l6 6-6 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function Row({
  label,
  steps,
  skip = false,
}: {
  label: string;
  steps: Step[];
  skip?: boolean;
}) {
  return (
    <div className={styles.track}>
      <p className={styles.rowLabel}>{label}</p>
      <div className={styles.row}>
        {steps.map((step, i) => (
          <Fragment key={step.text}>
            <span
              className={[
                styles.step,
                STEP_SLOTS[i],
                step.variant ? styles[step.variant] : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {step.text}
            </span>
            {i < steps.length - 1 && <Arrow slot={ARROW_SLOTS[i]} />}
          </Fragment>
        ))}
        {skip && (
          <span className={styles.skip}>
            <svg className={styles.skipHead} viewBox="0 0 16 10" focusable="false">
              <path
                d="M2 8l6-6 6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={styles.skipLabel}>{SKIP_LABEL}</span>
          </span>
        )}
      </div>
      {skip && (
        <p className={styles.skipNote}>
          <span className={styles.noteLine} />
          {SKIP_LABEL}
        </p>
      )}
    </div>
  );
}

/**
 * Before/after workflow. The rows are drawn in HTML/CSS so they follow the
 * theme; the drawing is exposed as one image with SUMMARY as its text
 * alternative, and the visible figcaption is its title.
 */
export default function WorkflowDiagram() {
  return (
    <figure className={styles.card}>
      <figcaption className={styles.title}>{TITLE}</figcaption>
      <div className={styles.diagram} role="img" aria-label={SUMMARY}>
        <Row label="Before" steps={BEFORE} />
        <Row label="After" steps={AFTER} skip />
      </div>
    </figure>
  );
}
