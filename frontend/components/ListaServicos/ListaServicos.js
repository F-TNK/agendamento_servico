"use client";

import style from "@/components/ListaServicos/ListaServicos.module.css";
import { useState } from "react";
import { SERVICOS, CATEGORIAS } from "@/dados/exemplo.js";
import CardServico from "@/components/CardServico/CardServico";

export default function ListaServico() {
  const [servicos, setServicos] = useState(SERVICOS);
  const [filtro, setFiltro] = useState("todas");

  return (
    <ul className={style.servList}>
      {servicos.map((servico) => {
        const categoria = CATEGORIAS.find((c) => c.id === servico.categoriaId);

        return (
          <CardServico
            key={servico.id}
            servico={servico}
            categoria={categoria ? categoria.nome : "Sem"}
          />
        );
      })}
    </ul>
  );
}
