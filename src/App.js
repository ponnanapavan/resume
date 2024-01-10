import Homepage from "./pages/Homepage";
import { Route,Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <div className="App">
      <Routes>
    <Route path="/" element={ <Homepage/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route/>
      </Routes>
    
    </div>
  );
}

export default App;
