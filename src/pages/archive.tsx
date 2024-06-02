import {
  Box,
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

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "20%", maxWidth: "240px" }}>
        <IconButton
          onClick={toggleOpen}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={open} onClose={toggleOpen}>
          <ul>
            <Typography variant="h2">パーツ</Typography>
            <li>ヘッダー</li>
            <li>フッター</li>
            <li>見出し</li>
            <li>ボタン</li>
          </ul>
        </Drawer>
      </div>
      <main style={{ width: "80%" }}>
        <ul>
          <li>
            <Card sx={{ maxWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  見出し1
                </Typography>

                <Typography variant="body2" style={{ marginTop: "8px" }}>
                  テキストテキスト
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">コードを見る</Button>
              </CardActions>
            </Card>
          </li>
        </ul>
      </main>
    </div>
  );
}
