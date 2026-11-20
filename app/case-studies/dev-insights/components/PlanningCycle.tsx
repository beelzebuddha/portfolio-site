import styles from './PlanningCycle.module.css';

const STEPS = [
  {
    heading: 'Planning',
    body: 'Scheduling the activity, determining which developers to include, emailing their managers, determining the kind of activity to run, and other preparation tasks.',
  },
  {
    heading: 'The Activity',
    body: 'This is the core of the research initiative. An activity could be a design review, a series of developer interviews, a survey, usability test, card sorting exercise, etc.',
  },
  {
    heading: 'Analysis',
    body: 'After the activity, the team must take the time to review the feedback data. The analysis should include recommendations for product optimization.',
  },
  {
    heading: 'Optimization',
    body: 'Using the analysis, the team works to optimize the product based on the feedback analysis - updating the design, revising the workflow, updating the code, etc.',
  },
];

/**
 * Four-step activity cycle. An ordered list carries the sequence; the
 * arrows are decorative. `describedBy` points at the visible caption that
 * states the loop back to Planning.
 */
export default function PlanningCycle({
  labelledBy,
  describedBy,
}: {
  labelledBy?: string;
  describedBy?: string;
}) {
  return (
    <ol
      className={styles.wrap}
      aria-labelledby={labelledBy}
      aria-describedby={describedBy}
    >
      {STEPS.map((step, i) => (
        <li key={step.heading} className={styles.stepWrap}>
          <div className={`${styles.step} ${i === 0 ? styles.stepFirst : ''}`}>
            <h4 className={styles.heading}>{step.heading}</h4>
            <p className={styles.body}>{step.body}</p>
          </div>
          {i < STEPS.length - 1 && (
            <svg
              className={styles.arrow}
              viewBox="0 0 15 53"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M7.5 0V51M1 45l6.5 6.5L14 45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </li>
      ))}
    </ol>
  );
}
