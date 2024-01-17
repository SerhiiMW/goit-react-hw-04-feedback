import styles from "./section.module.css"

const SectionTitle = ({title, children}) => {
    return (
        <div className={styles.sectionTitle}>
            <h4 className={styles.title}>{title}</h4>
            {children}
        </div>
    )
}

export default SectionTitle;