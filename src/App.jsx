import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Componenets/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Events from "./pages/Events"
import AddEvent from "./pages/AddEvent"



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/events" element={<Events />}/>
          <Route path="add-event" element={<AddEvent />}/>        
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App