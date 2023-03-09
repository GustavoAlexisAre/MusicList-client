import { Accordion, AccordionDetails, AccordionSummary, Button, Input, TextField, Typography } from '@mui/material';
import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Form, useOutletContext } from 'react-router-dom';
import  "./Playlist.css"
import { DeletePlayList, DeleteSong, getUser, UpdatePlayList } from '../../services/spotify.service';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
        {/* {playlist.tracks.map((eachSong) => ( */}
            {/* <div className='eachSong' key={eachSong._id}> */}
              <div>
              {/* <Typography> Song: {eachSong.name} </Typography>
              <Typography>Artist: {eachSong.artist}</Typography>
              <audio controls>
                <source src={eachSong.url}>
                </source>
              </audio>
                <img src={eachSong.image} alt={eachSong.name}/>
                <Button onClick={() => deleteTrack(playlist._id, eachSong._id)}>Delete</Button> */}

                <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Song Name</TableCell>
            <TableCell align="right">Artist</TableCell>
            <TableCell align="right">Player</TableCell>
            <TableCell align="right">Disc</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {playlist.tracks.map((eachSong) => (
            <TableRow
              key={eachSong._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            > <TableCell component="th" scope="row">
                {eachSong.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {eachSong.artist}
              </TableCell>
              <TableCell align="right"> <audio controls>
                <source src={eachSong.url}>
                </source>
              </audio></TableCell>
              <TableCell align="right"><img src={eachSong.image} alt={eachSong.name}/></TableCell>
              <TableCell align="right"> <Button onClick={() => deleteTrack(playlist._id, eachSong._id)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

              </div>

              
        {/* ))} */}
      
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  )
}

export default Playlist