import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/productdetails" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
