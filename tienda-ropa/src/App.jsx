import AppRouter from "./routes/AppRouter";
import Navbar from "./components/Navbar";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;