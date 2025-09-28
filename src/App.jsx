import { Suspense } from "react";
import "./App.css";
import Navbar from "./Component/navbar";

function App() {
  const navPromise = fetch("./Nav.json").then((res) => res.json());

  return (
    <>
      <header>
        <Suspense fallback={<p>Loading...</p>}>
          <Navbar navPromise={navPromise}></Navbar>
        </Suspense>
      </header>
    </>
  );
}

export default App;
