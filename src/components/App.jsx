import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
//--------------------------------------------------------------------//

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  positiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.totalFeedback());
  };

  handlerBtn = e => {
    const { name } = e.target;
    this.setState(ps => {
      return { [name]: ps[name] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handlerBtn}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {!this.totalFeedback() ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalFeedback()}
              positivePercentage={this.positiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
