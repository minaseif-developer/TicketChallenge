import './App.scss'
import { BrowserRouter } from 'react-router-dom'
import Router from './provider/router'
import NavBar from './component/nav'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <main>
          <Router />
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
