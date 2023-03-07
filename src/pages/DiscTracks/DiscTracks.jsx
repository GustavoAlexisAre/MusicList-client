import React from 'react'
import { useLoaderData, useOutletContext } from 'react-router-dom'
import TrackCard from '../../components/TrackCard/TrackCard'
import { getTracks } from '../../services/spotify.service'
import "./DiscTracks.css"

export const getTrackLoader = async ({params}) => {
    const {data: tracks} = await getTracks(params.id)
    return {tracks}
  }



function DiscTracks() {

  const { user} = useOutletContext()
  console.log(user)
  const {tracks} = useLoaderData()
    // console.log(tracks)
   

  return (
    <div className='trackdetails'>
       <TrackCard key={tracks.tracks.id} track={tracks} user={user}/>
      </div>
  )
}

export default DiscTracks