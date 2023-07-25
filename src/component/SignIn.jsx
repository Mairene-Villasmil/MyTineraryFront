import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as LinkRouter } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer'
import '../styles/Sign.css'
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import iconG from '../images/buscar.png'
import iconF from '../images/facebook.png'

const defaultTheme = createTheme();


export default function SignIn(props) {

  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      console.log(tokenResponse);
      const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo',
        { headers: { Authorization: `Bearer ${tokenResponse.access_token}` }, })
        .then(res => res.data); console.log(userInfo);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div classNameName='bodySign'>
      <Navbar />
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, }} >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Grid item xs>
                <LinkRouter to='/' variant="body2" style={{ color: '#3a0868' }}>
                  Forgot password?
                </LinkRouter>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 4 }}
                style={{
                  backgroundColor: '#3a0868',
                  color: 'yellow',
                  borderRadius: '30px'
                }}
              >
                Sign In
              </Button>
              <div className="row">
                <div className="col-5 linea">
                  <hr />
                </div>
                <div className="col-2 titulo">
                  <p style={{ color: '#3a0868', fontSize: '15px', textAlign: 'center' }}> or </p>
                </div>
                <div className="col-5 linea">
                  <hr />
                </div>
              </div>
              <div className='social'>
                <button
                className="buttonsocial"
                onClick={login}
              >
                <img src={iconG} className='iconGoogle' alt="Google" />Sign in with Google {' '}
              </button>
              <button 
              className="buttonsocial"
              onClick={login}
              > 
               <img src={iconF} className='iconGoogle' alt="Google" />{' '}Sign in with Facebook 
              </button>
              </div>
              <Grid container style={{ marginTop: '20px' }}>
                <Grid item>
                  <LinkRouter to='/SignUp' variant="body2"
                    style={{
                      color: '#3a0868',
                      marginBottom: '15px',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center'
                    }}>
                    Don't have an account?
                    <p className='animation buttonUser'>Sign Up</p>
                  </LinkRouter>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <Footer />
    </div>
  );
}