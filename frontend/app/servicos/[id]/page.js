// detalhes

import style from "./page.module.css";
import { useState } from "react";
import { SERVICOS, CATEGORIAS } from "@/dados/exemplo.js";

export default function detalhesServico() {
  const [servico, setServico] = useState(servico.id);
  const [categoria, setCategoria] = useState(servico.categoriaId);

  return (
    <div>
      <h3 className={style.servName}>{servico.nome}</h3>
      <p>Preço: R${servico.preco.toFixed(2).replace(".", ",")}</p>
      <p>Duração: {servico.duracaoMin} min</p>
      <p>Categoria: {categoria}</p>
    </div>
  );
}
