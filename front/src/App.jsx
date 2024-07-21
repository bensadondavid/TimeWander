import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Components/Home"
import Register from "./Components/Register"
import Login from './Components/Login'
import Store from "./Components/Store"


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
