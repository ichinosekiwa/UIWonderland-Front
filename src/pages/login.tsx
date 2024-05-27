import { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function UserLogin() { // 大文字始まり
  const [email , setEmail] = useState('');
  const [password , setPassword]  = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
    const response = await axios.post('https://ui-wonderland-api.vercel.app/auth/login', {
      email,
      password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      Cookies.set('accessToken', response.data.access_token, { expires: 1 }); // 有効期限1日
      alert('ログインに成功しました。');
    } else {
      alert('ログインに失敗しました。');
    } 
  } catch (error) {
      alert('ログインに失敗しました');
    }
  } 


  return (
    <Grid
    container
    justifyContent="center"
    mt={20}
  >
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
  </Grid>
);
};