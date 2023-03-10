import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import DiscCard from '../../components/DiscCard/DiscCard'
import { getDiscDetails } from '../../services/spotify.service'
import "./DiscDetails.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const getDiscLoader = async ({params}) => {
    const {data: disc} = await getDiscDetails(params.id)
    return {disc}
  }

function DiscDetails() {

    const {disc} = useLoaderData()
    const [expanded, setExpanded] = React.useState('panel1');

  return (
    <div className='discdetails'>
    <div className="cardDisc">

    <Accordion expanded={expanded === 'panel1'}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Discography</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1200}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Disc Name</TableCell>
            <TableCell align="center">Disc</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              key={disc._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}> 
            { disc ? disc.map((disc) => (
        <DiscCard key={disc.id} disc={disc} />
      )) : null}
      </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
          </Typography>
        </AccordionDetails>
      </Accordion>
  
      </div>
      </div>
  )
}

export default DiscDetails