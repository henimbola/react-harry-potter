import React, { useContext } from "react";
import { useParams } from "react-router";
import { Container } from "@mui/material";
import { CharactersContext } from "src/Common/contexts/CharactersProvider";
import { css } from "@emotion/react";
import MoonLoader from "react-spinners/MoonLoader";
import CharacterComponent from "./CharacterComponent";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Characters = () => {

    const characters = useContext(CharactersContext);
    const { id } = useParams();

    const index: number = id ? +id : 0;

    const datas = characters ? characters.data : null;
    const character = datas ? datas[index] : null;

    return <Container maxWidth="lg">
        {character != null ? <CharacterComponent character={character} /> : <MoonLoader color="purple" loading css={override} size={150} />}
    </Container>
}

export default Characters;