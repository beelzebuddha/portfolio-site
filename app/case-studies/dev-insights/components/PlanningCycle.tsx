import styles from './PlanningCycle.module.css';

const ARROW_IMG = '/images/dev-insights/arrow.svg';

const STEPS = [
  {
    heading: 'Planning.',
    body: 'Scheduling the activity, determining which developers to include, emailing their managers, determining the kind of activity to run, and other preparation tasks.',
  },
  {
    heading: 'The Activity.',
    body: 'This is the core of the research intiative. An activity could be a design review, a series of customer interviews, a survey, usability test, card sorting exercise, etc.',
  },
  {
    heading: 'Analysis.',
    body: 'After the activity, the team must take the time to review the feedback data. The analysis should include recommendations for product optimization.',
  },
  {
    heading: 'Optimization.',
    body: 'Using the analysis, the team works to optimize the product based on the feedback analysis - updating the design, revising the workflow, updating the code, etc.',
  },
];

export default function PlanningCycle() {
  return (
    <div className={styles.wrap}>
      {STEPS.map((step, i) => (
        <div key={step.heading} className={styles.stepWrap}>
          <div
            className={`${styles.step} ${i === 0 ? styles.stepFirst : ''}`}
          >
            <p className={styles.heading}>{step.heading}</p>
            <p className={styles.body}>{step.body}</p>
          </div>
          {i < STEPS.length - 1 && (
            <div className={styles.arrow}>
              <img src={ARROW_IMG} alt="" aria-hidden="true" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
