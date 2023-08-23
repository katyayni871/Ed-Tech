import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={Home} />
      </Routes>
    </div>
  );
};

export default App;
