import {
  Button,
  Card,
  CardActions,
  CardContent,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

export default function Archive() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };

  const cardData = [{ title: "タイトル", content: "xxxxxxx" }];
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "20%", maxWidth: "240px" }}>
        <IconButton
          style={{ padding: "1.25rem" }}
          onClick={toggleOpen}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={open} onClose={toggleOpen}>
          <ul style={{ padding: "1.25rem" }}>
            <Typography variant="h2" sx={{ fontSize: "1.5rem" }}>
              パーツ
            </Typography>
            <li>ヘッダー</li>
            <li>フッター</li>
            <li>見出し</li>
            <li>ボタン</li>
          </ul>
        </Drawer>
      </div>
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
                  <Typography variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" style={{ marginTop: "8px" }}>
                    {card.content}
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
