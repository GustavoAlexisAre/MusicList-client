import { Typography } from "@mui/material";
import Button from "@mui/material/Button/Button";
import { Form, redirect,  useOutletContext } from "react-router-dom";
import "./ProfilePage.css";
import { createPlayList,  getUser } from "../../services/spotify.service";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Playlist from "../../components/Playlist/Playlist";


export const createPlayListAction = async({request}) => {
  const formData = await request.formData()
  const name = formData.get("name")
  const userId = formData.get("userId")
  await createPlayList({name , userId})
  return redirect("/dashboard")
}


function ProfilePage() {
 const { user } = useOutletContext()
//  authenticateUser()


const [Userupdate, setUserupdate] = useState(null);

useEffect(() => {
  const UserData = async () => {
    const data = await getUser(user._id);
    setUserupdate(data);
  };
  UserData();
}, [user._id]);


  return (

    
    <div className="profilepage">
<div className="findmusic">
<Typography>Playlist Maker</Typography>
    

<Form action="/profile" method="POST">
      <input type="hidden" name="userId" value={user._id} />
        <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
          <TextField 
          fullWidth
          label="Playlist Name"
          type="text"
          name="name"
          color="secondary"
          InputLabelProps={{
          style: {
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            width: '100%',
            color: 'white'
          } }}
         sx={{'& .MuiTextField-root': { m: 1, width: '25ch'}, '& fieldset': { borderColor: 'white'}, input: { color: 'white' } }}
        />   
        </Box>
        <div className="buttondashboard">
      <Button type="submit" variant="contained" sx={{ bgcolor: "#F72585" }}>Create </Button>
      </div>
    </Form>
    
</div>

 <div className="playlistDiv">
{/* playlist */}
{Userupdate ? Userupdate.data.data.playlists.map((playlists) => (
  <Playlist className="playlist" key={playlists._id} {...playlists}/>
)):null}
</div>
    </div>
  );
}

export default ProfilePage;
 