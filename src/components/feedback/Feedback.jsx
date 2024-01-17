import { useState } from "react";

import SectionTitle from "./SectionTitle/SectionTitle";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";
import styles from "./feedback.module.css";


const feedbackOptions = ["good", "neutral", "bad"]

const Feedback = () => {
    const [feedback, setFeedback] = useState ({
        good: 0,
        neutral: 0,
        bad: 0,
    })

    const countTotalFeedback = () => {
        const { good, neutral, bad,  } = feedback;
        const total = good + neutral + bad;
        return total;
    }
    const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
        if (!total) {
            return 0;
        }
        return Number(((feedback.good / total) * 100).toFixed(2));
    }
    const leaveFeedback = (keyName) => {
        setFeedback(prevFeedback => ({
            ...prevFeedback,
            [keyName]: prevFeedback[keyName] + 1
        }))
    }
    const total = countTotalFeedback();
    const positiveFeedbackPercentage = countPositiveFeedbackPercentage();

    return (
        <div className={styles.wrapper}>
            <SectionTitle title="Please leave feedback">
                <div className={styles.options}>
                <FeedbackOptions options={feedbackOptions} leaveFeedback={leaveFeedback} />
                </div>
            </SectionTitle>
            <SectionTitle title="Statistics">
                {total === 0 ? <Notification></Notification>
                : <Statistics total={total} good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} countPositiveFeedbackPercentage={positiveFeedbackPercentage} />}
            </SectionTitle>
        </div>
    )
}

export default Feedback;