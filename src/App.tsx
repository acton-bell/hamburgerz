import React, { useState } from "react"
import "./App.css"

const Burger = ({ text }: { text: string } = { text: "Hamburger" }) => (
  <div className="burger">
    {text.split("").map((char) => {
      const asLowerCase = char.toLowerCase()

      return (
        <span
          className={`${asLowerCase} ${asLowerCase === char ? "" : "big"}`}
        />
      )
    })}
  </div>
)

function App() {
  const [text, setText] = useState("Hamburger")
  const [burgers, setBurgers] = useState<string[]>([])

  return (
    <div className="App">
      <input
        id="burgerName"
        className="hamburgerInput"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Burger text={text} />
      <input
        type="button"
        onClick={() => {
          setBurgers((current) => current.concat(text))
          setText("Hamburger")
        }}
        value="New"
      />
      <div className="conveyor">
        {burgers.map((burger, i) => (
          <Burger key={i} text={burger} />
        ))}
      </div>
      <input type="button" onClick={() => setBurgers([])} value="Clear" />
    </div>
  )
}

export default App
