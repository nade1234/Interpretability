import React, { useEffect } from "react";

const Article1 = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js";
    script.async = true;
    script.onload = () => {
      const tc = "rgba(0,0,0,0.35)";
      const lc = "rgba(0,0,0,0.55)";
      const gc = "rgba(0,0,0,0.06)";

      const base = (max) => ({
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: (c) => "  " + c.raw + " / 100" } },
        },
        scales: {
          x: {
            max,
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
      });

      const c1 = document.getElementById("c1");
      const c2 = document.getElementById("c2");

      if (c1 && window.Chart) {
        new window.Chart(c1, {
          type: "bar",
          data: {
            labels: [
              "Trust & safety",
              "Debugging",
              "Regulation",
              "Scientific discovery",
              "Fairness & bias",
              "Human-AI collab",
            ],
            datasets: [
              {
                data: [92, 78, 85, 70, 88, 74],
                backgroundColor: [
                  "#7F77DD", "#7F77DD", "#7F77DD",
                  "#1D9E75", "#1D9E75", "#1D9E75",
                ],
                borderRadius: 6,
                borderSkipped: false,
              },
            ],
          },
          options: base(100),
        });
      }

      if (c2 && window.Chart) {
        new window.Chart(c2, {
          type: "bar",
          data: {
            labels: [
              "Faithfulness",
              "Superposition",
              "Scalability",
              "Evaluation gap",
              "Causality vs corr.",
              "Human limits",
              "Completeness",
              "Distribution shift",
              "Adversarial manip.",
            ],
            datasets: [
              {
                data: [85, 72, 90, 78, 80, 65, 70, 75, 82],
                backgroundColor: [
                  "#D85A30", "#D85A30", "#D85A30",
                  "#BA7517", "#BA7517", "#BA7517",
                  "#E24B4A", "#E24B4A", "#E24B4A",
                ],
                borderRadius: 6,
                borderSkipped: false,
              },
            ],
          },
          options: base(100),
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div style={styles.pg}>
      {/* Hero */}
      <div style={styles.kicker}>ML interpretability</div>
      <h1 style={styles.h1}>
        Why accuracy alone is not enough to evaluate machine learning models
      </h1>
      <p style={styles.sub}>
        When two models share similar accuracy, interpretability becomes the
        deciding factor especially in sensitive domains like medicine and finance.
      </p>

      {/* Definition */}
      <div style={styles.secHd}>What is interpretability?</div>
      <div style={styles.callout}>
        <p style={styles.calloutP}>
          Interpretability means making a model explain its decisions in{" "}
          <b style={styles.calloutB}>human-understandable terms</b> tracing
          how inputs (features) produce outputs.
        </p>
        <p style={{ ...styles.calloutP, marginTop: "0.5rem" }}>
          A <b style={styles.calloutB}>black-box model</b> shows inputs and
          outputs with no reasoning visible in between.
        </p>
      </div>

      <div style={styles.g2}>
        <div style={styles.chipP}>
          <div style={styles.clP}>Global</div>
          <div style={styles.cdP}>Overall model behavior across all predictions</div>
        </div>
        <div style={styles.chipT}>
          <div style={styles.clT}>Local</div>
          <div style={styles.cdT}>A single individual decision or prediction</div>
        </div>
      </div>

      <hr style={styles.divider} />

      <div style={styles.secHd}>Why interpretability matters</div>
      <div style={styles.leg}>
        <span>
          <span style={{ ...styles.ld, background: "#7F77DD" }} />
          Governance
        </span>
        <span>
          <span style={{ ...styles.ld, background: "#1D9E75" }} />
          Knowledge
        </span>
      </div>
      <div style={{ position: "relative", width: "100%", height: "250px", marginBottom: "1rem" }}>
        <canvas id="c1" />
      </div>

      <hr style={styles.divider} />

      <div style={styles.secHd}>9 challenges of interpretability</div>
      <div style={styles.leg}>
        <span>
          <span style={{ ...styles.ld, background: "#D85A30" }} />
          Technical
        </span>
        <span>
          <span style={{ ...styles.ld, background: "#BA7517" }} />
          Methodological
        </span>
        <span>
          <span style={{ ...styles.ld, background: "#E24B4A" }} />
          Reliability
        </span>
      </div>
      <div style={{ position: "relative", width: "100%", height: "360px", marginBottom: "1rem" }}>
        <canvas id="c2" />
      </div>

      <div style={styles.cats}>
        <div style={styles.catC}>
          <div style={styles.ctC}>Technical</div>
          <div style={styles.cdC}>Faithfulness, superposition, scalability</div>
        </div>
        <div style={styles.catA}>
          <div style={styles.ctA}>Methodological</div>
          <div style={styles.cdA}>Evaluation gap, causality, human limits</div>
        </div>
        <div style={styles.catR}>
          <div style={styles.ctR}>Reliability</div>
          <div style={styles.cdR}>
            Completeness, distribution shift, adversarial manipulation
          </div>
        </div>
      </div>

    

    </div>
  );
};

/* ── Styles ── */
const styles = {
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
  },
  secHd: {
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: ".07em",
    textTransform: "uppercase",
    color: "#AFA9EC",
    marginBottom: "1rem",
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
  g2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    marginBottom: "1.75rem",
  },
  chipP: { padding: ".9rem 1rem", borderRadius: "10px", background: "#EEEDFE" },
  clP: { fontSize: "11px", fontWeight: 500, letterSpacing: ".06em", textTransform: "uppercase", color: "#534AB7", marginBottom: "3px" },
  cdP: { fontSize: "13px", color: "#534AB7", lineHeight: 1.5, opacity: 0.8 },
  chipT: { padding: ".9rem 1rem", borderRadius: "10px", background: "#E1F5EE" },
  clT: { fontSize: "11px", fontWeight: 500, letterSpacing: ".06em", textTransform: "uppercase", color: "#0F6E56", marginBottom: "3px" },
  cdT: { fontSize: "13px", color: "#0F6E56", lineHeight: 1.5, opacity: 0.8 },
  divider: { border: "none", borderTop: "1px solid #f0eef8", margin: "1.75rem 0" },
  leg: { display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "10px", fontSize: "12px", color: "#6b6a7a" },
  ld: { width: "10px", height: "10px", borderRadius: "2px", display: "inline-block", marginRight: "5px", verticalAlign: "middle" },
  cats: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginTop: "1.25rem" },
  catC: { padding: ".875rem 1rem", borderRadius: "10px", background: "#FAECE7" },
  ctC: { fontSize: "12px", fontWeight: 500, color: "#712B13", marginBottom: "3px" },
  cdC: { fontSize: "12px", color: "#993C1D", lineHeight: 1.4 },
  catA: { padding: ".875rem 1rem", borderRadius: "10px", background: "#FAEEDA" },
  ctA: { fontSize: "12px", fontWeight: 500, color: "#633806", marginBottom: "3px" },
  cdA: { fontSize: "12px", color: "#854F0B", lineHeight: 1.4 },
  catR: { padding: ".875rem 1rem", borderRadius: "10px", background: "#FCEBEB" },
  ctR: { fontSize: "12px", fontWeight: 500, color: "#791F1F", marginBottom: "3px" },
  cdR: { fontSize: "12px", color: "#A32D2D", lineHeight: 1.4 },
};

export default Article1;