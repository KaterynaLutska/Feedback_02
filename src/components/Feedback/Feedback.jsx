import { Component } from 'react';
import PropTypes from 'prop-types';
import './Feedback.css';

import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const target = event.target.textContent;
    this.setState(prevent => ({
      ...{ [target.toLowerCase()]: prevent[target.toLowerCase()] + 1 },
    }));
  };

  countTotalFeedback = () => {
    const value = Object.values(this.state);
    const totalVoice = value.reduce((akk, value) => akk + value, 0);
    return totalVoice;
  };

  countPositiveFeedbackPercentage = () => {
    let positivePercentage = 0;
    const badVoice = this.state.bad;
    const totalVoice = this.countTotalFeedback();
    positivePercentage = Math.round(
      ((totalVoice - badVoice) / totalVoice) * 100,
    );
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalVoice = this.countTotalFeedback();
    const goodRate = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
            voice={totalVoice}
          />
        </Section>
        <Section title="Statistics">
          {totalVoice >= 1 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={totalVoice}
              countPositiveFeedbackPercentage={goodRate}
            />
          )}
        </Section>
        {totalVoice === 0 && <Notification message="No feedback given" />}
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

FeedbackOptions.propTypes = {
  state: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totalVoice: PropTypes.number,
  goodRate: PropTypes.number,
};

Notification.propTypes = {
  message: PropTypes.string,
};
export default Feedback;
