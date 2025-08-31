import { Route, Routes } from "react-router-dom"
import Main from "./Pages/Main"
import Projects from "./Pages/Projects"

function App() {
  return (
    <div className="max-w-5xl mx-auto py-4">

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
    </div>
  )
}

export default App
