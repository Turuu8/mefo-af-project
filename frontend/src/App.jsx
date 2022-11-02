import React from "react";
import { Home, Payment } from "./pages"
import { AnimatePresence } from "framer-motion";
import { PageRender } from "./custom/PageRender";
import { Header } from "./components/layouts/Header";
import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  return (
    <div>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/:page" element={<PageRender />} />
          <Route path="/:page/:id" element={<PageRender />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
