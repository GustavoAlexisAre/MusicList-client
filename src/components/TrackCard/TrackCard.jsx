
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import "./TrackCard.css"

function TrackCard(track) {
    const theme = useTheme();

const {album, artist, tracks} = track.track 
   

    const playAudio = (track) => {
      const audioEl = document.getElementById(`audio-${track.id}`);        
      audioEl.play();
      
  };
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
    setValue(newValue);
      };
    

  return (
    
    <div className='trackCard'>
    <div className='trackcardBox'>
    { tracks ? tracks.map((track) => (
         <Card sx={{ display: 'flex' }} key={track.id} className="CardMusic">
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            {track.name}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div">
          {artist.name}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }}  onClick={() => playAudio(track)} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <PlaylistAddIcon />}
          </IconButton>
            {/* <VolumeDown />
                <Slider aria-label="Volume" value={value} onChange={handleChange} />
            <VolumeUp /> */}
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