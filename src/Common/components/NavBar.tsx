import { AppBar, Toolbar, Button, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import routes from "src/Router/routes";
import { useNavigate } from "react-router";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from "../contexts/CustomThemeProvider";

const NavBar = () => {

    const navigate = useNavigate();

    // Theme Setup
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    const navigateToHome = () => { navigate(routes.HOME) }
    const navigateToFavorites = () => { navigate(routes.FAVORITES) }

    return <AppBar position="static" sx={{ marginBottom: 5 }}>
        <Toolbar>
            <Typography sx={{ flexGrow: 1 }}>
                <Button color='inherit' onClick={navigateToHome}> Home </Button>
                <Button color='inherit' onClick={navigateToFavorites}> Favoris </Button>
            </Typography>

            <IconButton color="inherit" onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </Toolbar>
    </AppBar >
}

export default NavBar;