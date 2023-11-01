import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import SetAvatar from "./pages/SetAvatar";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Frontend-Chatapp/register" element={<Register />} />
          <Route path="/Frontend-Chatapp/login" element={<Login />} />
          <Route path="/Frontend-Chatapp/setAvatar" element={<SetAvatar />} />
          <Route path="/Frontend-Chatapp/" element={<Chat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
