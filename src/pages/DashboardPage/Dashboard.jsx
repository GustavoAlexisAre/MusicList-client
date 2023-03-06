import React from "react";
import { Form, useActionData, useLoaderData } from "react-router-dom";
import { getArtist } from "../../services/spotify.service";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography/Typography";
import Button from "@mui/material/Button/Button";
import { useState } from "react";
import ArtistCard from "../../components/ArtistCard/ArtistCard"
import "./Dashboard.css"


export const getArtistAction = async (artistName) => {
  const {data: artist} = await getArtist(artistName)
  return {artist}
}


function DashboardPage(page) {

  const [artistName, setArtistName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [artist, setArtist] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { artist } = await getArtistAction(artistName);
      setArtist(artist);
      setLoading(false);
      page.push(`/artists/${artistName}`);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <div className="dashboardstyle">
    <div className="inputdashboard">
     <Typography>dashboard</Typography>
     <Form onSubmit={handleSubmit} method="GET">
        <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
          <TextField
              fullWidth
              label="Busca tu Artista"
              id="artist"
              value={artistName}
              onChange={(e) => setArtistName(e.target.value)
              }
              color="secondary"
          InputLabelProps={{
          style: {
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            width: '100%',
            color: 'white'
          } }}
          sx={{'& .MuiTextField-root': { m: 1, width: '25ch'}, '& fieldset': { borderColor: 'white'}, input: { color: 'white' } }}
            />     
        </Box>
        <div className="buttondashboard">
      <Button type="submit" variant="contained" sx={{ bgcolor: "#F72585" }}>Find Your Artist</Button>
      </div>
    </Form>
    </div>
    <div className="cardArtist">
    {artist ? artist.map((artist) => (
        <ArtistCard key={artist.id} artist={artist} />
      )) : null }
    </div>
    </div>
  );
}

export default DashboardPage;
