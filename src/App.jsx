import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Home></Home>
      <Footer />
    </div>
  );
}

export default App;
