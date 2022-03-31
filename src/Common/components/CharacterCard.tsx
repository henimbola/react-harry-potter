import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';
import routes from 'src/Router/routes';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';
import * as FavoritesUtils from 'src/utils/favoritesUtils';

type Props = {
    name?: string,
    imageUrl?: string,
    index: number
}

const CharacterCard = ({ name, imageUrl, index }: Props) => {

    const [favorite, setFavorite] = useState(false);
    const navigate = useNavigate();

    const favoriteHandleOnClick = (e: any) => {
        if (favorite) {
            FavoritesUtils.removeCharacterFromFavorites(index);
        } else {
            FavoritesUtils.addCharacterToFavorites(index);
        }

        setFavorite(!favorite);
    }

    const navigateToCharacterDetail = (id: number) => { navigate(`${routes.CHARACTERS}/${id}`) }

    useEffect(() => {
        const isFavorite = FavoritesUtils.isCharacterFavorite(index)
        if (isFavorite) {
            setFavorite(true);
        }

        if (!isFavorite) {
            setFavorite(false);
        }
    }, [index])

    return <Grid item lg={3}>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="300"
                image={imageUrl}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"> {name} </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <Button size="small" onClick={() => { navigateToCharacterDetail(index) }}>
                    Détails
                </Button>
                <IconButton color="primary" aria-label="upload picture" component="span" onClick={favoriteHandleOnClick}>
                    {favorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                </IconButton>
            </CardActions>
        </Card>
    </Grid >;
}

export default CharacterCard;