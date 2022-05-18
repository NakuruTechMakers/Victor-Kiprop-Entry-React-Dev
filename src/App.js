import "./App.css";
import styled from "styled-components";
import ProductsList from "./components/ProductsList";
import Nav from "./components/Nav";
import PDP from "./components/PDP";
import Cart from "./components/Cart";
import CartOverlay from "./components/CartOverlay";

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <Nav />
          <Routes>
            <Route exact path="/" element={<ProductsList />} />
            <Route path="/cart" element={<Cart />} />
            <Route exact path="/product/:id" element={<PDP />} />
          </Routes>
          {/* <ProductsList />
          <PDP />
          <Cart />
          <CartOverlay /> */}
        </Container>
      </div>
    </Router>
  );
}

export default App;
