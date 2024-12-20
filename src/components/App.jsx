import { useState, useEffect } from "react"
import Card from '../components/Card'
import '../styles/App.css'

function App() {
  const [data, setData] = useState([]);

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
          <p className='txt-centred'>Pick unique cards to earn points<br></br>
             The game ends if you pick the same card twice.
          </p>
        </div>

        <ul className="card-container">
          {data.map((digimon) => {
            return (
              <Card key={crypto.randomUUID()} name={digimon.name} image={digimon.img}/>
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
