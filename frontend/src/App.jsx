import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Components/Login/Login'
import SuperAdminDashboard from "./Components/Dashboard/SuperAdminDashboard"
import MainContainer from "./Layouts/MainContainer"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./Redux/userSlice";
import { jwtDecode } from "jwt-decode";

function App() {
//  const dispatch = useDispatch();

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       const user = jwtDecode(token);

//       dispatch(setUser({
//         username: user.username,
//         userType: user.userType
//       }));
//     }
//   }, []);

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
      </Routes>
    </BrowserRouter>
  )
}

export default App
