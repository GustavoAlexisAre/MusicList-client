
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import "./TrackCard.css"
import StopIcon from '@mui/icons-material/Stop';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {CreateSong} from "../../services/spotify.service"


function TrackCard({track, user}) {

  // console.log(user.playlists)
  // console.log(track)
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    

const {album, artist, tracks} = track



    const playAudio = (track) => {
      const audioEl = document.getElementById(`audio-${track.id}`);        
      audioEl.play();
      
  };
   
      const stopAudio = (track) => {
        const stopE1 = document.getElementById(`audio-${track.id}`)
        stopE1.pause()
        stopE1.currentTime = 0;
      }

      const Song = (id, trackName, trackUrl) => { CreateSong({name:trackName, artist:artist.name, disc:album.name, image:album.image, url:trackUrl, id})
      console.log(tracks.name, artist.name, album.name, album.image, track.previewUrl, id)
      handleClose() }

  return (
    
    <div className='trackCard'>
    <div className='trackcardBox'>
    { tracks ? tracks.map((track) => (
         <Card sx={{ display: 'flex' }} key={track.id} className="CardMusic">
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
          <input type="hidden" name="name" value={track.name} />
          <input type="hidden" name="id" value={track._id} />
            {track.name}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div">
          <input type="hidden" name="artist" value={artist.name} />
          {artist.name}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }}  onClick={() => playAudio(track)} />
          </IconButton>
          <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <PlaylistAddIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      {user ? user.playlists.map((folder) => (<MenuItem onClick={()=> Song(folder._id, track.name, track.previewUrl)}>{folder.name}</MenuItem>)):null}
        
      </Menu>
          <IconButton aria-label="next">
           <StopIcon onClick={() => stopAudio(track)}/>
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 100, height:100 }}
        image={album.image}
        alt={album.name}
      />
      <audio id={`audio-${track.id}`} className="audio-element">
          <source src={track.previewUrl}/>
        </audio>
      </Card>
      )) : null}
      </div>
    </div>
    
  )
 
}


export default TrackCard