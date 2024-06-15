import { Drawer, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../../_sidebar"; // Sidebar コンポーネントを使用

export default function Headline() {
  const [open, setOpen] = useState(false);

  // トグル関数の定義（状態の更新）
  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleClose = (
    event: {},
    reason: "backdropClick" | "escapeKeyDown",
  ) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar open={open} toggleOpen={toggleOpen} handleClose={handleClose} />
      <main style={{ width: "80%", height: "100vh", margin: "40px" }}>
        <Typography variant="h1" sx={{ fontSize: "2rem" }}>
          見出し のデザイン
        </Typography>
        <section
          style={{ display: "flex", gap: "1.5rem", justifyContent: "start" }}
        >
          <div
            style={{ width: "400px", height: "auto", background: "#f4f4f4" }}
          >
            {/* 仮で入れておく */}
            <img
              src="https://pote-chil.com/css-stock/img/snippets/heading/23.svg"
              alt="写真が入る？"
            ></img>
          </div>
          <div style={{ width: "30%" }}>
            <Typography variant="h3" sx={{ fontSize: "1.25rem" }}>
              HTML
            </Typography>
            <div style={{ background: "#333", color: "#fff", padding: "12px" }}>
              <code>
                <h1>aaaa</h1>
              </code>
            </div>
          </div>
          <div style={{ width: "30%" }}>
            <Typography variant="h3" sx={{ fontSize: "1.25rem" }}>
              CSS
            </Typography>
            <div style={{ background: "#333", color: "#fff", padding: "12px" }}>
              <code>
                <h1>aaaa</h1>
              </code>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
