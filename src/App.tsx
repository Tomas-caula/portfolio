/** @format */

import { useEffect } from "react";
import Header from "./components/Header/Header";
import Scrollbar from "./components/Scrollbar/Scrollbar";

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("theme", "light");
  });

  return (
    <div className="main-container">
      <Header name="Tomas Caula" title="Full-Stack Developer" date={2023} />
      <Scrollbar />
    </div>
  );
}

export default App;
