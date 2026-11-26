"use client";

import style from "@/components/ListaServicos/ListaServicos.module.css";
import { useState } from "react";
import { SERVICOS, CATEGORIAS } from "@/dados/exemplo.js";
import CardServico from "@/components/CardServico/CardServico";

export default function ListaServicos({ servicos, categorias }) {
  if (servicos.length === 0) {
    return <p>Nenhum serviço encontrado nessa categoria.</p>;
  }

  return (
    <ul className={style.servList}>
      {servicos.map((servico) => {
        const categoria = categorias.find((c) => c.id === servico.categoriaId);

        return (
          <CardServico
            key={servico.id}
            servico={servico}
            categoria={categoria ? categoria.nome : "Sem categoria"}
          />
        );
      })}
    </ul>
  );
}
