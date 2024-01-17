// import styles from "./feedback.module.css";

const Statistics = ({ total, good, neutral, bad, countPositiveFeedbackPercentage }) => {
    return (
        <>
            <p>Total:  {total}</p>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Positive feedback: {countPositiveFeedbackPercentage}%</p>
        </>
    )
}

export default Statistics;