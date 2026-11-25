"use client";

import { useState } from "react";
import { SERVICOS } from "@/dados/exemplo.js";
import { CATEGORIAS } from "@/dados/exemplo.js";
import CardServico from "@/components/CardServico/CardServico";

export default function ListaServico() {
  const [servicos, setServicos] = useState(SERVICOS);

  // const categoria = CATEGORIAS.find((c) => c.id === servico.categoriaId);

  return (
    <ul>
      {servicos.map((servico) => (
        <CardServico key={servico.id} servico={servico} />
      ))}
    </ul>
  );
}
