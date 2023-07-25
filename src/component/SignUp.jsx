import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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

function SignUp(props) {

  const login = useGoogleLogin({ onSuccess: async tokenResponse => { console.log(tokenResponse); 
    const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', 
    { headers: { Authorization: `Bearer ${tokenResponse.access_token}` }, }) 
    .then(res => res.data); console.log(userInfo); }, 
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
    <div className='bodySign'>
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
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2} style={{ color: 'white' }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive promotions and updates by email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ 
                  backgroundColor: '#3a0868', 
                  color: 'yellow', 
                  borderRadius: '30px'
                }}
              >
               Sign Up
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
              <Grid container justifyContent="flex-start">
                <Grid item style={{marginTop:'15px 0px'}}>
                  <LinkRouter to='/SignIn' 
                  style={{ 
                    color: '#3a0868',
                    display:'flex', 
                    flexDirection:'row',
                    margin:'15px 0px'
                     }}>
                    Already have an account? 
                    <p className='animation buttonUser'>Sign In</p>
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

export default SignUp