// lista de serviços com o filtro

import Image from "next/image";
import styles from "./page.module.css";
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import ListaServico from "@/components/ListaServicos/ListaServicos";
import { CATEGORIAS, SERVICOS } from "@/dados/exemplo";

export default function Home() {
  return (
    <>
      <Cabecalho titulo="Serviços" subtitulo="" />
      <main>
        <div>
          <ListaServico />
        </div>
      </main>
    </>
  );
}
