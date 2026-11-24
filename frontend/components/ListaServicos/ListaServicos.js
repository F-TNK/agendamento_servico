import { useState } from "react";
import { SERVICOS } from "@/dados/exemplo.js";
import { CardServico } from "./CardServico/CardServico.js";

export default function listaServico() {
  const [tarefas, satTarefas] = useState(SERVICOS);

  return <ul></ul>;
}
