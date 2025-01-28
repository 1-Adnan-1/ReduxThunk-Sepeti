import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import Restaurant from "./pages/Restaurant";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/restaurants/:id" element={<Restaurant />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
