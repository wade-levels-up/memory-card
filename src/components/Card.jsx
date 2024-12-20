import styles from '../styles/Card.module.css';

export default function Card({ name, image }) {
    return (
        <div className={styles.card}>
            <img className={styles.image} src={image} alt={name} />
            <h3 className={styles.h3}>{name}</h3>
        </div>
    )
}