import React, { useEffect, useState } from "react"
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

const getQueryParam = (key: string) =>
  Object.fromEntries(new URLSearchParams(window.location.search).entries())[key]

const setQueryParam = (key: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search)
  searchParams.set(key, value)
  history.replaceState(
    null,
    "",
    window.location.pathname + "?" + searchParams.toString()
  )
}

const Serving = ({ burger }: { burger: string }) => (
  <div className="serving">
    <div className="plate">
      <div className="inner" />
    </div>
    <Burger text={burger} />
  </div>
)

export const App = () => {
  const [text, setText] = useState(getQueryParam("burger") ?? "Hamburger")
  const [burgers, setBurgers] = useState<string[]>([])

  useEffect(() => setQueryParam("burger", text), [text])

  return (
    <div className="App">
      <input
        id="burgerName"
        className="hamburgerInput"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Serving burger={text} />
      <input
        type="button"
        onClick={() => {
          setBurgers((current) => current.concat(text))
          setText("Hamburger")
        }}
        value="Serve"
      />
      <div className="conveyor">
        {burgers.map((burger, i) => (
          <Serving key={i} burger={burger} />
        ))}
      </div>
      <input type="button" onClick={() => setBurgers([])} value="Clear" />
    </div>
  )
}
