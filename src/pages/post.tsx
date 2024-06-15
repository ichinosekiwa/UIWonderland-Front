import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "./_sidebar";

export default function PostPage() {
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
      <main style={{ width: "80%", height: "100vh", margin: "80px auto" }}>
        <Typography variant="h2" sx={{ fontSize: "24px", marginBottom:"32px" }}>
          投稿ページ
        </Typography>

        <form action={"post"} method="post">
            <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
            <div>
            <Typography variant="h3" sx={{fontSize:"14px", marginBottom:"8px"}}>実装イメージをアップロード（できる・・・？）</Typography>
            <input type="file" name="image"></input>
            </div>
            <div>
            <Typography variant="h3" sx={{fontSize:"14px", marginBottom:"8px"}}>HTML</Typography>
                <TextField></TextField>
            </div>
            <div>
            <Typography variant="h3" sx={{fontSize:"14px", marginBottom:"8px"}}>CSS</Typography>
                <TextField></TextField>
            </div>
            </div>
        </form>
      </main>
    </div>
  );
}
