"use client";

import style from "./Filtro.module.css";
import { useState } from "react";

export default function Filtro({ CATEGORIAS, selecionada, selecionar }) {
  return (
    <div className={style.filtro}>
      <label className={style.label}>Categorias </label>

      <select
        id="filtro"
        className={style.categorias}
        value={selecionada}
        onChange={(e) => selecionar(e.target.value)}
      >
        <option value="">Todas</option>
        {CATEGORIAS.map((categoria) => (
          <option key={categoria.id} value={categoria.id}>
            {categoria.nome}
          </option>
        ))}
      </select>
    </div>
  );
}
