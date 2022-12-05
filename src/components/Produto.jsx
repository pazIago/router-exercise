import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const Produto = () => {
  const params = useParams();
  const [produto, setProduto] = useState([]);
  const animation = useSpring({
    from: { opacity: 0, transform: "translateX(-200px)" },
    to: { opacity: 1, transform: "translateX(0px)" },
  });

  useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
      .then((response) => response.json())
      .then((data) => setProduto(data));
  }, []);

  if (produto.length === 0) return <p>Carregando...</p>;
  return (
    <animated.div className="flex gap-5" style={animation}>
      <img
        className="w-2/5 rounded-2xl bg-cover  "
        src={produto.fotos[0].src}
      />
      <div className="space-y-2">
        <p className="font-bold text-2xl">{produto.nome}</p>
        <p className="bg-green-700 inline-block text-white font-medium text-lg px-4 py-2 rounded-xl ">
          R$ {produto.preco}
        </p>
        <p className="font-medium max-w-xs">{produto.descricao}</p>
      </div>
    </animated.div>
  );
};

export default Produto;
