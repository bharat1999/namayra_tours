import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Activity from "./pages/Activity";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/activity/:activityID" element={<Activity />} />
    </Routes>
  );
}

export default App;
