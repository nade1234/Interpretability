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
  Code,
} from "./Article1/ArticleStyle";

const LocalLevel = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Local Level Interpretability</Title>

        <Subtitle>
          Understanding what individual neurons represent inside deep neural networks.
        </Subtitle>

        {/* DEFINITION */}
        <Section>
          <SectionTitle>Definition</SectionTitle>
          <Card>
            <Text>
              Local-level interpretability focuses on individual units inside a
              model. The goal is to understand whether a specific neuron or
              feature corresponds to a human-understandable concept such as an
              object, a texture, or a semantic part.
            </Text>
          </Card>
        </Section>

        {/* CORE IDEA */}
        <Section>
          <SectionTitle>Core Question</SectionTitle>
          <Card>
            <Text>
              👉 <b>“What does one neuron do?”</b>
            </Text>
          </Card>
        </Section>

        {/* METHODS */}
        <Section>
          <SectionTitle>Methods & Techniques</SectionTitle>

          <Card>
            <ul>
              <li>
                <b>Activation Maximization</b>
                <br />
                Generate inputs that strongly activate a neuron to visualize what
                it detects.
              </li>

              <li>
                <b>Neuron-Level Probing</b>
                <br />
                Test whether a neuron correlates with a specific concept.
              </li>

              <li>
                <b>Mechanistic Interpretability</b>
                <br />
                Analyze internal computations and circuits inside the network.
              </li>

              <li>
                <b>Sparse Autoencoders (SAE)</b>
                <br />
                Decompose representations into more interpretable features.
              </li>
            </ul>
          </Card>
        </Section>

        {/* NETWORK DISSECTION */}
        <Section>
          <SectionTitle>Network Dissection</SectionTitle>

          <Card>
            <Text>
              This work explores feature interpretability at the local level by
              analyzing individual neurons within convolutional neural networks.
            </Text>

            <Text>
              It introduces <b>Network Dissection</b>, a framework that measures
              how well neurons align with human concepts such as objects,
              textures, colors, and parts.
            </Text>

            <Text>
              Each neuron is evaluated using segmentation accuracy with:
            </Text>

            <Code>IoU = overlap / union</Code>
          </Card>
        </Section>

        {/* KEY RESULT */}
        <Section>
          <SectionTitle>Key Insight</SectionTitle>

          <Card>
            <Text>
              Many neurons correspond to distinct semantic concepts, suggesting
              that deep networks learn partially disentangled representations.
            </Text>

            <Text>
              However, interpretability is NOT guaranteed by accuracy.
              Rotating the feature space keeps performance but destroys
              interpretability.
            </Text>

            <Text>
              👉 Interpretability is a <b>separate property</b> from performance.
            </Text>
          </Card>
        </Section>

        {/* PAPER LINK */}
        <Section>
          <SectionTitle>Read the Original Paper</SectionTitle>

          <Card>
            <a href="/papers/network-dissection.pdf" style={styles.button}>
              Open Paper →
            </a>
          </Card>
        </Section>
      </Wrapper>
    </Container>
  );
};

const styles = {
  button: {
    display: "inline-block",
    marginTop: "12px",
    padding: "12px 22px",
    background: "#3b82f6",
    color: "white",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "600",
  },
};

export default LocalLevel;