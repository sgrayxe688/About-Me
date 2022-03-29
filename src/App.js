import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Home></Home>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
