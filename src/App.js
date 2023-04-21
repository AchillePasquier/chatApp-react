import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";

import "./App.css";
import "./index.css";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Messenger from "./pages/Messenger";

// import Header from "./components/Header";
// import Footer from "./components/Footer";

function App() {
  const [userId, setUserId] = useState(Cookies.get("userId") || null); //cette expression renvoie la valeur du cookie s'il existe

  const handleId = (Id) => {
    if (Id) {
      Cookies.set("userId", Id, { expires: 7 });
      setUserId(Id);
    } else {
      Cookies.remove("userId");
      setUserId(null);
    }
  };

  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route
          path="/"
          element={
            userId ? (
              <Home userId={userId} handleId={handleId} />
            ) : (
              <Login handleId={handleId} />
            )
          }
        />
        <Route
          path="/messenger"
          element={
            userId ? (
              <Messenger userId={userId} handleId={handleId} />
            ) : (
              <Login handleId={handleId} />
            )
          }
        />
        <Route path="/signup" element={<Signup handleId={handleId} />} />
        <Route path="/login" element={<Login handleId={handleId} />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
