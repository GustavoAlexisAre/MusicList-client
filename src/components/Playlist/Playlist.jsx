import { Accordion, AccordionDetails, AccordionSummary, Button, Input, TextField, Typography } from '@mui/material';
import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Form, useOutletContext } from 'react-router-dom';
import  "./Playlist.css"
import { DeletePlayList, DeleteSong, getUser } from '../../services/spotify.service';
import { useState } from 'react';
import { useEffect } from 'react';





function Playlist(playlist) {

  const { user, authenticateUser } = useOutletContext()

  
  const [Userupdate, setUserupdate] = useState(null);
  console.log(Userupdate)

  const deletePl = (playlistId, userId) => DeletePlayList({playlistId, userId})
  const deleteTrack = (playlistId, trackId) => DeleteSong({playlistId, trackId})

useEffect(() => {
  const UserData = async () => {
    const data = await getUser(user._id);
    setUserupdate(data);
  };
  UserData();
}, [user._id]);
  

  return (
    <div key={playlist._id}>
             <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Form action={`/playlist/${playlist._id}/${user._id}`} method="POST">
        <TextField sx={{ borderColor: 'white'}} id="outlined-basic"  variant="outlined" label={playlist.name} defaultValue={playlist.name} name="name"/> 
        <Button >Edit</Button>
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
  )
}

export default Playlist