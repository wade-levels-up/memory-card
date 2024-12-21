import React from "react";
import styles from '../styles/Card.module.css';

function Card({ cardKey, name, image, incrementScoreFn, resetScoreFn, handleHighScore, shuffleHand, setChosenCardsFn, resetChosenCardsFn, includesCard }) {

    function handleCardClick() {
        if (!includesCard(cardKey)) {
            setChosenCardsFn(cardKey);
            incrementScoreFn()
            shuffleHand(6);
        } else {
            handleHighScore()
            resetChosenCardsFn();
            resetScoreFn();
        }
    }

    return (
        <div key={cardKey} className={styles.card} onClick={handleCardClick}>
            <img className={styles.image} src={image} alt={name} />
            <h3 className={styles.h3}>{name}</h3>
        </div>
    )
}

export default React.memo(Card);