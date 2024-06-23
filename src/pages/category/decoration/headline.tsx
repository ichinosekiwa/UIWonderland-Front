import { Drawer, IconButton, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../../_sidebar"; // Sidebar コンポーネントを使用
import Image from "next/image";

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

  // ::beforeでアイコンをつける
  const IconHead = styled(Typography)({
    position: "relative",
    paddingLeft: "32px",
    "&::before": {
      content: '"</>"',
      position: "absolute",
      left: 0,
      top: 0,
      fontSize: "16px",
      color: "#2589d0",
    },
  });

  return (
    <div style={{ display: "flex" }}>
      <Sidebar open={open} toggleOpen={toggleOpen} handleClose={handleClose} />
      <main style={{ width: "80%", height: "100vh", margin: "80px auto" }}>
        <Typography
          variant="h1"
          sx={{ fontSize: "1.5rem", marginBottom: "32px" }}
        >
          見出し のデザイン
        </Typography>
        <section
          style={{ display: "flex", gap: "1.5rem", flexDirection: "column" }}
        >
          <div
            style={{ width: "400px", height: "auto", background: "#f4f4f4" }}
          >
            {/* 仮で入れておく */}
            <Image
              src="https://pote-chil.com/css-stock/img/snippets/heading/23.svg"
              alt="写真が入る？"
              width={400} // 画像の幅
              height={300} // 画像の高さ
              layout="responsive" // 必要に応じてレイアウトを調整
            />
          </div>

          {/* HTMLブロック */}
          <div
            style={{ width: "100%", maxWidth: "600px", marginBottom: "32px" }}
          >
            <Typography
              variant="h3"
              sx={{ fontSize: "1rem", marginBottom: "8px" }}
            >
              HTMLをコピペする
            </Typography>
            <div style={{ background: "#333", color: "#fff", padding: "12px" }}>
              <IconHead
                variant="h4"
                sx={{ fontSize: "1rem" }}
                style={{ position: "relative", marginBottom: "8px" }}
              >
                HTML
              </IconHead>
              <code>
                <span>
                  <span style={{ color: "#7ee787" }}>
                    <span style={{ color: "#fff" }}>&lt;</span>h2
                  </span>{" "}
                  <span style={{ color: "#79c0ff" }}>class</span>
                  <span style={{ color: "#79c0ff" }}>
                    <span style={{ color: "#fff" }}>=</span>
                    <span style={{ color: "#fff" }}>&quot;</span>heading1
                    <span style={{ color: "#fff" }}>&quot;</span>
                  </span>
                  <span>&gt;</span>
                </span>
                CSS見出しデザイン
                <span>
                  <span style={{ color: "#79c0ff" }}>
                    <span style={{ color: "#fff" }}>&lt;/</span>h2
                  </span>
                  <span>&gt;</span>
                </span>
              </code>
            </div>
          </div>

          {/* CSSブロック */}
          <div style={{ width: "100%", maxWidth: "600px" }}>
            <Typography
              variant="h3"
              sx={{ fontSize: "1rem", marginBottom: "8px" }}
            >
              CSSをコピペする
            </Typography>
            <div style={{ background: "#333", color: "#fff", padding: "12px" }}>
              <IconHead
                variant="h4"
                sx={{ fontSize: "1rem" }}
                style={{ position: "relative", marginBottom: "8px" }}
              >
                CSS
              </IconHead>
              <code>
                <span>
                  <span style={{ color: "#7ee787" }}>.heading-1 </span>
                  <span style={{ color: "#fff" }}>&#123;</span> {/* 変更部分 */}
                  <br />
                  <span style={{ marginLeft: "1em" }}>
                    <span style={{ color: "#79c0ff" }}>padding</span>
                    <span style={{ color: "#fff" }}>:</span>
                    <span style={{ color: "#fff" }}> .5em .7em</span>
                    <span style={{ color: "#fff" }}>;</span>
                  </span>
                  <br />
                  <span style={{ marginLeft: "1em" }}>
                    <span style={{ color: "#79c0ff" }}>border-left</span>
                    <span style={{ color: "#fff" }}>:</span>
                    <span style={{ color: "#fff" }}> 5px solid #2589d0</span>
                    <span style={{ color: "#fff" }}>;</span>
                  </span>
                  <br />
                  <span style={{ marginLeft: "1em" }}>
                    <span style={{ color: "#79c0ff" }}>color</span>
                    <span style={{ color: "#fff" }}>:</span>
                    <span style={{ color: "#fff" }}> #333333</span>
                    <span style={{ color: "#fff" }}>;</span>
                  </span>
                  <br />
                  <span style={{ color: "#fff" }}>&#125;</span>
                </span>
              </code>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
