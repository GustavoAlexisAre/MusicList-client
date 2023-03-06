import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';



function DiscCard(disc) {

    const {name, image, id} = disc.disc
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
      <Button href={`/disc-track/${id}`} size="small" >Tracks</Button>
    </CardActions>
  </Card></div>
  )
}

export default DiscCard