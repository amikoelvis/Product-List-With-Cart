import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import ConfirmOrder from "./components/ConfirmOrder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="" element={<ConfirmOrder />} />
      </Routes>
    </Router>
  );
}

export default App;