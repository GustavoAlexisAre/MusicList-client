import "./SignupPage.css"
import { Form, Link, redirect, useActionData } from "react-router-dom"
import authService from "../../services/auth.service"
import { Button, createTheme, TextField, Typography } from "@mui/material"

export const signupPageAction = async ({ request }) => {
	const formData = await request.formData()
	const email = formData.get("email")
	const password = formData.get("password")
	const name = formData.get("username")

	try {
		await authService.signup({ email, password, name })
		return redirect("/login")
	} catch (error) {
		const {
			request: { response }
		} = error
		const { message } = JSON.parse(response)
		return message
	}
}

function SignupPage() {
	const errorMessage = useActionData()

	const theme = createTheme({
		typography: {
		  fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		  ].join(','),
		  fontSize: 20,
		},
	  });

	return (
		<div className="signupPage">
		<div className="logintext" >
			<Typography  theme={theme}> Sign Up</Typography>
		</div>
			<Form action="/signup" method="POST">

	<div className="loginDiv">
		<div className="input">
		<TextField 
          label="Username"
          type="text"
          name="username"
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
        </div>

          <div className="input">
          <TextField
          required
          label="Email"
          type="email"
          name="email"
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
        </div>
        <div className="input">
        <TextField 
          label="Password"
          type="password"
          name="password"
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
        </div>

     	 <Button className="buttonLogin" type="submit" variant="contained" sx={{ bgcolor: "#F72585" }}>Sign Up</Button>
		 <div className="loginsignup">
		  <Typography>Already have account?</Typography>
			<Button  href={"/login"}> Login</Button>
		 </div>
		</div>	
			</Form>

			{errorMessage && <p className="error-message">{errorMessage}</p>}

			
	</div>
	)
}

export default SignupPage
