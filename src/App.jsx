import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Update from "./pages/Update";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
        </Routes>
      </Router>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
