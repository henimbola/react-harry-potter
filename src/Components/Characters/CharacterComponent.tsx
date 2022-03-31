import React from "react";
import { Card, CardMedia, Box, Typography, CardContent, Button } from "@mui/material";

const CharacterComponent = ({ character }: any) => (
    <Card sx={{ display: 'flex' }}>
        <CardMedia component="img" sx={{ width: 300 }} image={character.image} alt="Character" />
        <Box sx={{ padding: 5, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardContent>
                <Typography component="div" variant="h3">
                    {character.name}
                </Typography>
                <Typography> <b>Genre :</b> {character.gender} </Typography>
                <Typography> <b>Vivant :</b> {character.name} </Typography>
                <Typography> <b>Ancetres :</b> {character.ancestry} </Typography>
                <Typography> <b>Couleurs d&apos; yeux :</b> {character.eyeColour} </Typography>
                <Typography> <b>Cheveux :</b> {character.hairColour} </Typography>
                <Typography> <b>Espèce :</b> {character.species} </Typography>
            </CardContent>
            <Box>
                <Button>Add to favorites</Button>
            </Box>
        </Box>
    </Card>
)

export default CharacterComponent;