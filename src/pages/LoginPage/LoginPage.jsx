import "./LoginPage.css"

import {
	Form,
	Link,
	useActionData,
	useNavigate,
	useOutletContext
} from "react-router-dom"

import authService from "../../services/auth.service"
import { Box, Button, createTheme, TextField, Typography } from "@mui/material"

export const loginPageAction = async ({ request }) => {
	const formData = await request.formData()
	const email = formData.get("email")
	const password = formData.get("password")

	try {
		const { data } = await authService.login({ email, password })
		// Evite el requerir las funciones del contexto haciendo la llamada a la api
		// y devolviendo el Token del context al componente, el componente lo pide del useActionData
		// Y como el componente tiene acceso a los metodos del contexto, somos capaces de mantener la funcionalidad que ya existia.
		return {
			authToken: data.authToken,
			error: null
		}
	} catch (error) {
		const {
			request: { response }
		} = error
		const { message } = JSON.parse(response)
		return { error: message, authToken: null }
	}
}

function LoginPage(a) {
	const navigate = useNavigate()
	const actionData = useActionData()
	// Aqui extraemos las funciones del contexto que son necesarias para reflejar la autenticacion exitosa en la app
	const { storeToken, authenticateUser } = useOutletContext()

	// Como action data puede no traer informacion inicialmente, no podemos destructurar, pero creamos estas variables que pueden o no tener ese dato.
	// Cuando el dato exista y se vuelva a pintar el componente, mostraremos el error o ejecutamos la funcionalidad que refleja la sesion en caso de traer el token.
	const authToken = actionData?.authToken
	const error = actionData?.error

	if (authToken) {
		storeToken(authToken)
		authenticateUser()
		navigate("/")
	}

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
		// <div className="LoginPage">
		// 	<h1>Login</h1>

		// 	<Form action="/login" method="POST">
		// 		<label>Email:</label>
		// 		<input type="email" name="email" />
    
		// 		<label>Password:</label>
		// 		<input type="password" name="password" />
    
		// 		<button type="submit">Login</button>
		// 	</Form>
		// 	{error && <p className="error-message">{error}</p>}
    
		// 	<p>Don't have an account yet?</p>
		// 	<Link to={"/signup"}> Sign Up</Link>
		// </div>

    <>
    <div className="loginpage">
    <div className="logintext" >
    <Typography  theme={theme}> Login </Typography>
    </div>
    <Form action="/login" method="POST">
      <div className="loginDiv">
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

      <Button className="buttonLogin" type="submit" variant="contained" sx={{ bgcolor: "#F72585" }}>Login</Button>
      <div className="loginsignup">
      <Typography>Don't have an account yet?</Typography>
       <Button  href={"/signup"}> Sign Up</Button>
       </div>
      </div>
      
      </Form>
      
      {error && <Typography theme={theme} className="error-message">{error}</Typography>}
      </div>
      </>

	)
}

export default LoginPage
