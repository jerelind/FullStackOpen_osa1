import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
          {
            nimi: 'Reactin perusteet',
            tehtavia: 10,
            id: 1
          },
          {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7,
            id: 2
          },
          {
            nimi: 'Komponenttien tila',
            tehtavia: 14,
            id: 3
          }
        ]
      }
  
    return (
      <div>
        <h1>{kurssi.nimi}</h1>
        <p>{kurssi.osat[0].nimi} {kurssi.osat[0].tehtavia}</p>
        <p>{kurssi.osat[1].nimi} {kurssi.osat[1].tehtavia}</p>
        <p>{kurssi.osat[2].nimi} {kurssi.osat[2].tehtavia}</p>
        <p>yhteensa {kurssi.osat[0].tehtavia + kurssi.osat[1].tehtavia + kurssi.osat[2].tehtavia} tehtavaa</p>
      </div>
    )
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
