import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CardProduto = ({ nome, id, imagem}) => {

  

  return (
    <Link to={`${id}`} className={`flex flex-col gap-1`}>
      <img src={imagem} className="w-60 rounded-xl" />
      <p className="pl-4 text-xl font-serif font-bold">{nome}</p>
    </Link>
  );
};

export default CardProduto;
