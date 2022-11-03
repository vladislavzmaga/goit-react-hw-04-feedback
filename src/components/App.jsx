import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { StatisticBox } from './FeedbackStatistics/FeedbackStatistics';
import { Notification } from './Notification/Notification';
import { Box } from './Box/Box';
import { Section } from './Section/Section';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onGoodFeedback = () => {
    setGood(good + 1);
  };

  const onNeutralFeedback = () => {
    setNeutral(neutral + 1);
  };

  const onBadFeedback = () => {
    setBad(bad + 1);
  };

  const total = good + neutral + bad;
  const parcent = (good * 100) / total;

  return (
    <Box>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          good={onGoodFeedback}
          neutral={onNeutralFeedback}
          bad={onBadFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {total > 0 ? (
          <StatisticBox
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            parcent={parcent.toFixed()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Box>
  );
};
