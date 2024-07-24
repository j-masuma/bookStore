
import Signup from "./components/Signup"
import ContactUs from "./pages/ContactUs"
import Courses from "./pages/Courses"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"


function App() {
    return (
        <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/course" element={<Courses />} />
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/contact" element={<ContactUs/>}/>
            </Routes>
        </>
    )
}

export default App
