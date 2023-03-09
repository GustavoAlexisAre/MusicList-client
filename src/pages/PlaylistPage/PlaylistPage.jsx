import { Accordion, AccordionDetails, AccordionSummary, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { getPlayList } from '../../services/spotify.service'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useLoaderData } from 'react-router-dom';
import "./PlaylistPage.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export const getPlayliststLoader = async () => {
    const {data: playlists} = await getPlayList()
    return {playlists}
  }


function PlaylistPage() {

    const {playlists} = useLoaderData()

    
  return ( 
  
<div  className='playlistdetails'>
    <div className='cardplaylist'>
    <Typography>Playlists</Typography>
    {playlists.map((playlist)=> (
      <div className='cardpl1'>
          <Accordion>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel1a-content"
     id="panel1a-header"
   >
   <Typography>{playlist.name}</Typography>
   </AccordionSummary>
   <AccordionDetails>
   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Song Name</TableCell>
            <TableCell align="right">Artist</TableCell>
            <TableCell align="right">Player</TableCell>
            <TableCell align="right">Disc</TableCell>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </AccordionDetails>
 </Accordion>
 </div>
    ))}
  
</div>
</div>
  )
}

export default PlaylistPage