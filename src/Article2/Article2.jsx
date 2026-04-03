import React, { useEffect } from "react";
const Section = ({ children }) => <div>{children}</div>;
const SectionTitle = ({ children }) => <h3>{children}</h3>;

const Article2 = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js";
    script.async = true;
    script.onload = () => {
      const tc = "rgba(0,0,0,0.35)";
      const lc = "rgba(0,0,0,0.55)";
      const gc = "rgba(0,0,0,0.06)";

      const radarCanvas = document.getElementById("radarChart");
      if (radarCanvas && window.Chart) {
        new window.Chart(radarCanvas, {
          type: "radar",
          data: {
            labels: [
              "Feature-level\nAnalysis",
              "Mechanistic\nInterpretability",
              "Attention\nAnalysis",
              "Probing",
              "Disentanglement",
            ],
            datasets: [
              {
                label: "Depth of Understanding",
                data: [72, 90, 65, 78, 60],
                backgroundColor: "rgba(127,119,221,0.15)",
                borderColor: "#7F77DD",
                borderWidth: 2,
                pointBackgroundColor: "#7F77DD",
                pointRadius: 4,
              },
              {
                label: "Practical Adoption",
                data: [85, 55, 88, 70, 50],
                backgroundColor: "rgba(29,158,117,0.12)",
                borderColor: "#1D9E75",
                borderWidth: 2,
                pointBackgroundColor: "#1D9E75",
                pointRadius: 4,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: { callbacks: { label: (c) => " " + c.dataset.label + ": " + c.raw + "/100" } },
            },
            scales: {
              r: {
                min: 0,
                max: 100,
                ticks: { stepSize: 25, color: tc, font: { size: 10 }, backdropColor: "transparent" },
                grid: { color: gc },
                angleLines: { color: gc },
                pointLabels: { color: lc, font: { size: 11 } },
              },
            },
          },
        });
      }

      const barCanvas = document.getElementById("importanceChart");
      if (barCanvas && window.Chart) {
        new window.Chart(barCanvas, {
          type: "bar",
          data: {
            labels: [
              "Understanding learned concepts",
              "Debugging internal failures",
              "Studying hidden features",
              "Analyzing disentanglement",
              "Building transparent models",
            ],
            datasets: [
              {
                data: [88, 82, 75, 70, 92],
                backgroundColor: [
                  "#7F77DD", "#7F77DD",
                  "#1D9E75", "#1D9E75", "#1D9E75",
                ],
                borderRadius: 6,
                borderSkipped: false,
              },
            ],
          },
          options: {
            indexAxis: "y",
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: { callbacks: { label: (c) => "  Importance: " + c.raw + "/100" } },
            },
            scales: {
              x: {
                max: 100,
                grid: { color: gc },
                border: { display: false },
                ticks: { color: tc, font: { size: 11 } },
              },
              y: {
                grid: { display: false },
                border: { display: false },
                ticks: { color: lc, font: { size: 12 } },
              },
            },
          },
        });
      }
    };
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <div style={s.pg}>

      {/* Hero */}
      <div style={s.kicker}>Representation learning</div>
      <h1 style={s.h1}>Representation interpretability</h1>
      <p style={s.sub}>
        Focusing on internal knowledge what features the model learns, what hidden layers
        represent, and how learned representations connect to meaningful concepts.
      </p>

      {/* Definition */}
      <div style={s.secHd}>Definition</div>
      <div style={s.callout}>
        <p style={s.calloutP}>
          Interpretability in representation learning is about understanding what learned features encode,
          how they support downstream behavior, and whether humans can meaningfully relate them to{" "}
          <b style={s.calloutB}>concepts in the world</b>.
        </p>
      </div>

      <hr style={s.divider} />

      {/* Taxonomy */}
      <Section>
  <SectionTitle>Interpretability Structure</SectionTitle>

  <div style={tree2.container}>
  
  <div style={tree2.root}>INTERPRETABILITY IN ML</div>

  <div style={tree2.line}></div>

  {/* Level 1 */}
  <div style={tree2.row}>
  <div style={tree2.boxIntrinsic}>Intrinsic</div>
  <div style={tree2.boxPostHoc}>Post-hoc</div>
</div>

  <div style={tree2.line}></div>

  <div style={tree2.columns}>

  {/* LEFT: Intrinsic */}
  <div style={tree2.col}>
    <div style={tree2.subBoxIntrinsic}>
      Linear models<br />Trees
    </div>
  </div>

  {/* RIGHT: Post-hoc */}
  <div style={tree2.col}>

    {/* Input-output */}
    <div style={tree2.boxInputOutput}>
      Input–Output
      <p style={tree2.sub}>(prediction-focused)</p>
    </div>

    <div style={tree2.row}>
      <div style={tree2.smallBoxPostHoc}>Attribution (SHAP, LIME)</div>
      <div style={tree2.smallBoxPostHoc}>Concept-based (TCAV)</div>
      <div style={tree2.smallBoxPostHoc}>Example-based</div>
    </div>

    {/* Representation */}
    <div style={tree2.boxRepresentation}>
      Representation
      <p style={tree2.sub}>(internal-focused)</p>
    </div>

    <div style={tree2.group}>
      <div style={tree2.groupCardRepresentation}>
        <div style={tree2.groupTitleRepresentation}>Probing</div>
        <div style={tree2.groupItemsRepresentation}>
          <span>Linear probing</span>
          <span>TCAV (repr)</span>
          <span>Causal probing</span>
        </div>
      </div>

      <div style={tree2.groupCardRepresentation}>
        <div style={tree2.groupTitleRepresentation}>Visualization</div>
        <div style={tree2.groupItemsRepresentation}>
          <span>t-SNE / UMAP</span>
          <span>Activation maximization</span>
          <span>Saliency maps</span>
        </div>
      </div>

      <div style={tree2.groupCardRepresentationHighlight}>
        <div style={tree2.groupTitleRepresentation}>Mechanistic</div>
        <div style={tree2.groupItemsRepresentation}>
          <span>Sparse autoencoders</span>
          <span>Circuit analysis</span>
          <span>Activation patching</span>
        </div>
      </div>
    </div>

  </div>
</div>

      

</div>
</Section>


      <hr style={s.divider} />

      {/* Radar chart */}
      <div style={s.secHd}>Method comparison</div>
      <div style={s.leg}>
        <span><span style={{ ...s.ld, background: "#7F77DD" }} />Depth of understanding</span>
        <span><span style={{ ...s.ld, background: "#1D9E75" }} />Practical adoption</span>
      </div>
      <div style={{ position: "relative", width: "100%", height: "320px", marginBottom: "1rem" }}>
        <canvas id="radarChart" />
      </div>

      <hr style={s.divider} />

      

      <hr style={s.divider} />

      {/* Bridge methods detail */}
      <div style={s.secHd}>Bridge methods explained</div>
      <div style={s.rowList}>
        <div style={s.rowItem}>
          <div style={{ ...s.rowIcon, background: "#EEEDFE", color: "#534AB7" }}>A</div>
          <div>
            <div style={s.rowTitle}>Attention analysis</div>
            <div style={s.rowDesc}>
              Identifies where the model focuses and how internal representations link back to inputs
            </div>
          </div>
        </div>
        <div style={s.rowItem}>
          <div style={{ ...s.rowIcon, background: "#E1F5EE", color: "#0F6E56" }}>P</div>
          <div>
            <div style={s.rowTitle}>Probing</div>
            <div style={s.rowDesc}>
              Tests whether specific information (syntax, semantics, world knowledge) is encoded
              in hidden representations
            </div>
          </div>
        </div>
        <div style={s.rowItem}>
          <div style={{ ...s.rowIcon, background: "#FAECE7", color: "#993C1D" }}>D</div>
          <div>
            <div style={s.rowTitle}>Disentanglement</div>
            <div style={s.rowDesc}>
              Studies whether different generative factors are separated cleanly inside latent space
            </div>
          </div>
        </div>
      </div>

      <hr style={s.divider} />

      {/* Conclusion callout */}
      <div style={s.secHd}>Conclusion</div>
      <div style={{ ...s.callout, borderLeftColor: "#1D9E75" }}>
        <p style={{ ...s.calloutP, color: "#085041" }}>
          Representation interpretability studies the <b style={{ color: "#04342C" }}>internal meaning</b> of learned features.
          Instead of only explaining outputs, it asks how models build, organize, and use knowledge
          inside their hidden layers making it essential for truly understanding modern AI systems.
        </p>
      </div>

    </div>
  );
};

/* ── Styles ── */
const s = {
  pg: {
    maxWidth: "680px",
    margin: "0 auto",
    padding: "2.5rem 2rem",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    background: "#ffffff",
  },
  kicker: {
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: ".08em",
    textTransform: "uppercase",
    color: "#AFA9EC",
    marginBottom: ".75rem",
  },
  h1: {
    fontSize: "26px",
    fontWeight: 500,
    lineHeight: 1.3,
    color: "#1c1b2e",
    marginBottom: ".75rem",
  },
  sub: {
    fontSize: "15px",
    color: "#6b6a7a",
    lineHeight: 1.7,
    paddingBottom: "1.75rem",
    borderBottom: "1px solid #f0eef8",
    marginBottom: "1.75rem",
    margin: 0,
  },
  secHd: {
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: ".07em",
    textTransform: "uppercase",
    color: "#AFA9EC",
    marginBottom: "1rem",
    marginTop: "0",
  },
  callout: {
    background: "#EEEDFE",
    borderLeft: "3px solid #7F77DD",
    borderRadius: "0 10px 10px 0",
    padding: "1rem 1.25rem",
    marginBottom: "1.25rem",
  },
  calloutP: {
    fontSize: "14px",
    color: "#3C3489",
    lineHeight: 1.65,
    margin: 0,
  },
  calloutB: { color: "#26215C" },
  divider: {
    border: "none",
    borderTop: "1px solid #f0eef8",
    margin: "1.75rem 0",
  },
  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    marginBottom: "10px",
  },
  chipGray: {
    padding: ".9rem 1rem",
    borderRadius: "10px",
    background: "#F1EFE8",
  },
  chipLabel: {
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: ".06em",
    textTransform: "uppercase",
    color: "#444441",
    marginBottom: "3px",
  },
  chipDesc: {
    fontSize: "13px",
    color: "#5F5E5A",
    lineHeight: 1.5,
  },
  chipPurple: {
    padding: ".9rem 1rem",
    borderRadius: "10px",
    background: "#EEEDFE",
  },
  chipLabelP: {
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: ".06em",
    textTransform: "uppercase",
    color: "#534AB7",
    marginBottom: "3px",
  },
  chipDescP: {
    fontSize: "13px",
    color: "#534AB7",
    lineHeight: 1.5,
    opacity: 0.8,
  },
  grid3: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    marginBottom: "1.75rem",
  },
  methodCard: {
    background: "#fafaf8",
    border: "1px solid #f0eef8",
    borderRadius: "10px",
    padding: "1rem",
  },
  methodDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    marginBottom: "8px",
  },
  methodTitle: {
    fontSize: "12px",
    fontWeight: 500,
    color: "#1c1b2e",
    marginBottom: "6px",
  },
  methodDesc: {
    fontSize: "12px",
    color: "#6b6a7a",
    lineHeight: 1.55,
  },
  leg: {
    display: "flex",
    flexWrap: "wrap",
    gap: "14px",
    marginBottom: "10px",
    fontSize: "12px",
    color: "#6b6a7a",
  },
  ld: {
    width: "10px",
    height: "10px",
    borderRadius: "2px",
    display: "inline-block",
    marginRight: "5px",
    verticalAlign: "middle",
  },
  rowList: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  rowItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: ".75rem 1rem",
    borderRadius: "8px",
    border: "1px solid #f0eef8",
    background: "#fff",
  },
  rowIcon: {
    width: "32px",
    height: "32px",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    fontSize: "14px",
    fontWeight: 500,
  },
  rowTitle: {
    fontSize: "13px",
    fontWeight: 500,
    color: "#1c1b2e",
    marginBottom: "2px",
  },
  rowDesc: {
    fontSize: "12px",
    color: "#6b6a7a",
    lineHeight: 1.4,
  },
  
};
const tree = {
  container: {
    marginTop: "30px",
    textAlign: "center",
  },

  root: {
    fontWeight: "800",
    fontSize: "18px",
    marginBottom: "20px",
  },

  line: {
    width: "2px",
    height: "30px",
    background: "#cbd5f5",
    margin: "0 auto",
  },

  row: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    margin: "15px 0",
  },

  box: {
    background: "#f1f5f9",
    padding: "14px 20px",
    borderRadius: "12px",
    minWidth: "160px",
  },

  boxHighlight: {
    background: "#dbeafe",
    padding: "14px 20px",
    borderRadius: "12px",
    border: "2px solid #3b82f6",
    minWidth: "180px",
  },

  smallBox: {
    background: "#ffffff",
    padding: "10px 14px",
    borderRadius: "10px",
    border: "1px solid #e2e8f0",
    fontSize: "14px",
  },

  sub: {
    fontSize: "12px",
    color: "#64748b",
    marginTop: "4px",
  },
};
const tree2 = {
  container: {
    marginTop: "30px",
    textAlign: "center",
  },

  root: {
    fontWeight: "800",
    fontSize: "18px",
    marginBottom: "20px",
    color: "#1c1b2e",
  },

  line: {
    width: "2px",
    height: "30px",
    background: "#d9dff6",
    margin: "0 auto",
  },

  lineSmall: {
    width: "2px",
    height: "20px",
    background: "#d9dff6",
    margin: "10px auto",
  },

  row: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
    margin: "12px 0",
  },

  col: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  /* Top level */
  boxIntrinsic: {
    background: "#F3ECF8",
    padding: "14px 20px",
    borderRadius: "12px",
    minWidth: "160px",
    color: "#7A4E8A",
    border: "1px solid #E6D8EE",
    fontWeight: 500,
  },

  boxPostHoc: {
    background: "#F7F3E8",
    padding: "14px 20px",
    borderRadius: "12px",
    minWidth: "160px",
    color: "#7D6840",
    border: "1px solid #ECE3CC",
    fontWeight: 500,
  },

  /* Intrinsic child */
  subBoxIntrinsic: {
    background: "#F3ECF8",
    padding: "12px 16px",
    borderRadius: "10px",
    fontSize: "13px",
    color: "#7A4E8A",
    minWidth: "160px",
    border: "1px solid #E6D8EE",
    lineHeight: 1.5,
  },

  /* Post-hoc children */
  boxInputOutput: {
    background: "#F7F3E8",
    padding: "14px 20px",
    borderRadius: "12px",
    minWidth: "160px",
    color: "#7D6840",
    border: "1px solid #ECE3CC",
    fontWeight: 500,
  },

  boxRepresentation: {
    background: "#EEEDFE",
    padding: "14px 20px",
    borderRadius: "12px",
    border: "2px solid #7F77DD",
    minWidth: "180px",
    color: "#3C3489",
    fontWeight: 500,
  },

  sub: {
    fontSize: "12px",
    marginTop: "4px",
    opacity: 0.85,
  },

  /* Input-output method pills */
  smallBoxPostHoc: {
    background: "#F7F3E8",
    padding: "10px 14px",
    borderRadius: "10px",
    border: "1px solid #ECE3CC",
    fontSize: "13px",
    color: "#7D6840",
  },

  /* Representation cards */
  group: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "14px",
  },

  groupCardRepresentation: {
    background: "#F6F4FE",
    border: "1px solid #DDD8FB",
    borderRadius: "12px",
    padding: "12px",
    width: "170px",
  },

  groupCardRepresentationHighlight: {
    background: "#EEEDFE",
    border: "1.5px solid #7F77DD",
    borderRadius: "12px",
    padding: "12px",
    width: "170px",
    boxShadow: "0 0 0 1px rgba(127,119,221,0.06) inset",
  },

  groupTitleRepresentation: {
    fontSize: "12px",
    fontWeight: 600,
    marginBottom: "8px",
    color: "#2E276F",
  },

  groupItemsRepresentation: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    fontSize: "11px",
    color: "#5E58A8",
    lineHeight: 1.45,
  },
};
export default Article2;