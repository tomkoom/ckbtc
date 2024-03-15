import { useEffect, useState } from "react"
import motokoLogo from "./assets/motoko_moving.png"
import motokoShadowLogo from "./assets/motoko_shadow.png"
import reactLogo from "./assets/react.svg"
import viteLogo from "./assets/vite.svg"
import { backend } from "./declarations/backend"

function App() {
  const [count, setCount] = useState<number | undefined>()
  const [loading, setLoading] = useState(false)

  // Get the current counter value
  const fetchCount = async () => {
    try {
      setLoading(true)
      const count = await backend.get()
      setCount(+count.toString()) // Convert BigInt to number
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const increment = async () => {
    if (loading) return // Cancel if waiting for a new count
    try {
      setLoading(true)
      await backend.inc() // Increment the count by 1
      await fetchCount() // Fetch the new count
    } finally {
      setLoading(false)
    }
  }

  // Fetch the count on page load
  useEffect(() => {
    fetchCount()
  }, [])

  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a
          href="https://internetcomputer.org/docs/current/developer-docs/build/cdks/motoko-dfinity/motoko/"
          target="_blank"
        >
          <span className="logo-stack">
            <img
              src={motokoShadowLogo}
              className="logo motoko-shadow"
              alt="Motoko logo"
            />
            <img src={motokoLogo} className="logo motoko" alt="Motoko logo" />
          </span>
        </a>
      </div>
      <h1>Vite + React + Motoko</h1>
      <div className="card">
        <button onClick={increment} style={{ opacity: loading ? 0.5 : 1 }}>
          count is {count}
        </button>
        <p>
          Edit <code>backend/Backend.mo</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React, and Motoko logos to learn more
      </p>
    </div>
  )
}

export default App
