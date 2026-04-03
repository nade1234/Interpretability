import React from "react";

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#534AB7"
    strokeWidth="2"
    style={{ flexShrink: 0 }}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const projects = [
  {
    num: "01",
    title: "Interpretability in ML: definition",
    type: "Why accuracy alone is not enough",
    path: "/article1",
  },
  {
    num: "02",
    title: "Representation interpretability",
    type: "Architecture and main components",
    path: "/article2",
  },
  {
    num: "03",
    title: "Mini projects in interpretability",
    type: "Hands-on implementations",
    path: "/article3",
  },
];

const Home = () => {
  return (
    <div style={s.page}>

      {/* Hero */}
      <div style={s.hero}>
        <div style={s.kicker}>Research portfolio</div>
        <h1 style={s.h1}>Research projects</h1>
        <div style={s.heroSub}>Articles & GitHub implementations</div>
        <p style={s.heroDesc}>
          A curated overview of research articles and their corresponding
          implementations in ML interpretability.
        </p>
        <span
          style={s.btn}
          onClick={() => {
            const el = document.getElementById("projects");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Explore projects
          <ArrowIcon />
        </span>
      </div>

      <hr style={s.divider} />

      {/* Projects */}
      <div id="projects" style={s.projects}>
        <div style={s.secHd}>Projects</div>
        <div style={s.grid}>
          {projects.map((p) => (
            <div
              key={p.num}
              style={s.card}
              onClick={() => (window.location.pathname = p.path)}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#faf9ff")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#ffffff")}
            >
              <div style={s.cardNum}>{p.num}</div>
              <div style={s.cardBody}>
                <div style={s.cardTitle}>{p.title}</div>
                <div style={s.cardType}>{p.type}</div>
              </div>
              <div style={s.cardArrow}>
                <ArrowIcon />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

/* ── Styles ── */
const s = {
  page: {
    background: "#faf9ff",
    minHeight: "100vh",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  hero: {
    textAlign: "center",
    padding: "80px 20px 64px",
  },
  kicker: {
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: ".1em",
    textTransform: "uppercase",
    color: "#AFA9EC",
    marginBottom: "1rem",
  },
  h1: {
    fontSize: "48px",
    fontWeight: 500,
    lineHeight: 1.2,
    color: "#1c1b2e",
    marginBottom: ".75rem",
  },
  heroSub: {
    fontSize: "16px",
    color: "#AFA9EC",
    fontWeight: 500,
    letterSpacing: ".04em",
    marginBottom: "1rem",
  },
  heroDesc: {
    fontSize: "15px",
    color: "#6b6a7a",
    maxWidth: "520px",
    margin: "0 auto 2rem",
    lineHeight: 1.75,
  },
  btn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "11px 24px",
    background: "#EEEDFE",
    color: "#534AB7",
    borderRadius: "999px",
    fontSize: "13px",
    fontWeight: 500,
    textDecoration: "none",
    border: "1px solid #AFA9EC",
    cursor: "pointer",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #f0eef8",
    margin: "0 40px",
  },
  projects: {
    padding: "48px 40px 80px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  secHd: {
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: ".08em",
    textTransform: "uppercase",
    color: "#AFA9EC",
    marginBottom: "1.5rem",
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  card: {
    background: "#ffffff",
    border: "0.5px solid #ebe8f8",
    borderRadius: "14px",
    padding: "1.25rem 1.5rem",
    display: "flex",
    alignItems: "center",
    gap: "16px",
    cursor: "pointer",
    textDecoration: "none",
    transition: "background 0.15s",
  },
  cardNum: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    background: "#EEEDFE",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    fontWeight: 500,
    color: "#534AB7",
    flexShrink: 0,
  },
  cardBody: {
    flex: 1,
  },
  cardTitle: {
    fontSize: "15px",
    fontWeight: 500,
    color: "#1c1b2e",
    marginBottom: "3px",
  },
  cardType: {
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: ".06em",
    textTransform: "uppercase",
    color: "#AFA9EC",
  },
  cardArrow: {
    width: "32px",
    height: "32px",
    borderRadius: "8px",
    background: "#EEEDFE",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
};

export default Home;