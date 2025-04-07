import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Player from "./pages/Player";
import ProtectedRoute from "./routes/ProtectedRoute";
import ContentSelection from "./pages/ContentSelection";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/selection"
          element={
            <ProtectedRoute>
              <ContentSelection />
            </ProtectedRoute>
          }
        />
        <Route
          path="/stream"
          element={
            <ProtectedRoute>
              <Player />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}