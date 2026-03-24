import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './Components/Login/Login'
import SuperAdminDashboard from "./Components/Dashboard/SuperAdminDashboard"

function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/dashboard" element={<SuperAdminDashboard/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
