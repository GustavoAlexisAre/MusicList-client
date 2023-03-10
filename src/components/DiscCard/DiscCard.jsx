import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function DiscCard(disc) {

    const {name, image, id} = disc.disc
  return (
    <div className='card2'> 
    
    {/* <Card sx={{ maxWidth: 345 }} key={id}>
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
  </Card> */}


   {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1200}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Disc Name</TableCell>
            <TableCell align="center">Disc</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody> */}
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { width: 400 } }}> 
            <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell align="right"><img src={image} alt={name}/></TableCell>
               <TableCell align="right">
               <Button href={`/disc-track/${id}`} size="small" >Tracks</Button>
               </TableCell>
            </TableRow>
        {/* </TableBody>
      </Table>
    </TableContainer> */}
  </div>
  )
}

export default DiscCard