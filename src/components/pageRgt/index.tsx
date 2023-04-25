import { Container } from "./styles";

import { Warning } from "phosphor-react";

export function PageRgt() {
  return (
    <Container>
      <span>
        <Warning size={70} color="#EE4DC6" />
      </span>

      <h1>Em construção</h1>
      <div>
        Prezados visitantes, gostaria de informar que este site encontra-se
        atualmente em construção. Estou trabalhando arduamente para criar uma
        experiência de navegação agradável e funcional para vocês. Por favor,
        fique atento, em breve terá novidades e atualizações. Obrigado pela
        visita e volte em breve para conferir as novidades!
      </div>

      <button>
        <a href="https://portfolio-pedrobibiano.netlify.app/">
          Voltar para pagina Home
        </a>{" "}
      </button>
    </Container>
  );
}
