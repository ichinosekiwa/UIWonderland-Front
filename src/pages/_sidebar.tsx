import React from "react";
import { Drawer, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface SidebarProps {
  open: boolean;
  toggleOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, toggleOpen, handleClose }) => (
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
    <Drawer anchor="left" open={open} onClose={handleClose}>
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
);

export default Sidebar;
