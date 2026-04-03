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

const GlobalStructure = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Global Structure Interpretability</Title>

        <Subtitle>
          Understanding the geometry, disentanglement, invariance, and internal
          organization of full representation spaces.
        </Subtitle>

        <Section>
          <SectionTitle>Definition</SectionTitle>
          <Card>
            <Text>
              Global-structure interpretability focuses on the overall geometry
              of the representation space rather than on single neurons. The
              goal is to understand how information is organized across latent
              dimensions, whether factors are disentangled, and how
              transformations affect the full representation.
            </Text>
          </Card>
        </Section>

        <Section>
          <SectionTitle>Core Idea</SectionTitle>
          <Card>
            <Text>
              The paper argues that current evaluation of machine learning
              representations is incomplete because it relies too heavily on
              downstream task performance such as classification or retrieval.
            </Text>

            <Text>
              Two models may achieve similar downstream accuracy while having
              very different internal structures and behaviors. These
              differences remain invisible if evaluation only looks at task
              performance.
            </Text>

            <Text>
              To address this, the paper proposes a unified framework for
              representation evaluation based on four key axes:
            </Text>

            <ul>
              <li>Informativeness</li>
              <li>Equivariance</li>
              <li>Invariance</li>
              <li>Disentanglement</li>
            </ul>

            <Text>
              👉 Central claim: good downstream performance does not necessarily
              mean good internal representations.
            </Text>
          </Card>
        </Section>

        <Section>
          <SectionTitle>Key Contributions</SectionTitle>
          <Card>
            <ul>
              <li>
                <b>Critique of downstream probing</b>
                <br />
                Traditional probing only measures whether task-relevant
                information is available. It ignores structural properties of
                representations.
              </li>

              <li>
                <b>Holistic evaluation framework</b>
                <br />
                The paper defines four complementary evaluation axes with formal
                definitions and measurable metrics.
              </li>

              <li>
                <b>Standardized protocol</b>
                <br />
                It uses controlled transformations and factors of variation
                across different modalities.
              </li>

              <li>
                <b>Empirical validation</b>
                <br />
                It shows that models with similar task performance can behave
                very differently internally.
              </li>

              <li>
                <b>Evaluation toolkit</b>
                <br />
                The framework is supported by a software toolkit called
                <b> Synesis</b>.
              </li>
            </ul>
          </Card>
        </Section>

        <Section>
          <SectionTitle>The Four Evaluation Axes</SectionTitle>

          <Card>
            <Text>
              <b>1. Informativeness</b>
            </Text>
            <Text>
              Measures how much information about a factor of variation is
              encoded in the representation. This is close to traditional
              probing.
            </Text>
            <Text>
              Metric example: prediction accuracy or MSE.
            </Text>
            <Text>
              👉 It anchors understanding, but does not reveal structural
              organization.
            </Text>
          </Card>

          <Card>
            <Text>
              <b>2. Equivariance</b>
            </Text>
            <Text>
              Measures whether input transformations are preserved in latent
              space.
            </Text>
            <Code>E(T(x)) = T'(E(x))</Code>
            <Text>Two forms are considered:</Text>
            <ul>
              <li>P-Equivariance → predict transformation parameters</li>
              <li>R-Equivariance → predict transformed embeddings</li>
            </ul>
            <Text>
              👉 This captures how transformations are represented, not simply
              ignored.
            </Text>
          </Card>

          <Card>
            <Text>
              <b>3. Invariance</b>
            </Text>
            <Text>
              Measures the stability of representations under perturbations.
            </Text>
            <Code>Δ = ‖z - E(T(x))‖</Code>
            <Text>
              High invariance means the representation changes very little after
              transformation.
            </Text>
            <Text>
              👉 This reflects robustness at the representation level.
            </Text>
          </Card>

          <Card>
            <Text>
              <b>4. Disentanglement</b>
            </Text>
            <Text>
              Measures whether different factors are separated in latent space.
            </Text>
            <Text>Ideal case:</Text>
            <ul>
              <li>One latent dimension ↔ one factor</li>
              <li>Independent representations</li>
            </ul>
            <Text>
              👉 This is critical for interpretability, controllability, and
              generative applications.
            </Text>
          </Card>
        </Section>

        <Section>
          <SectionTitle>Methodology Overview</SectionTitle>
          <Card>
            <Text>
              The evaluation framework works as follows:
            </Text>

            <ol>
              <li>Extract embeddings using pretrained models</li>
              <li>
                Apply controlled transformations such as brightness, pitch, or
                noise
              </li>
              <li>
                Train simple probes to measure informativeness, equivariance,
                invariance, and disentanglement
              </li>
              <li>
                Compare how different architectures behave under the same
                protocol
              </li>
            </ol>
          </Card>
        </Section>

        <Section>
          <SectionTitle>Experimental Setup</SectionTitle>
          <Card>
            <Text>
              <b>Domains:</b>
            </Text>
            <ul>
              <li>Image (ImageNet)</li>
              <li>Speech (LibriSpeech)</li>
            </ul>

            <Text>
              <b>Factors of variation:</b>
            </Text>
            <ul>
              <li>Image → hue, saturation, brightness</li>
              <li>Speech → speech rate, pitch, noise</li>
            </ul>

            <Text>
              <b>Transformations:</b>
            </Text>
            <ul>
              <li>Images → hue shift, brightness, JPEG compression</li>
              <li>Speech → time stretch, pitch shift, noise, reverb</li>
            </ul>
          </Card>
        </Section>

        <Section>
          <SectionTitle>Key Findings</SectionTitle>
          <Card>
            <ul>
              <li>
                <b>Same downstream accuracy does not imply same internal
                structure</b>
              </li>
              <li>
                <b>Trade-offs exist between axes</b>, for example between
                informativeness and equivariance
              </li>
              <li>
                <b>Architecture matters</b>: contrastive, generative, and masked
                models behave differently
              </li>
              <li>
                <b>Disentanglement is asymmetric</b>: a model may disentangle A
                from B but not B from A
              </li>
              <li>
                <b>Invariance varies widely</b>: some models are much more
                robust to perturbations than others
              </li>
            </ul>
          </Card>
        </Section>

        <Section>
          <SectionTitle>Important Takeaways</SectionTitle>
          <Card>
            <ul>
              <li>
                <b>Downstream performance is not enough</b>
              </li>
              <li>
                <b>Representation quality is multi-dimensional</b>
              </li>
              <li>
                <b>Structural properties affect generalization, robustness,
                interpretability, and transferability</b>
              </li>
              <li>
                <b>No single best representation exists</b> because trade-offs
                exist between axes
              </li>
              <li>
                <b>Standardized evaluation frameworks are necessary</b> for
                progress in representation learning
              </li>
            </ul>
          </Card>
        </Section>

        <Section>
          <SectionTitle>Limitations</SectionTitle>
          <Card>
            <ul>
              <li>Uses simple controlled transformations</li>
              <li>Limited number of factors of variation</li>
              <li>Probe-based metrics may introduce bias</li>
              <li>Does not cover all possible representation properties</li>
            </ul>
          </Card>
        </Section>

        <Section>
          <SectionTitle>Future Directions</SectionTitle>
          <Card>
            <ul>
              <li>Evaluate more complex semantic transformations</li>
              <li>Expand to more domains</li>
              <li>Build richer datasets with annotated factors</li>
              <li>Improve understanding of latent geometry</li>
            </ul>
          </Card>
        </Section>

        <Section>
          <SectionTitle>One-Line Summary</SectionTitle>
          <Card>
            <Text>
              👉 Good performance does not guarantee a good representation — we
              must evaluate how models encode, transform, and separate
              information, not just what they can predict.
            </Text>
          </Card>
        </Section>

        <Section>
          <SectionTitle>Interpretability-Driven Disentanglement</SectionTitle>
          <Card>
            <Text>
              A second perspective on global structure asks how to learn
              interpretable disentangled representations without supervision.
            </Text>

            <Text>
              Traditional methods focus on informativeness and independence, but
              they often ignore interpretability itself. This creates ambiguity:
              many latent organizations may satisfy independence while still
              being difficult for humans to understand.
            </Text>

            <Text>
              👉 The authors propose using <b>interpretability as a learning
              signal</b>.
            </Text>
          </Card>
        </Section>

        <Section>
          <SectionTitle>Key Research Questions</SectionTitle>
          <Card>
            <ul>
              <li>
                <b>Where to interpret?</b>
                <br />
                Where in the image does a latent variable act?
              </li>
              <li>
                <b>What to interpret?</b>
                <br />
                What type of variation does the latent variable encode?
              </li>
            </ul>
          </Card>
        </Section>

        <Section>
          <SectionTitle>Proposed Solution</SectionTitle>

          <Card>
            <Text>
              <b>A. Spatial Constriction (SC)</b>
            </Text>
            <Text>
              A latent variable is interpretable if it affects a localized
              region in the image.
            </Text>
            <Text>Method:</Text>
            <ul>
              <li>Learn a spatial mask for each latent dimension</li>
              <li>Restrict its effect to a specific image region</li>
              <li>Implemented with adaptive normalization and learnable masks</li>
            </ul>
            <Text>
              Example: a latent variable controlling hair mainly affects the
              upper facial region.
            </Text>
          </Card>

          <Card>
            <Text>
              <b>B. Perceptual Simplicity (PS)</b>
            </Text>
            <Text>
              Interpretable features should correspond to simple, isolated
              variations.
            </Text>
            <Text>Method:</Text>
            <ul>
              <li>Perturb one latent dimension at a time</li>
              <li>Train a recognizer to detect this change</li>
              <li>Penalize complex or entangled variations</li>
            </ul>
            <Text>
              This encourages each latent dimension to encode a simple and
              distinct concept.
            </Text>
          </Card>

          <Card>
            <Text>
              <b>C. Traversal Perceptual Length (TPL)</b>
            </Text>
            <Text>
              A model-selection metric for disentanglement without labels.
            </Text>
            <Text>
              It measures how much perceptual change occurs when moving along
              latent axes.
            </Text>
            <Text>
              Interpretable axes produce smooth, controlled changes, while
              entangled directions create complex changes.
            </Text>
          </Card>
        </Section>

        <Section>
          <SectionTitle>Architecture</SectionTitle>
          <Card>
            <Text>
              The full model combines:
            </Text>
            <ul>
              <li>GAN-based generator</li>
              <li>Latent code + noise</li>
              <li>Spatial Constriction module</li>
              <li>Perceptual Simplicity loss</li>
            </ul>

            <Text>
              The system generates images, perturbs latent codes, and enforces
              interpretability through masking and reconstruction.
            </Text>
          </Card>
        </Section>

        <Section>
          <SectionTitle>Experimental Results</SectionTitle>
          <Card>
            <Text>
              <b>Datasets:</b>
            </Text>
            <ul>
              <li>CelebA, FFHQ</li>
              <li>Shoes, CLEVR</li>
              <li>DSprites, 3DShapes</li>
            </ul>

            <Text>
              <b>Main findings:</b>
            </Text>
            <ul>
              <li>Better disentanglement than baselines</li>
              <li>Improved interpretability of latent dimensions</li>
              <li>Strong unsupervised model selection using TPL</li>
              <li>Supports controllable image editing and attribute transfer</li>
            </ul>
          </Card>
        </Section>

        <Section>
          <SectionTitle>Ablation Studies</SectionTitle>
          <Card>
            <ul>
              <li>PS loss alone improves disentanglement</li>
              <li>SC alone improves localization</li>
              <li>Combined, they give the best results</li>
            </ul>

            <Text>
              A trade-off appears: a slight drop in image smoothness, but a
              stronger gain in interpretability.
            </Text>
          </Card>
        </Section>

        <Section>
          <SectionTitle>Key Insights</SectionTitle>
          <Card>
            <ul>
              <li>
                <b>Interpretability is not the same as independence</b>
              </li>
              <li>
                <b>Human bias helps</b>: simplicity and locality matter
              </li>
              <li>
                <b>Disentanglement needs structure</b>, not just constraints on
                independence
              </li>
              <li>
                <b>Perceptual metrics matter</b> for unsupervised learning
              </li>
            </ul>
          </Card>
        </Section>

        <Section>
          <SectionTitle>Final Takeaway</SectionTitle>
          <Card>
            <Text>
              👉 To achieve meaningful disentanglement without labels, models
              must be biased toward human-like interpretability by favoring
              simple and localized representations.
            </Text>
          </Card>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default GlobalStructure;