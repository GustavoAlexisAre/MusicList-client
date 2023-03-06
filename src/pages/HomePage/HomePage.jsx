import { Button, createTheme, Link, ThemeProvider, Typography } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';


import "./HomePage.css";
import { useOutletContext } from "react-router-dom";

function HomePage() {

  const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      fontSize: 45,
    },
  });
  
  const { isLoggedIn, user, logOutUser } = useOutletContext()

  return (
    <>
      <div className="mainDiv">
        <div>
        <section className="signIn">
        <div className="join">
    <ThemeProvider theme={theme}>
        <Typography>Join us and make your playlist.</Typography>
        <Typography>Share it with your friends and make the biggest playlist ever.</Typography>
      </ThemeProvider>
      {isLoggedIn && (
          <Link  underline="none" href="/dashboard" className="button">
						{" "}
						<Button sx={{ bgcolor: "#F72585" }} className="button" variant="contained"><Typography sx={{fontSize:25}}>Dashboard</Typography></Button>
					</Link>
      )}
      {!isLoggedIn && (
          <Link  underline="none" href="/signup" className="button">
						{" "}
						<Button sx={{ bgcolor: "#F72585" }} className="button" variant="contained"><Typography sx={{fontSize:25}}>Sign Up</Typography></Button>
					</Link>
      )}
          </div> 
        </section>
        </div>
        <div className="playbox">
        <section className="musicBox">
        <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 260 }}
        image="https://upload.wikimedia.org/wikipedia/en/5/5f/Mac_Miller_Live_from_Space.jpg"
        alt="Live from space album cover"
      />
    </Card>
        </section>
        </div>
      </div>
    </>
  );
}

export default HomePage;
