import React from "react";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Home from "../pages/Home"
import SignUp from "../pages/SignUp"
import Login from "../pages/Login"

const Router=({refreshUser,isLoggedIn,userObj})=>{
  console.log(isLoggedIn)
  return(
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/home" element={<Home userObj={userObj}/>} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

          </>
        )}
        {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
export default Router