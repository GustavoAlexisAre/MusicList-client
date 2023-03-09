import "./App.css";
import {Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage, { createPlayListAction } from "./pages/ProfilePage/ProfilePage";
import SignupPage, { signupPageAction } from "./pages/SignupPage/SignupPage";
import LoginPage, { loginPageAction } from "./pages/LoginPage/LoginPage";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";

import{
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
} from "react-router-dom"
import Root from "./pages/Root/Root"
import DashboardPage, { getArtistAction } from "./pages/DashboardPage/Dashboard";
import NavbarUser from "./components/NavbarUser/NavbarUser";
import DiscDetails, { getDiscLoader } from "./pages/DiscDetails/DiscDetails";
import DiscTracks, { getTrackLoader } from "./pages/DiscTracks/DiscTracks";
import PlaylistPage, { getPlayliststLoader } from "./pages/PlaylistPage/PlaylistPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root/>}>
    <Route 
        path="/" 
        element={
            <>
                <Navbar/>
                <HomePage />
            </>
        }
    />

    <Route
      path="/profile"
      action={createPlayListAction}
      element={
        <IsPrivate>
           <NavbarUser/>
          <ProfilePage />
        </IsPrivate>
      }
    />

<Route
      path="/dashboard"
      action={getArtistAction}
      element={
        <IsPrivate>
           <NavbarUser/>
          <DashboardPage />
        </IsPrivate>
      }
    />
    <Route
      path="/playlists"
      loader={getPlayliststLoader}
      element={
        <IsPrivate>
           <NavbarUser/>
          <PlaylistPage />
        </IsPrivate>
      }
    />
  <Route
      path="/disc-details/:id"
      loader={getDiscLoader}
      element={
        <IsPrivate>
           <NavbarUser/>
          <DiscDetails/>
        </IsPrivate>
      }
    />

<Route
      path="/disc-track/:id"
      loader={getTrackLoader}
      element={
        <IsPrivate>
           <NavbarUser/>
          <DiscTracks/>
        </IsPrivate>
      }
    />

    <Route
      path="/signup"
      action={signupPageAction}
      element={
        <IsAnon>
          <Navbar/>
          <SignupPage />
        </IsAnon>
      }
    />
    <Route
      path="/login"
      action={loginPageAction}
      element={
        <IsAnon>
          <Navbar/>
          <LoginPage />
        </IsAnon>
      }
    />
  </Route>
  )
)
function App() {
  return <RouterProvider router={router}/>
  
}

export default App;
