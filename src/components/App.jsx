import { useState, useEffect } from "react"
import Card from '../components/Card'
import '../styles/App.css'

function App() {
  const [data, setData] = useState([]);
  const [activeCards, setActiveCards] = useState([]);
  const [chosenCards, setChosenCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then((data) => {
      let thirtyEntries = []
      for (let i = 0; i < 30; i++) {
        thirtyEntries.push(data[i]);
      }
      setData(thirtyEntries)
    })
    .catch(error => console.error('Error fetching data:', error))
  }, [])

  useEffect(() => {
    if (data.length > 0) {
      setRandomHand(6)
    }
  }, [data])

  function setRandomHand(handSize) {
    let newHand = [];
    let uniqueRandIds = new Set();
  
    while (uniqueRandIds.size < handSize) {
      let randomNum = Math.floor(Math.random() * data.length);
      uniqueRandIds.add(randomNum);
    }
  
    uniqueRandIds.forEach((entry) => {
      newHand.push(data[entry]);
    });
  
    setActiveCards(newHand);
  }

  function incrementScoreFn() {
    setScore(score + 1);
  }

  function resetScoreFn() {
    setScore(0);
  }

  function includesCard(cardName) {
    if (chosenCards.includes(cardName)) {
      return true;
    } else {
      return false;
    }
  }

  function setChosenCardsFn(newItem) {
    setChosenCards([...chosenCards, newItem])
  }

  function resetChosenCardsFn() {
    setChosenCards([]);
  }

  function handleHighScore() {
    if (score > highScore) {
      setHighScore(score);
    }
  }

  return (
    <>
      <header className='flx-row-centred'>
        <h1>Digimon Memory Card</h1>
      </header>
      <main className='flx-col-centred flx-grow'>

        <div className='score'>
          <h2>Score</h2>
          <span>{score}</span>
        </div>

        <div className='high-score'>
          <h2>High-Score</h2>
          <span>{highScore}</span>
        </div>

        <div className='flx-row-centred'>
          <p className='txt-centred'>Pick unique cards to earn points<br></br>
             The game ends if you pick the same card twice.
          </p>
        </div>

        <ul className="card-container">
          {activeCards.map((digimon) => {
            return (
              <Card 
                key={digimon.name} 
                cardKey={digimon.name}
                name={digimon.name} 
                image={digimon.img} 
                setChosenCardsFn={setChosenCardsFn}
                resetChosenCardsFn={resetChosenCardsFn}
                incrementScoreFn={incrementScoreFn}
                resetScoreFn={resetScoreFn}
                shuffleHand={setRandomHand}
                handleHighScore={handleHighScore}
                includesCard={includesCard}
              />
            )
          })}
        </ul>

      </main>
      <footer className='flx-row-centred'>
        Created by Wade
      </footer>
    </>
  )
}

export default App
