"use client";

import { useState } from "react";
import style from "@/components/CardServico/CardServico.module.css";

export default function CardServico({ servico, categoria }) {
  return (
    <li className={style.servCard}>
      <h3 className={style.servName}>{servico.nome}</h3>
      <p>Preço: R${servico.preco.toFixed(2).replace(".", ",")}</p>
      <p>Duração: {servico.duracaoMin} min</p>
      <p>Categoria: {categoria}</p>
    </li>
  );
}
