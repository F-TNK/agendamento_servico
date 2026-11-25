"use client";

import { useState } from "react";
import style from "@/components/CardServico/CardServico.module.css";

export default function CardServico({ servico, categoria }) {
  return (
    <li>
      <label>
        <ul className={style.servCard}>
          <li className={style.servItens}>
            <h3 className={style}>{servico.nome}</h3>
          </li>
          <li>
            <span>Preço: R${servico.preco}</span>
          </li>
          <li>
            <span>Duração: {servico.duracaoMin} min</span>
          </li>
          <li>
            <span>Categoria: {categoria.nome}</span>
          </li>
        </ul>
      </label>
    </li>
  );
}
