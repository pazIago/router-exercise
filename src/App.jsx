import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Router } from "react-router-dom";
import Contato from "./components/Contato";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Produto from "./components/Produto";
import Produtos from "./components/Produtos";

function App() {

  

  return (
    
    <BrowserRouter>
      <div className="max-w-[1100px] w-4/5 mx-auto px-4">
        <Header className="mt-4" />
        <Routes>
          <Route path="/" element={<Produtos />}></Route>
          <Route path=":id/*" element={<Produto />}></Route>
          <Route path="contato" element={<Contato />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
