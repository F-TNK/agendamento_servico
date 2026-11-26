// lista de serviços com o filtro
"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import ListaServicos from "@/components/ListaServicos/ListaServicos";
import Filtro from "@/components/Filtro/Filtro";
import { CATEGORIAS, SERVICOS } from "@/dados/exemplo";

export default function Home() {
  const [categoriaId, setCategoriaId] = useState("");

  const filtrados = categoriaId
    ? SERVICOS.filter((s) => String(s.categoriaId) === String(categoriaId))
    : SERVICOS;

  return (
    <>
      <Cabecalho titulo="Serviços" subtitulo="" />
      <main>
        <Filtro
          categorias={CATEGORIAS}
          selecionada={categoriaId}
          selecionar={setCategoriaId}
        />

        <div>
          <ListaServicos servicos={filtrados} categorias={CATEGORIAS} />
        </div>
      </main>
    </>
  );
}
