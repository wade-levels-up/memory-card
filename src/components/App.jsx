import { useState, useEffect } from "react"
import '../styles/App.css'

function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <header className='flx-row-centred'>
        <h1>Digimon Memory Card</h1>
      </header>
      <main className='flx-col-centred flx-grow'>

        <div className='score'>
          <h2>Score</h2>
          <span>0</span>
        </div>

        <div className='high-score'>
          <h2>High-Score</h2>
          <span>60</span>
        </div>

        <div className='flx-row-centred'>
          <p className='txt-centred'>Pick unique cards to earn point<br></br>
             The game ends if you pick the same card twice.
          </p>
        </div>

        <ul>
          <li>Card 1</li>
          <li>Card 2</li>
          <li>Card 3</li>
        </ul>

      </main>
      <footer className='flx-row-centred'>
        Created by Wade
      </footer>
    </>
  )
}

export default App
