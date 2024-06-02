import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

function signup() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 120,
      }}
    >
      {" "}
      <Typography variant="h4" fontWeight="fontWeightRegular">
        Sign Up
      </Typography>
      <Grid item>
        <form noValidate>
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
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item sx={{ width: 1 }} mb={3}>
              <TextField
                label="Password"
                type="password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item>
              <Button variant="contained" type="submit">
                ユーザー登録
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </div>
  );
}

export default signup;
