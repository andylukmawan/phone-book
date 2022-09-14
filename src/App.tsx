import { css } from "@emotion/react"

function App() {
  return (
    <div>
      <h1 css={css`font-weight: normal`}>Phone Book</h1>
      <h1 css={css`font-weight: 500`}>Phone Book</h1>
      <h1 css={css`font-weight: bold`}>Phone Book</h1>
    </div>
  )
}

export default App
