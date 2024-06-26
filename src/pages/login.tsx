import { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from 'next/router';

export default function UserLogin() {
  
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://ui-wonderland-api.vercel.app/auth/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

           if (response.status === 200) {
        Cookies.set("accessToken", response.data.access_token, { expires: 1 }); // 有効期限1日
        alert("ログインに成功しました。");
        await router.push('/archive'); // /archive へ遷移
      } else {
        alert("ログインに失敗しました。");
      }
    } catch (error) {
      alert("ログインに失敗しました");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 120,
      }}
    >
      <Typography variant="h4" fontWeight="fontWeightRegular">
        Login
      </Typography>
      <Grid item>
        <form onSubmit={handleSubmit} noValidate>
          <Grid
            container
            direction="column"
            alignItems="center"
            spacing={0}
            sx={{ width: 300 }}
          >
            <Grid item sx={{ width: 1 }}>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item sx={{ width: 1 }} mb={3}>
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item>
              <Button variant="contained" type="submit">
                ログイン
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </div>
  );
}
