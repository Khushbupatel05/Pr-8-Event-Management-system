import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Componenets/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Events from "./pages/Events"
import AddEvent from "./pages/AddEvent"
import EditEvent from "./pages/EditEvent"
import ProtectedRoute from "./Componenets/ProtectedRoute"
import { ToastContainer } from "react-toastify"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Services from "./pages/Services"



const App = () => {
  
  return (
    <>
     <ToastContainer />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<ProtectedRoute Component={Events} />} />
          <Route path="/login" element={<ProtectedRoute Component={Login} />} />
          <Route path="/add-event" element={<ProtectedRoute Component={AddEvent}/>} />
          <Route path="/edit-event/:id" element={<ProtectedRoute Component={EditEvent} />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App