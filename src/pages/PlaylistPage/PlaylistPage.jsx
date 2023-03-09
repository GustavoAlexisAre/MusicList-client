import { Accordion, AccordionDetails, AccordionSummary, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { getPlayList } from '../../services/spotify.service'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useLoaderData } from 'react-router-dom';
import "./PlaylistPage.css"



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
   {playlist.tracks.map((eachSong) => (
            <div className='eachSong' key={eachSong._id}>
           
              <Typography> Song: {eachSong.name} </Typography>
              <Typography>Artist: {eachSong.artist}</Typography>
              <audio controls>
                <source src={eachSong.url}>
                </source>
              </audio>
                <img src={eachSong.image} alt={eachSong.name}/>
              </div>
        ))}
   </AccordionDetails>
 </Accordion>
 </div>
    ))}
  
</div>
</div>
  )
}

export default PlaylistPage