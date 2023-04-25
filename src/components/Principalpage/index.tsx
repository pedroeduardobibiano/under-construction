import { PageLft } from "../pageLft";
import { PageRgt } from "../pageRgt";
import { PrincipalContainer } from "./styles";

export function Principal() {
  return (
    <PrincipalContainer>
      <PageRgt />
      <PageLft />
    </PrincipalContainer>
  );
}
