import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import TimerComponent from './pages/Dashboard/pages/TimerComponent'
import ErrorRoute from './pages/ErrorRoute'
import Targets from './pages/Dashboard/pages/Targets'
import Resources from './pages/Dashboard/pages/Resources'
import CustomCursor from './components/CustomCursor'
function App() {

  return (
    <Router>
      <CustomCursor />
      <Routes>
        {/* {RoutesList.map((item) => {
          return (
            <Route key={item.id} path={item.route} element={item.element} />
          )
        })} */}
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="/dashboard/timer" element={<TimerComponent />} />
          <Route path="/dashboard/targets" element={<Targets />} />
          <Route path="/dashboard/resources" element={<Resources />} />
          <Route path="/dashboard/*" element={<ErrorRoute />} />
        </Route>
      </Routes>

    </Router>
  )
}

export default App
