import { Component } from "react";

import SectionTitle from "./SectionTitle/SectionTitle";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";
import styles from "./feedback.module.css";


class Feedback extends Component {
    static feedbackOptions = ["good", "neutral", "bad"]

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    countTotalFeedback() {
        const { good, neutral, bad,  } = this.state;
        const total = good + neutral + bad;
        return total;
    }

    countPositiveFeedbackPercentage() {
        const total = this.countTotalFeedback();
        if (!total) {
            return 0;
        }
        return Number(((this.state.good / total) * 100).toFixed(2));
    }

    leaveFeedback = (keyName) => {
        this.setState(prevState => {
            return {
                [keyName]: prevState[keyName] + 1
            }
        })
    }

    render() {
        const total = this.countTotalFeedback();

        const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();


        return (
            <div className={styles.wrapper}>
                <SectionTitle title="Please leave feedback">
                    <div className={styles.options}>
                    <FeedbackOptions options={Feedback.feedbackOptions} leaveFeedback={this.leaveFeedback} />
                    </div>
                </SectionTitle>
                <SectionTitle title="Statistics">
                    {total === 0 ? <Notification></Notification>
                    : <Statistics total={total} good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} countPositiveFeedbackPercentage={countPositiveFeedbackPercentage} />}
                </SectionTitle>
            </div>
        )
    }
}

export default Feedback;