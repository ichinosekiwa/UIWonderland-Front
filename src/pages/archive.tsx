import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Sidebar from "./_sidebar"; // Sidebar コンポーネントを使用

export default function Archive() {
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

  const cardData = [{ title: "左にボーダー", contributor: "ichinose" }];
  return (
    <div style={{ display: "flex" }}>
      <Sidebar open={open} toggleOpen={toggleOpen} handleClose={handleClose} />
      <main style={{ width: "80%", height: "100vh", margin: "40px" }}>
        <ul
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(3,1fr)",
          }}
        >
          {cardData.map((card, index) => (
            <li key={index}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <img
                    src="https://pote-chil.com/css-stock/img/snippets/heading/23.svg"
                    alt="写真が入る？"
                  ></img>
                  <Typography variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="div"
                    style={{
                      marginTop: "8px",
                      fontSize: "12px",
                      textAlign: "right",
                    }}
                  >
                   投稿者：<span>{card.contributor}</span>

                  </Typography>
                </CardContent>
                <CardActions>
                  <a href="/category/decoration/headline">
                    <Button size="small">コードを見る</Button>
                  </a>
                </CardActions>
              </Card>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
