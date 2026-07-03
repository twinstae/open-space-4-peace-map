import { createFileRoute } from '@tanstack/react-router'
import { css } from "../../styled-system/css"

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main>

     <h1 className={css({ color: "red", fontWeight: 700 })}>열린 우주 방산 지도</h1>
      
    </main>
  )
}
