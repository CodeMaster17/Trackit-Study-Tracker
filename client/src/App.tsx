import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { RoutesList } from './routes/routes'
function App() {

  return (
    <Router>
      <Routes>
        {RoutesList.map((item) => {
          return (
            <Route path={item.route} element={item.element} />
          )
        })}
      </Routes>

    </Router>
  )
}

export default App
