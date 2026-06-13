import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Components/Login/Login'
import SuperAdminDashboard from "./Components/Dashboard/SuperAdminDashboard"
import MainContainer from "./Layouts/MainContainer"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./Redux/userSlice";
import { jwtDecode } from "jwt-decode";
import Institute from "./Components/Institute/Institute";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <>
              <MainContainer>
                <SuperAdminDashboard />
              </MainContainer>
            </>
          }
        />
        <Route
          path="/institute"
          element={
            <>
              <MainContainer>
                <Institute />
              </MainContainer>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
