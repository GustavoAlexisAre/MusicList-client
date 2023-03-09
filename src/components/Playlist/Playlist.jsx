import { Accordion, AccordionDetails, AccordionSummary, Button, Input, TextField, Typography } from '@mui/material';
import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Form, useOutletContext } from 'react-router-dom';
import  "./Playlist.css"
import { DeletePlayList, DeleteSong, getUser, UpdatePlayList } from '../../services/spotify.service';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, redirect, useRevalidator } from 'react-router-dom';

function Playlist(playlist) {

  const { user, authenticateUser } = useOutletContext()

  const coquita = useNavigate()
  // const pepsita = useRevalidator()
  const [Userupdate, setUserupdate] = useState(null);
  const [newName, setNewName] = useState(playlist.name);
  

  const deletePl =  (playlistId, userId) => {DeletePlayList({playlistId, userId}) 
  return coquita(0)}
 
  const deleteTrack = (playlistId, trackId) => {DeleteSong({playlistId, trackId})
  return coquita(0)}


  const updatePlaylist = (playlistId, newName) => UpdatePlayList({playlistId, newName})



useEffect(() => {
  const UserData = async () => {
    const data = await getUser(user._id);
    setUserupdate(data);
  };
  UserData();
}, [user._id]);
  

  return (
    <div key={playlist._id}>
    <div className="cardPl">
             <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Form onSubmit={(event) => {
            event.preventDefault();
            coquita(0)
            updatePlaylist(playlist._id, newName)
          }} method="POST">
        <TextField sx={{ borderColor: 'white'}} id="outlined-basic"  variant="outlined" label={playlist.name}  value={newName} 
              onChange={(event) => setNewName(event.target.value)} name="name"/> 
        <Button type="submit" >Edit</Button>
        <Button onClick={() => deletePl(playlist._id, user._id)}>Delete</Button>
        </Form>
        
        </AccordionSummary>
        <AccordionDetails>
        {playlist.tracks.map((eachSong) => (
            <div className='eachSong' key={eachSong._id}>
           
              <Typography> Song: {eachSong.name} </Typography>
              <Typography>Artist: {eachSong.artist}</Typography>
              <audio controls>
                <source src={eachSong.url}>
                </source>
              </audio>
                <img src={eachSong.image} alt={eachSong.name}/>
                <Button onClick={() => deleteTrack(playlist._id, eachSong._id)}>Delete</Button>
              </div>
        ))}
      
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  )
}

export default Playlist