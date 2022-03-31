import { Grid } from "@mui/material";
import React from "react";
import CharacterCard from "./CharacterCard";

const CharactersListRenderer = ({ data }: any) => {
    return <Grid container spacing={3}>
        {
            data ? data.map(
                (character: any, index: number) => <CharacterCard name={character.name} imageUrl={character.image} index={index} />
            ) : null
        }
    </Grid>
}

export default CharactersListRenderer;