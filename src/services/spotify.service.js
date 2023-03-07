import axios from "axios"


const baseURL = "http://localhost:5005/user"

const spotifyService = axios.create({baseURL: baseURL})

export const getArtist = async (artistName) => await spotifyService.get(`/artists/${artistName}`)

export const getDiscDetails = async (artistId) => await spotifyService.get(`/artists/${artistId}/albums`)

export const getTracks = async (discId) => await spotifyService.get(`/albums/${discId}/tracks`)

export const createPlayList = async (PlaylistName) => await spotifyService.post("/playlist", PlaylistName)

export const getPlayList = async () => await spotifyService.get("/playlist")

export const DeletePlayList = async (PlaylistId) => await spotifyService.delete(`/playlist/${PlaylistId}`)

export const UpdatePlayList = async (PlaylistId, name) => await spotifyService.get(`/playlist/${PlaylistId}`, {name})

export const CreateSong = async (SongData) => await spotifyService.post("/song", SongData)

export const DeleteSong = async (SongId) => await spotifyService.delete(`/song/${SongId}`)

export const getUser = async (userId) => await spotifyService.get(`/user/${userId}`)
