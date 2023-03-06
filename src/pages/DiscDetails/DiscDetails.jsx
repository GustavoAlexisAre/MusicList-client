import React from 'react'
import { useLoaderData } from 'react-router-dom'
import DiscCard from '../../components/DiscCard/DiscCard'
import { getDiscDetails } from '../../services/spotify.service'
import "./DiscDetails.css"

export const getDiscLoader = async ({params}) => {
    const {data: disc} = await getDiscDetails(params.id)
    return {disc}
  }

function DiscDetails() {

    const {disc} = useLoaderData()

  return (
    <div className='discdetails'>
    <div className="cardDisc">
   { disc ? disc.map((disc) => (
        <DiscCard key={disc.id} disc={disc} />
      )) : null}
      </div>
      </div>
  )
}

export default DiscDetails