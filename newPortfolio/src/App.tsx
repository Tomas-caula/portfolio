/** @format */

import Header from "./components/Header/Header";
import Scrollbar from "./components/Scrollbar/Scrollbar";
import { useEffect } from "react";
import styles from "./index.css";

function App() {
  return (
    <div className="main-container">
      <Header name="Tomas Caula" title="Full-Stack Developer" date={2023} />
      <Scrollbar />
    </div>
  );
}

export default App;
