import React, { useEffect, useState } from "react";
import { animated, useSpring, useTrail } from "react-spring";
import CardProduto from "./CardProduto";

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const animation = useSpring({
    delay: 200,
    from: { opacity: 0, transform: "translateX(-200px)" },
    to: { opacity: 1, transform: "translateX(0px)" },
  });

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((data) => setProdutos(data));
  }, []);

  if (produtos.length === 0) return <p>Carregando...</p>;
  return (
    <div
      className="transition flex gap-x-8 gap-y-8 flex-wrap"
      style={animation}
    >
      {produtos.length > 0 &&
        produtos.map((produto, index) => (
          <animated.div key={`produto-${index}`} style={animation}>
            <CardProduto
              nome={produto.nome}
              imagem={produto.fotos[0].src}
              id={produto.id}
            />
          </animated.div>
        ))}
    </div>
  );
};

export default Produtos;
