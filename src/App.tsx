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

  return (
    <div className="App">
      <input
        className="hamburgerInput"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Burger text={text} />
    </div>
  )
}

export default App
