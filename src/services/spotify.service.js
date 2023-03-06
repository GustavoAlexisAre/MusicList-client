import axios from "axios"




const baseURL = "http://localhost:5005/user"

const spotifyService = axios.create({baseURL: baseURL})

export const getArtist = async (artistName) => await spotifyService.get(`/artists/${artistName}`)

export const getDiscDetails = async (artistId) => await spotifyService.get(`/artists/${artistId}/albums`)

export const getTracks = async (discId) => await spotifyService.get(`/albums/${discId}/tracks`)

export const createPlayList = async (PlaylistName) => await spotifyService.post("/playlist", PlaylistName)