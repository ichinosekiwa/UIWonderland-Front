import { Drawer, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'

export default function Archive() {

    const [open,setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open);
    }
  return (
    <div>
     <IconButton onClick={toggleOpen}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
              <MenuIcon />
          </IconButton>
      <Drawer anchor='left' open={open} onClose={toggleOpen}>
        <ul>
            <Typography variant='h2'>パーツ</Typography>
            <li>ヘッダー</li>
            <li>フッター</li>
            <li>見出し</li>
            <li>ボタン</li>
        </ul>
      </Drawer>
    </div>
  )
}
