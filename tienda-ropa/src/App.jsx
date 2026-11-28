import AppRouter from "./routes/AppRouter";
import Navbar from "./components/Navbar";

import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {

  const [carrito, setCarrito] = useState([]);
  return (
    <BrowserRouter>
      <Navbar  carrito={carrito} />
      <AppRouter carrito={carrito}
                 setCarrito={setCarrito}
      />
    </BrowserRouter>
  );
}

export default App;