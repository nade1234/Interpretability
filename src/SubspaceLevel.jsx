import React from "react";
import {
  Container,
  Wrapper,
  Title,
  Subtitle,
  Section,
  SectionTitle,
  Text,
  Card,
} from "./Article1/ArticleStyle";

const SubspaceLevel = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Subspace Level Interpretability</Title>

        <Subtitle>
          Understanding concepts represented by directions or subspaces in learned representations.
        </Subtitle>

        <Section>
          <SectionTitle>Definition</SectionTitle>
          <Card>
            <Text>
              Subspace-level interpretability studies whether concepts are represented
              not by a single neuron, but by directions or groups of features inside
              the representation space.
            </Text>
          </Card>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default SubspaceLevel;