"use client";

import { useState } from "react";
import style from "@/components/CardServico/CardServico.module.css";

export default function CardServico({ servico, categoria }) {
  return (
    <li>
      <label>
        <ul className="servList">
          <li className="servItens">
            <h3>
              <span className="servName">{servico.nome}</span>
            </h3>
          </li>
          <li>
            <span>Preço: R${servico.preco}</span>
          </li>
          <li>
            <span>Duração: {servico.duracaoMin} min</span>
          </li>
          {/* <li>
            <span>Caegoria: {categoria.nome} min</span>
          </li> */}
        </ul>
      </label>
    </li>
  );
}
