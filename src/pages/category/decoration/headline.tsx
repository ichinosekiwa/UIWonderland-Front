import { Drawer, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu";
   

export default function Headline () {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
      setOpen(!open);
    };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "20%", maxWidth: "240px" }}>
        <IconButton style={{ padding: "1.25rem" }}
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
        <Typography variant='h1' sx={{ fontSize: "2rem"}}>見出し のデザイン</Typography>
        <section style={{ display: "flex", gap:"1.5rem", justifyContent:"start" }}>
        <div style={{width:"400px", height:"300px", background:"#f4f4f4"}}>
            <img src="" alt="写真が入る？"></img>
        </div>
        <div style={{width:"30%"}}>
            <Typography variant='h3' sx={{ fontSize: "1.25rem"}}>HTML</Typography>
            <p>aaaaaaa</p>
        </div>
        <div style={{width:"30%"}}>
            <Typography variant='h3' sx={{ fontSize: "1.25rem"}}>CSS</Typography>
            <p>aaaaaaa</p>
        </div>
        </section>
      </main>
    </div>
  )
}