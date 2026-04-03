import React from "react";
import Home from "./Home";
import Article1 from "./Article1/Article1";
import Article2 from "./Article2/Article2";
import Article3 from "./Article3/Article3";
import LocalLevel from "./LocalLevel";
import SubspaceLevel from "./SubspaceLevel";
import GlobalStructure from "./GlobalStructure";

function App() {
  const path = window.location.pathname;

  if (path === "/article1") return <Article1 />;
  if (path === "/article2") return <Article2 />;
  if (path === "/article3") return <Article3 />;
  if (path === "/local-level") return <LocalLevel />;
  if (path === "/subspace-level") return <SubspaceLevel />;
  if (path === "/global-structure") return <GlobalStructure />;

  return <Home />;
}

export default App;