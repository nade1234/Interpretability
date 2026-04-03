import React from "react";

const projects = [
  {
    number: "01",
    title: "Logistic regression & decision tree",
    category: "INTRINSIC INTERPRETABILITY",
    categoryColor: "#7c6fcd",
    numberBg: "#ede9ff",
    numberColor: "#7c6fcd",
    description:
      "Used logistic regression and a decision tree to clearly trace how input features influence outcomes. Logistic regression provides interpretable weights showing direction and strength of each feature's impact, while the decision tree reveals step-by-step decision rules making it possible to build trust and understand model behavior without any post-hoc tools.",
    tags: ["Logistic regression", "Decision tree", "Feature weights", "Decision rules"],
    link: "https://colab.research.google.com/drive/1xTsGL1TnDsQCIoBMXm6j1mBtPFrXkYb0?usp=sharing",
  },
  {
    number: "02",
    title: "Random forest + SHAP on Titanic",
    category: "POST-HOC INTERPRETABILITY",
    categoryColor: "#2bb09a",
    numberBg: "#e0f5f2",
    numberColor: "#2bb09a",
    description:
      "Applied SHAP to explain a Random Forest model's predictions on the Titanic dataset. SHAP revealed the most influential features globally and explained individual predictions by showing each feature's contribution to the final outcome.",
    tags: ["Random forest", "SHAP", "Titanic dataset", "Feature importance"],
    link: "https://colab.research.google.com/drive/1rEViARFf3-7Z8ZKE3AR93e1qhgWY1AWx?usp=sharing",
  },
  {
    number: "03",
    title: "Activation patching experiment",
    category: "MECHANISTIC INTERPRETABILITY",
    categoryColor: "#e07b3a",
    numberBg: "#fef0e6",
    numberColor: "#e07b3a",
    description:
      "Performed a simple activation patching experiment by modifying the gender feature of a sample and observing changes in neuron activations. Results showed several neurons responded significantly, indicating the model encodes gender information across multiple neurons — demonstrating distributed representations in neural networks.",
    tags: ["Activation patching", "Neuron analysis", "Gender feature", "Distributed representations"],
    link: "https://colab.research.google.com/drive/1LzTFisQ8WW-DIb25MhDKB8MmOXo6mX2m?usp=sharing",
  },
  {
    number: "04",
    title: "Representation learning & latent space",
    category: "LATENT SPACE ANALYSIS",
    categoryColor: "#d64f8a",
    numberBg: "#fce8f3",
    numberColor: "#d64f8a",
    description:
      "Trained an autoencoder on face images to learn a compact latent space, then analyzed whether the concept of smiling is linearly encoded within it. By training a logistic regression to find a smile direction and modifying latent vectors along it, smooth face transformations were achieved — demonstrating interpretable structure inside the model.",
    tags: ["Autoencoder", "Latent space", "Smile direction", "Linear probing"],
    link: "https://colab.research.google.com/drive/1uudyGVtB_20lmP6rDU1pA5S-DmxWOooW?usp=sharing",
  },
];

const Article3 = () => {
  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.eyebrow}>HANDS-ON WORK</span>
          <h1 style={styles.title}>Mini projects in interpretability</h1>
          <p style={styles.subtitle}>
            Four practical experiments applying interpretability techniques from
            simple transparent models to mechanistic neuron analysis.
          </p>
          <hr style={styles.divider} />
        </div>

        {/* Projects */}
        <div>
          <p style={styles.sectionLabel}>PROJECTS</p>
          <div style={styles.projectList}>
            {projects.map((project) => (
              <div key={project.number} style={styles.card}>
                {/* Card header row */}
                <div style={styles.cardHeader}>
                  <span
                    style={{
                      ...styles.numberBadge,
                      background: project.numberBg,
                      color: project.numberColor,
                    }}
                  >
                    {project.number}
                  </span>
                  <div>
                    <h3 style={styles.cardTitle}>{project.title}</h3>
                    <span
                      style={{
                        ...styles.categoryLabel,
                        color: project.categoryColor,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p style={styles.description}>{project.description}</p>

                {/* Tags */}
                <div style={styles.tagRow}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.button}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#f0ecff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ marginRight: "6px" }}
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Open in Colab
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: "#fcfbff",
    minHeight: "100vh",
    fontFamily: "'Georgia', 'Times New Roman', serif",
    padding: "60px 20px",
  },
  wrapper: {
    maxWidth: "760px",
    margin: "0 auto",
  },
  header: {
    marginBottom: "36px",
  },
  eyebrow: {
    fontSize: "11px",
    letterSpacing: "2px",
    fontWeight: "600",
    color: "#9b96d4",
    fontFamily: "'Arial', sans-serif",
    textTransform: "uppercase",
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#1a1a2e",
    margin: "10px 0 14px",
    fontFamily: "'Georgia', serif",
    lineHeight: "1.2",
  },
  subtitle: {
    fontSize: "15px",
    color: "#555",
    lineHeight: "1.65",
    margin: "0 0 28px",
    fontFamily: "'Arial', sans-serif",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #e5e1f8",
    margin: "0",
  },
  sectionLabel: {
    fontSize: "11px",
    letterSpacing: "2px",
    fontWeight: "600",
    color: "#9b96d4",
    fontFamily: "'Arial', sans-serif",
    textTransform: "uppercase",
    marginBottom: "16px",
    marginTop: "28px",
  },
  projectList: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  card: {
    background: "#ffffff",
    border: "1px solid #ece8fb",
    borderRadius: "12px",
    padding: "22px 24px",
    boxShadow: "0 1px 4px rgba(120,100,220,0.06)",
  },
  cardHeader: {
    display: "flex",
    alignItems: "flex-start",
    gap: "14px",
    marginBottom: "14px",
  },
  numberBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: "700",
    flexShrink: 0,
    fontFamily: "'Arial', sans-serif",
    marginTop: "2px",
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#1a1a2e",
    margin: "0 0 4px",
    fontFamily: "'Georgia', serif",
    lineHeight: "1.3",
  },
  categoryLabel: {
    fontSize: "10.5px",
    letterSpacing: "1.2px",
    fontWeight: "700",
    textTransform: "uppercase",
    fontFamily: "'Arial', sans-serif",
  },
  description: {
    fontSize: "14px",
    color: "#444",
    lineHeight: "1.7",
    margin: "0 0 14px",
    fontFamily: "'Arial', sans-serif",
  },
  tagRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "7px",
    marginBottom: "16px",
  },
  tag: {
    fontSize: "12px",
    color: "#555",
    background: "#f4f2fc",
    border: "1px solid #e5e0f8",
    borderRadius: "20px",
    padding: "3px 11px",
    fontFamily: "'Arial', sans-serif",
  },
  button: {
    display: "inline-flex",
    alignItems: "center",
    fontSize: "13px",
    color: "#5b4cf0",
    fontWeight: "600",
    border: "1px solid #d5cff5",
    borderRadius: "8px",
    padding: "7px 14px",
    textDecoration: "none",
    background: "transparent",
    cursor: "pointer",
    transition: "background 0.15s",
    fontFamily: "'Arial', sans-serif",
  },
};

export default Article3;