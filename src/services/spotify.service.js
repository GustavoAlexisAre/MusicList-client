import axios from "axios"


const baseURL = process.env.REACT_APP_SERVER_URL ||"http://localhost:5005/user"

const spotifyService = axios.create({baseURL: baseURL + "/user"})

export const getArtist = async (artistName) => await spotifyService.get(`/artists/${artistName}`)

export const getDiscDetails = async (artistId) => await spotifyService.get(`/artists/${artistId}/albums`)

export const getTracks = async (discId) => await spotifyService.get(`/albums/${discId}/tracks`)

export const createPlayList = async (PlaylistName) => await spotifyService.post("/playlist", PlaylistName)

export const getPlayList = async () => await spotifyService.get("/playlist")

export const DeletePlayList = async (playlistData) => await spotifyService.delete(`/playlist/${playlistData.playlistId}/${playlistData.userId}`)

export const UpdatePlayList = async (PlaylistId, name) => await spotifyService.get(`/playlist/${PlaylistId}`, {name})

export const CreateSong = async (SongData) => await spotifyService.post("/song", SongData)

export const DeleteSong = async (SongId) => await spotifyService.delete(`/song/${SongId.trackId}/${SongId.playlistId}`)

export const getUser = async (userId) => await spotifyService.get(`/user/${userId}`)
