import './App.css'
import Other from './components/Other/Other'
import Land from './components/landingPage/land'
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Land/>}/>
          <Route path="/other" element={<Other/>}/>
      </Routes>
    </Router>
  )
}

export default App
