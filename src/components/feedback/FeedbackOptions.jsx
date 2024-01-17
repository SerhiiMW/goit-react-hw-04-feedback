import styles from "./feedback.module.css";

const feedbackOptions = ({ options, leaveFeedback }) => {
    const buttonElements = options.map(name => <button className={styles.btn} onClick={(() => leaveFeedback(name))} key={name}>{name}</button>);

    return buttonElements;
}

export default feedbackOptions;