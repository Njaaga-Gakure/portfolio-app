import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home, Projects, Error} from './pages'
import { NavBar, SideBar, Footer} from './components'

function App() {
  return (
    <Router>
      <NavBar />
      <SideBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path="*" element={<Error />} /> 
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
