
import Signup from "./components/Signup"
import ContactUs from "./pages/ContactUs"
import Courses from "./pages/Courses"
import Home from "./pages/Home"
import { Routes, Route, Navigate } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider"

function App() {
    const [authUser, setAuthUser] = useAuth();
    return (
        <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/course" element={ authUser?<Courses /> : <Navigate to={"/signup"}/>} />
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/contact" element={<ContactUs/>}/>
            </Routes>
            <Toaster/>
        </>
    )
}

export default App
