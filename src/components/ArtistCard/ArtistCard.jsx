import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./ArtistCard.css"

function ArtistCard(artist) {

    const {name, image, id } = artist.artist
  
  return (
    <div className='card'> 
    
    <Card sx={{ maxWidth: 345 }} key={id}>
    <CardMedia
      sx={{ height: 250, width:300 }}
      image={image}
      title={name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
    </CardContent>
    <CardActions>
      <Button href={`/disc-details/${id}`} size="small" >Discs</Button>
    </CardActions>
  </Card></div>
  )
}

export default ArtistCard