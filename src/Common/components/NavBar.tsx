import { AppBar, Toolbar, Button } from "@mui/material";
import React from "react";
import routes from "src/Router/routes";
import { useNavigate } from "react-router";

const NavBar = () => {

    const navigate = useNavigate();

    const navigateToHome = () => { navigate(routes.HOME) }
    const navigateToFavorites = () => { navigate(routes.FAVORITES) }

    return <AppBar position="static" sx={{ marginBottom: 5 }}>
        <Toolbar>
            <Button color='inherit' onClick={navigateToHome}> Home </Button>
            <Button color='inherit' onClick={navigateToFavorites}> Favoris </Button>
        </Toolbar>
    </AppBar >
}

export default NavBar;