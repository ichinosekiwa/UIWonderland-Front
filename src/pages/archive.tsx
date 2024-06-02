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
          <ul style={{padding: '1.25rem'}}>
            <Typography variant="h2" sx={{fontSize:'1.5rem'}}>パーツ</Typography>
            <li>ヘッダー</li>
            <li>フッター</li>
            <li>見出し</li>
            <li>ボタン</li>
          </ul>
        </Drawer>
      </div>
      <main style={{ width: "80%" , margin:'40px'}}>
        <ul style={{display: 'grid', placeItems: 'center', gap: '2rem',gridTemplateColumns:'repeat(3,1fr)'}}>
          <li>
            <Card sx={{ minWidth: 275 }}>
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
          <li>
          <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  ヘッダー
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
          <li>
          <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  ボタン
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
          <li>
          <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  ボタン
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
          <li>
          <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  ボタン
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
