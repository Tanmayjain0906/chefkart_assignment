import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Ingredient from "./pages/Ingredient";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingredient" element={<Ingredient />} />
      </Routes>

    </div>
  );
}

export default App;
