import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "./public/registration-form/pages/Landing"

function App() {

  return (
    <div className='w-full'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
