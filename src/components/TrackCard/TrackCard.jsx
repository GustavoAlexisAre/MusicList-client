
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
import {CreateSong, getUser} from "../../services/spotify.service"
import { useEffect } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Alert, AlertTitle, Dialog, Snackbar } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function TrackCard({track, user}) {

  console.log(track)
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event, track) => {
    setAnchorEl(event.currentTarget);
    setSelectedTrack(track)
  
  };

  const [open1, setOpen1] = React.useState(false);
  const handleClose = () => {
    setAnchorEl(null);
    setOpen1(!open1);
  };

 


const {album, artist, tracks} = track

const [Userupdate, setUserupdate] = useState(null);
const [selectedTrack, setSelectedTrack] = useState(null)
const [expanded, setExpanded] = React.useState('panel1');



useEffect(() => {
  const UserData = async () => {
    const data = await getUser(user._id);
    setUserupdate(data);
  };
  UserData();
}, [user._id]);


    const playAudio = (track) => {
      const audioEl = document.getElementById(`audio-${track.id}`);        
      audioEl.play();
      
  };
   
      const stopAudio = (track) => {
        const stopE1 = document.getElementById(`audio-${track.id}`)
        stopE1.pause()
        stopE1.currentTime = 0;
      }

      const Song = (id, trackName, trackUrl) => { CreateSong({name:trackName, artist:artist.name, disc:album.name, image:album.image, url:trackUrl, id, selectedTrack})
      handleClose() }

  return (
    
    <div className='trackCard'>
    {/* <div className='trackcardBox'>
    { tracks ? tracks.map((track) => (
         <Card sx={{ display: 'flex' }} key={track.id} className="CardMusic">
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="body1">
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
        onClick={(event)=> handleClick(event, track)}
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
      {selectedTrack && Userupdate &&  Userupdate.data.data.playlists.map((folder) => (<MenuItem key={folder.id} onClick={()=> Song(folder._id, selectedTrack.name, selectedTrack.previewUrl)}>{folder.name}</MenuItem>
      ))}
        
      </Menu>
      <Snackbar open={open1} autoHideDuration={6000} onClose={()=> handleClose}>
  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
    Your Song is Now in Your Playlist
  </Alert>
</Snackbar>
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
      </div> */}


      <div  className='playlistdetails'>
    <div className='cardplaylist'>
    <Typography>Song  List</Typography>
    
      <div className='cardpl1'>
          <Accordion expanded={expanded === 'panel1'}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel1a-content"
     id="panel1a-header"
   >
   <Typography>{track.album.name}</Typography>
   </AccordionSummary>
   <AccordionDetails>
   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Song Name</TableCell>
            <TableCell align="left">Artist</TableCell>
            <TableCell align="left">Disc</TableCell>
            <TableCell align="left">Controllers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tracks ? tracks.map((track) => (
            <TableRow
              key={track._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            > <TableCell component="th" scope="row">
                {track.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {artist.name}
              </TableCell>
              <TableCell align="right"><img src={album.image} alt={track.name}/></TableCell>
               <TableCell align="right">
               <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }}  onClick={() => playAudio(track)} />
          </IconButton>
          <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={(event)=> handleClick(event, track)}
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
      {selectedTrack && Userupdate &&  Userupdate.data.data.playlists.map((folder) => (<MenuItem key={folder.id} onClick={()=> Song(folder._id, selectedTrack.name, selectedTrack.previewUrl)}>{folder.name}</MenuItem>
      ))}
        
      </Menu>
      <Snackbar open={open1} autoHideDuration={6000} onClose={()=> handleClose}>
  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
    Your Song is Now in Your Playlist
  </Alert>
</Snackbar>
          <IconButton aria-label="next">
           <StopIcon onClick={() => stopAudio(track)}/>
          </IconButton>
        </Box>
      <audio id={`audio-${track.id}`} className="audio-element">
          <source src={track.previewUrl}/>
        </audio>
               </TableCell>
            </TableRow>
          )):null}
        </TableBody>
      </Table>
    </TableContainer>
   </AccordionDetails>
 </Accordion>
 </div>
</div>
</div>

    </div>
    
  )
 
}


export default TrackCard